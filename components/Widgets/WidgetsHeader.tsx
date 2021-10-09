import React from 'react';
import {
  InformationCircleIcon
} from '@heroicons/react/solid';

const WidgetsHeader: React.FC = () => {
  return (
    <div className='
      flex
      items-center
      justify-center
      p-3
      ml-6
      mr-4
    '>
      <h2 className='
        flex-8
        font-bold
        text-xl
      '>
        Linkedin News
      </h2>
      <InformationCircleIcon className='w-7 h-7 flex-3' />
    </div>
  );
}
export default WidgetsHeader;