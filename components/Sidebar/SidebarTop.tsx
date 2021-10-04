import React from 'react';
import Image from 'next/image'

const SidebarTop: React.FC = () => {
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
          src='https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbG92ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
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
        Doguinho
      </h2>
      <h4 className='
        flex
        justify-center
        text-gray-500
        text-sm
      '>
        dog@doguinho.com
      </h4>
    </div>
  );
}
export default SidebarTop;