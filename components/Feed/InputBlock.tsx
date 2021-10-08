import React, {useRef} from 'react';
import {
  PencilIcon,
  CameraIcon,
  PhotographIcon,
  CalendarIcon,
  AnnotationIcon
} from '@heroicons/react/solid';
import InputOption from './InputOption';
import {
  useSelector
} from "react-redux";
import {
  collection,
  addDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../../FirebaseConfig';

const InputBlock: React.FC = () => {

  const user = useSelector((state: any) => state.user)

  const inputRef = useRef<HTMLInputElement>(null);

  const sendPost = (event: any) => {
    event.preventDefault();

    if (!inputRef.current?.value) return;

    addDoc(collection(db, 'posts'), {
      name: user.displayName,
      description: 'This is a test',
      message: inputRef.current.value,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
    });

    inputRef.current.value = "";
  };

  return (
    <div className='
      border-2
      bg-white
      border-gray-200
      p-3
      pb-4
      pl-4
      mb-5
      rounded-xl
    '>
      <div className='
        flex
        border-2
        border-gray-200
        rounded-full
        p-3
        text-gray-400
      '>
        <PencilIcon className='w-8 h-8'/>
        <form className='
          flex
          w-full
        '>
          <input ref={inputRef} type="text" className='
            border-none
            flex-1
            ml-3
            outline-none
            font-semibold
          '/>
          <button hidden onClick={sendPost} type='submit'>Send</button>
        </form>
      </div>

      <div className='
        flex
        justify-evenly
      '>
        <InputOption Icon={PhotographIcon} text='Photo' color='text-blue-500'/>
        <InputOption Icon={CameraIcon} text='Video' color='text-yellow-500'/>
        <InputOption Icon={CalendarIcon} text='Event' color='text-gray-400'/>
        <InputOption Icon={AnnotationIcon} text='Write article' color='text-green-300'/>
      </div>
    </div>
  );
}
export default InputBlock;