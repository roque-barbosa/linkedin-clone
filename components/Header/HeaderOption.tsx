import React from 'react'
import Image from 'next/image'

interface HeaderOptionProps {
  Icon?: any
  title: string
  avatar?: any
}

const HeaderOption: React.FC<HeaderOptionProps> = ({avatar, Icon, title}) => {
  return (
    <div className='
      flex-col
      w-15
      h-10
      items-center
      ml-4
      cursor-pointer
      text-gray-600
      hover:text-black
      w-30
    '>
      {Icon && (
        <div className='
          flex
          justify-center
          items-center
        '>
          <Icon className='icon p-0 m-0'/>
      </div>
      )}

      {avatar && (
        <div className='
          flex
          justify-center
          items-center
          w-7
          h-7
        '>
          <Image className='
            rounded-full
            '
            src={avatar}
            width={28}
            height={28}
            layout='fixed'
          />
        </div>
      )}
      
      <p className='
        hidden
        lg:flex
        justify-center
        items-center
      '>
        {title}
      </p>
    </div>
  );
}
export default HeaderOption;