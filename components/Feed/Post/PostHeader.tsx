import React from 'react';
import Image from 'next/image'

interface PostheaderProps {
  name: string
  description: string
  avatarUrl?: string
}


const Postheader: React.FC<PostheaderProps> = ({name, description, avatarUrl}) => {
  return (
    <div className='
      flex
      mb-2
      items-center
    '>
      {avatarUrl && (
        <div className='
          flex
          justify-center
          items-center
          w-7
          h-7
        '>
          <Image className='
            rounded-full
            '
            src={avatarUrl}
            width={28}
            height={28}
            layout='fixed'
          />
        </div>
      )}
      <div className='
        ml-2
      '>
        <h2 className='
          text-xl
          font-bold
        '>
          {name}
        </h2>
        <p className='
          font-light
          text-gray-400
          overflow
          break-words
        '>
          {description}
        </p>
      </div>
    </div>
  );
}
export default Postheader;