import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header: React.FC = () => {
  return (
    <div className='
      flex
      items-center
      justify-between
    '>
      {/* Left section */}
      <HeaderLeft />
      {/* right section */}
      <HeaderRight />
    </div>
  );
}
export default Header;