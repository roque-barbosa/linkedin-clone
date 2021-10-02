import React from 'react';
import Image from 'next/image'
import SearchBox from './SearchBox';

const HeaderLeft: React.FC = () => {
  return (
    <div className='
      flex
      p-1
      ml-10
      items-center
    '>
      <Image className='
        object-contain
      '
        src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
        alt='LinkedIn Logo'
        width={50}
        height={50}
        layout='fixed'
      />
        <SearchBox />
    </div>
  );
}
export default HeaderLeft;