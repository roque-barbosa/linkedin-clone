import React from  'react';
import WidgetsHeader from './WidgetsHeader';

const Widgets: React.FC = () => {
  return(
    <div className='
      hidden
      lg:flex
      flex-2
      mr-10
      justify-center
      max-w-xs
    '>
      <div className='
        sticky
        top-20
        rounded-2xl
        border-2
        bg-white
        border-gray-200
        w-full
      '>
        <WidgetsHeader />
      </div>
    </div>
  );
}
export default Widgets;