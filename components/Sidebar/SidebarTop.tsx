import React from 'react';
import Image from 'next/image'
import { UserIcon } from '@heroicons/react/solid'

const SidebarTop: React.FC = () => {
  return (
    <div className='
      flex-col
      align-middle
      items-center
      ml
      w-50
    '>
      <img src="" alt="" />
      <div className='
        flex
        items-center
        justify-center
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
      '>
        Doguinho
      </h2>
      <h4 className='
        flex
        justify-center
      '>
        dog@doguinho.com
      </h4>
    </div>
  );
}
export default SidebarTop;