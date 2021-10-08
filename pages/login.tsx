import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { auth } from '../FirebaseConfig'
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { userLogin } from '../store/actions/user';
import Router from 'next/router';


const Login: NextPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');

  const loggedUser = useSelector((state: any)=> state.user);
  const dispatch = useDispatch();

  const register = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!name) {
      alert('Please insert a full name!');
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(userAuth => {
      updateProfile(userAuth.user, {
        displayName: name,
        photoURL: profilePicUrl
      })
      .then(() => {
        dispatch(userLogin({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePicUrl
        }));
      });
    })
    .catch(err => alert(err.message));
  };
  
  const login = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('Hi')
  };

  useEffect(() => {
    if (loggedUser) {
      Router.push('/')
    }
  });

  return (
    <div className='
      flex
      justify-center
    '>
      <div>
        <Image
          className='
            object-contain
          '
          src='https://marcas-logos.net/wp-content/uploads/2020/01/LinkedIn-Logo-1-600x375.png'
          height={150}
          width={300}
          layout='fixed'
        />
        <form className='
          flex
          flex-col
          '>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            placeholder='Full Name'
            className='loginInput'
          />
          <input
            value={profilePicUrl}
            onChange={e => setProfilePicUrl(e.target.value)}
            type='text'
            placeholder='Profile pic URL (Optional)'
            className='loginInput'
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            className='loginInput'
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='loginInput'
          />
          <button
          type='submit'
          onClick={login}
          className='
            bg-blue-500
            text-white
            text-lg
            rounded-b-md
          '
          >
            Sign In
          </button>
        </form>

        <p className='
          flex
          justify-center
          mt-5
          text-sm
          text-gray-400
        '>
          Not a member?
          <span onClick={register} className='
            cursor-pointer
            font-bold
            text-black
            pl-2
            hover:text-blue-500
          '>
            Register Now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
