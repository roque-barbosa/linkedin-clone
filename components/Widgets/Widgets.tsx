import React from  'react';
import WidgetsHeader from './WidgetsHeader';
import {
  DotsCircleHorizontalIcon
} from '@heroicons/react/solid';

const Widgets: React.FC = () => {

  const newsArticle = (heading: string, subtitle: string) => (
    <div className='
      flex
      items-center
      justify-center
      cursor-pointer
      p-2
      mb-3
      hover:bg-gray-100
    '>
      <div className='
        text-blue-500
        mr-3
      '>
        <DotsCircleHorizontalIcon className='w-7 h-7' />
      </div>
      <div>
        <h4 className='
          font-bold
          text-lg
        '>
          {heading}
        </h4>
        <p className='
          text-sm
          text-gray-400
        '>
          {subtitle}
        </p>
      </div>
    </div>
  );

  return(
    <div className='
      hidden
      lg:flex
      mr-10
      max-w-xs
    '>
      <div className='
        sticky
        top-20
        rounded-2xl
        border-2
        bg-white
        border-gray-200
      '>
        <WidgetsHeader />
        {newsArticle('finishing this build', 'I dont like double quotes')}
        {newsArticle('finishing this build', 'I dont like double quotes')}
        {newsArticle('finishing this build', 'I dont like double quotes')}
        {newsArticle('finishing this build', 'I dont like double quotes')}
      </div>
    </div>
  );
}
export default Widgets;