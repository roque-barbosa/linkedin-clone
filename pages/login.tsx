import type { NextPage } from 'next';
import Image from 'next/image';
import {} from 'firebase/auth';


const Login: NextPage = () => {

  const register = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('Hi')
  };
  
  const login = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('Hi')
  };

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
            type='text'
            placeholder='Full Name'
            className='loginInput'
          />
          <input
            type='text'
            placeholder='Profile pic URL (Optional)'
            className='loginInput'
          />
          <input
            type='email'
            placeholder='Email'
            className='loginInput'
          />
          <input
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
