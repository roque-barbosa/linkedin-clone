import React from 'react';

interface SidebarStatsProps {
  title: string
  number?: number
}

const SidebarStats: React.FC<SidebarStatsProps> = ({title, number}) => {
  return (
    <div className='
      flex
      justify-between
      mt-2
      p-2
      pb-1
      mb-2
      bg-white
    '>
      <p className='
      text-gray-400
      font-thin
      text-sm
      '>
        {title}
      </p>
      <p className='
        text-blue-400
        font-bold
        text-sm
      '>
        {number}
      </p>
    </div>
  )
}
export default SidebarStats
