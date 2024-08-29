import React from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const nevigate = useNavigate();
  const user = useSelector(store=>store.user);
  

  const handleSignOut = () =>{
signOut(auth).then(() => {
  nevigate("/");
}).catch((error) => {
  nevigate("/error");
});
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-44'
       src='https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' alt='logo' />
      {user && ( <div className='flex p-2'>
        <img className='w-12 h-12' alt='user-icon' src={user?.photoURL} />
        <button className='mb-10 font-bold text-white' onClick={handleSignOut}>Sign Out</button>
       </div>)}
    </div>
  )
}

export default Header