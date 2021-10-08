import React from 'react';
import Image from 'next/image'
import { useSelector } from 'react-redux';

const SidebarTop: React.FC = () => {

  const user = useSelector((state: any) => state.user)

  return (
    <div className='
      flex-col
      align-middle
      items-center
      
      border-b-0
      bg-white
      pb-2
    '>
      <img
        className='
          -mb-5
          rounded-t-2xl
        '
        src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png"
        alt="Perfil Background"
      />
      <div className='
        flex
        items-center
        justify-center
        mb-3
      '>
        <Image className='
          rounded-full
          '
          src={user.photoUrl}
          width={50}
          height={50}
          layout='fixed'
        /> 
      </div>
      <h2 className='
        flex
        justify-center
        text-gray-500
        text-lg
      '>
        {user.displayName}
      </h2>
      <h4 className='
        flex
        justify-center
        text-gray-500
        text-sm
      '>
        {user.email}
      </h4>
    </div>
  );
}
export default SidebarTop;