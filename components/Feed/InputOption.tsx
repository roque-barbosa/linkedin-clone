import React from 'react';

interface InputOptionProps {
  Icon?: any
  text: string
  color?: string
}

const InputOption: React.FC<InputOptionProps> = ({Icon, text, color}) => {
  return (
    <div className='
    flex
    items-center
    mt-4
    cursor-pointer
    text-gray-500
    hover:bg-gray-100
    hover: rounded-2xl
    '>
      {Icon && (<Icon className={`w-6 h-6 ml-1 md:w-7 md:h-7 ` + color}/>)}
      <h4 className='
        hidden
        lg:flex
        justify-center
        ml-1
      '>
        {text}
      </h4>
    </div>
  );
}
export default InputOption;