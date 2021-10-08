import React from 'react';
import {
  InformationCircleIcon
} from '@heroicons/react/solid';

const WidgetsHeader: React.FC = () => {
  return (
    <div className='
      flex
      items-center
      justify-between
      p-3
    '>
      <h2>Linkedin News</h2>
      <InformationCircleIcon />
    </div>
  );
}
export default WidgetsHeader;