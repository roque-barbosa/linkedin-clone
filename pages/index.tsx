import React, { useEffect, useState } from "react";
import type { NextPage } from 'next'
import Router from 'next/router';
import { useSelector } from 'react-redux'
import Body from '../components/Body/Body'
import Header from '../components/Header/Header'

const Home: NextPage = () => {

  const [loaded, setLoaded] = useState(false);

  const user = useSelector((state: any)=> state.user);
  console.log(user)

  useEffect(() => {
    if (!user) {
      Router.push('/login')
    } else {
      setLoaded(true);
    }
  });

  if (!loaded) {
    return(
      <div></div>
    );
  }

  return (
    <div className='
      bg-gray-100
    '>
      {/* Header */}
      <Header />

      {/* App Body */}
      <Body />
    </div>
  )
}

export default Home
