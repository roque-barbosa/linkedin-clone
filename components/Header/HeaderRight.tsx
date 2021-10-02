import React from 'react';
import HeaderOption from './HeaderOption';
import {
  HomeIcon,
  BriefcaseIcon,
  ChatIcon,
  BellIcon,
  UserGroupIcon
} from '@heroicons/react/solid'

const HeaderRight: React.FC = () => {
  return (
    <div className='
      flex
      justify-evenly
    '>
      <HeaderOption title='Home' Icon={HomeIcon} />
      <HeaderOption title='My Network' Icon={UserGroupIcon} />
      <HeaderOption title='Jobs' Icon={BriefcaseIcon} />
      <HeaderOption title='Messaging' Icon={ChatIcon} />
      <HeaderOption title='Notifications' Icon={BellIcon} />
      <HeaderOption
        title='Me'
        avatar='https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbG92ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
      />
    </div>
  );
}
export default HeaderRight;