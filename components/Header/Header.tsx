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
      pt-1
      pb-1
      border-b-1
      border-gray-200
      w-full
    '>
      {/* Left section */}
      <HeaderLeft />
      {/* right section */}
      <HeaderRight />
    </div>
  );
}
export default Header;