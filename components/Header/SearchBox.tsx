import React from 'react';
import {
  Search
} from '@material-ui/icons'

const SearchBox: React.FC = () => {
  return (
    <div className='
      flex
      ml-2
      items-center
      p-2
      h-6
      bg-gray-100
    '>
      <Search />
      <input type="text" placeholder='Search' className='
        hidden
        md:flex
        ml-1
        bg-transparent
        rounded-full
        outline-none
        placeholder-gray-500
        h-22

      '/>
    </div>
  );
}
export default SearchBox;