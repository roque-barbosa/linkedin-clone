import React from 'react';

interface SidebarButtonProps {
  name: string
}

const SidebarBottom: React.FC<SidebarButtonProps> = ({name}) => {

  const recentItem = (topic: string) => (
    <div className='
      flex
      cursor-pointer
      p-1
      mb-1
      hover:bg-gray-100
      hover:rounded-sm
      hover:text-black
    '>
      <span className='
        mr-2
        ml-2
      '>#</span>
      <p>{topic}</p>
    </div>
  );


  return (
    <div className='
      text-gray-400
      font-bold
    '>
      <p className='
        pb-2
        ml-1
        font-normal
        text-black
      '>
        {name}
      </p>
      {recentItem('react')}
      {recentItem('Elixir')}
      {recentItem('Software')}
      {recentItem('IFAL')}
      {recentItem('UFAL')}
      {recentItem('Dogs')}
    </div>
  );
}
export default SidebarBottom;