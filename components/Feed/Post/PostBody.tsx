import React from 'react';

interface PostBodyProps {
  message: string

}

const PostBody: React.FC<PostBodyProps> = ({message}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
export default PostBody;