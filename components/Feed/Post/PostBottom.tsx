import React from 'react';
import InputOption from '../InputOption';
import {
  ThumbUpIcon,
  ChatIcon
} from '@heroicons/react/outline'
import {
  ShareIcon,
  ArrowCircleRightIcon
} from '@heroicons/react/solid'

const PostBottom: React.FC = () => {
  return (
    <div className='
      flex
      justify-evenly
    '>
      <InputOption
        text='Like'
        Icon={ThumbUpIcon}
        color='text-gray-500' 
      />
      <InputOption
        text='Like'
        Icon={ChatIcon}
        color='text-gray-500' 
      />
      <InputOption
        text='Like'
        Icon={ShareIcon}
        color='text-gray-500' 
      />
      <InputOption
        text='Like'
        Icon={ArrowCircleRightIcon}
        color='text-gray-500' 
      />
    </div>
  );
}
export default PostBottom;