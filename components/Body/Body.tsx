import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';

const Body: React.FC = () => {
  return (
    <div className='
      ml-10
      flex
      justify-between
    '>
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}
export default Body;