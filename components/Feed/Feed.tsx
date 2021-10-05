import React from  'react';
import InputBlock from './InputBlock';
import Post from './Post';

const Feed: React.FC = () => {
  return(
    <div className='
      flex-7
      ml-3
      mr-5
      bg-blue-200
    '>
      <InputBlock />

      <Post />
    </div>
  );
}
export default Feed;