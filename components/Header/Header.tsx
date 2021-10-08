import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header: React.FC = () => {
  return (
    <div className='
      flex
      items-center
      justify-evenly
      sticky
      top-2
      pt-1
      pb-1
      border-b-1
      bg-white
      border-gray-200
      w-full
      z-50
    '>
      {/* Left section */}
      <HeaderLeft />
      {/* right section */}
      <HeaderRight />
    </div>
  );
}
export default Header;