import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useGlobalContext } from '../../context..js'





const Home = () => {

  const {currentUser} = useGlobalContext()
  console.log(currentUser);

  return (
    <main>        
        
        <Header />
        <Outlet />
    </main>
  )
}

export default Home
