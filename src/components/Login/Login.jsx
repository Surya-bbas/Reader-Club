import React, { useState } from 'react'
import './Login.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import googleIcon from '../../images/google.png'
import {  Link, useNavigate } from 'react-router-dom'
import {useGlobalContext} from '../../context.'

import { db , auth } from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  onAuthStateChanged,
  getAdditionalUserInfo
} from 'firebase/auth'
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion
} from 'firebase/firestore'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {currentUser} = useGlobalContext()
  console.log(currentUser?.email);

  async function handleGoogleAuth(){
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth,provider)        
    const newUser = await getAdditionalUserInfo(user).isNewUser
    if(newUser===true){
        await setDoc(doc(db,'user',user.user.uid) ,{
            email:user.user.email,
            cart:[]
        })
    }
    navigate('/')
  }

  async function handleLogin(){
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    navigate('/')
  }



  return (
    <>
      <p>{currentUser && currentUser?.email}</p>
      <main className="flex  justify-center items-center h-[100vh]">
          <div className="w-[500px] h-[500px] rounded-lg  login-container ">
            <div className='login-container-img'></div>
            <div className='login-container-content'>
              <div className='filter-none '>
                
                <p className='text-neutral-300 text-center text-4xl font-bold'>Login Now !</p>
                <div className='search-form-elemL flex flex-sb bg-white my-24 '>
                  <input type = "text" className='form-controlL text-black' placeholder='Enter Mail Id' value={email} onChange={(e)=>setEmail(e.target.value)}/>                            
                </div>
                <div className='search-form-elemL flex flex-sb bg-white my-24 '>
                  <input type = "text" className='form-controlL text-black' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>                          
                </div>
                <div className='flex justify-between '>
                  <button className='bg-white rounded-full p-4 ml-5' onClick={(e)=>handleGoogleAuth(e)}>
                    <img src={googleIcon} alt="" className='w-10'/>
                  </button>
                  <button className='bg-[#0B6EFE] rounded-[22px] p-5 mr-5 text-white' onClick={(e)=>handleLogin(e)} >Login</button>
                </div>
                <p className='text-center mt-10 text-neutral-400 mr-5'>Don't have an account <Link to="/signup" className='text-blue-600'> Sign Up</Link> now!</p>

              </div>
            </div>
              
          </div>
      </main>

    </>
  )
}

export default Login