import React, {useEffect} from  'react';
import InputBlock from './InputBlock';
import Post from './Post/Post';
import { useSelector, useDispatch } from "react-redux";
import { db } from '../../FirebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { postsUpdateList } from '../../store/actions/posts';

const Feed: React.FC = () => {

  const posts = useSelector((state: any)=> state.posts)
  const dispatch = useDispatch();

  const testUserData = useSelector((state:any) => state);
  
  console.log(testUserData)

  useEffect(() => {

    const collectionRef  = collection(db, 'posts')
  
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
  
    onSnapshot(q, (querySnapshot) => {
      const newPosts: any[] = [];
      querySnapshot.forEach((post) => {
        newPosts.push(post.data())
      });
      dispatch(postsUpdateList([...newPosts]))
    })

  }, []);

  return(
    <div className='
      flex-7
      ml-3
      mr-5
    '>
      <InputBlock />

      {posts.map((post:any) => (
        <Post 
        key={`${post.name}-${post.timestamp}`}
        name={post.name}
        description={post.description}
        message={post.message}
        photoUrl={post.photoUrl}
      />
      ))}
    </div>
  );
}
export default Feed;