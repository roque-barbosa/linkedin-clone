import React, {useState} from  'react';
import InputBlock from './InputBlock';
import Post from './Post/Post';
import { useSelector, useDispatch } from "react-redux";

const Feed: React.FC = () => {

  const posts = useSelector((state: any)=> state.posts)

  //const [posts, setPosts] = useState(Array());

  return(
    <div className='
      flex-7
      ml-3
      mr-5
    '>
      <InputBlock />

      {/* {posts.map((post: any) => (
        <Post 
        name={post.name}
        description={post.description}
        message={post.message}
        photoUrl={post.photoUrl}
      />
      ))} */}
      {/* {console.log(posts[0])} */}
      {posts.map((el:any) => console.log(el.name))}

      <Post 
        name='Roque Junior'
        description='Description Test Test'
        message='This is just a test message, please be fine.'
        photoUrl='https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbG92ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
      />
    </div>
  );
}
export default Feed;