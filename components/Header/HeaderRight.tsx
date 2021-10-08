import React from 'react';
import HeaderOption from './HeaderOption';
import {
  HomeIcon,
  BriefcaseIcon,
  ChatIcon,
  BellIcon,
  UserGroupIcon
} from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/actions/user';
import { auth } from '../../FirebaseConfig'

const HeaderRight: React.FC = () => {

  const user = useSelector((state: any) => state.user)

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(userLogout());
    auth.signOut();
  }

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
        onClick={logoutOfApp}
        title='Me'
        avatar={user.photoUrl}
      />
    </div>
  );
}
export default HeaderRight;