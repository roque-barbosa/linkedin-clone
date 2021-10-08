import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { storeWrapper } from '../store/store';
import { useEffect } from 'react';
import { auth } from '../FirebaseConfig';
import {onAuthStateChanged} from 'firebase/auth'
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { userLogin, userLogout } from '../store/actions/user';

function MyApp({ Component, pageProps }: AppProps) {

  const user = useSelector((state: any) => state.user)
  const dispath = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user logged in
        dispath(userLogin({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        // user logged out
        dispath(userLogout());
      }
    })
  }, []);

  return <Component {...pageProps} />
}
export default storeWrapper.withRedux(MyApp)
