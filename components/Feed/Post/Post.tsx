import React from 'react';
import PostBody from './PostBody';
import PostBottom from './PostBottom';
import Postheader from './PostHeader';

interface PostProps {
  name: string
  description: string
  message: string
  photoUrl?: string
}

const Post: React.FC<PostProps> = ({name, description, message, photoUrl}) => {
  return (
    <div className='
      border-2
      bg-white
      border-gray-200
      p-4
      mb-4
      rounded-xl
    '>
      <Postheader 
        avatarUrl={photoUrl}
        name={name}
        description={description}
      />
      <PostBody message={message} />
      <PostBottom />
    </div>
  );
}
export default Post;