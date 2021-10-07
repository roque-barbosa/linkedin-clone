import React from 'react';
import SidebarTop from './SidebarTop';
import SidebarStats from './SidebarStats';
import SidebarBottom from './SidebarBottom';

const Sidebar: React.FC = () => {
  return (
    <div className='
      flex-3
    '>
      <div className='
        sticky
        top-2
        rounded-2xl
        border-2
        bg-white
        border-gray-200
      '>
        <SidebarTop />
        <SidebarStats title='Who viwed You' number={42} />
        <SidebarStats title='Views on post' number={13} />
        <SidebarBottom name='Recent' />
      </div>
    </div>
  );
}
export default Sidebar;