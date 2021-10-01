import React from 'react';
import Image from 'next/image'
import Search from './Search';

const HeaderLeft: React.FC = () => {
  return (
    <div className='
      flex
      p-1
      ml-10
    '>
      <Image className=''
        src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
        alt='LinkedIn Logo'
        width={50}
        height={50}
      />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
    </div>
  );
}
export default HeaderLeft;