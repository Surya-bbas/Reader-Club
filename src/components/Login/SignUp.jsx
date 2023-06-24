import React , {useState}from 'react'
import './Login.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import googleIcon from '../../images/google.png'
import {  Link , useNavigate  } from 'react-router-dom'

import { db , auth } from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signOut,
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

const Signup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignUP(e) {
        
        const user = await createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'user',user.user.uid),{
            email:email,
            cart:[]
        })
        console.log(user)
        navigate('/')
    }

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

  return (

    <main className="flex  justify-center items-center h-[100vh]">
        <div className="w-[500px] h-[500px] rounded-lg  login-container ">
          <div className='login-container-img'></div>
          <div className='login-container-content'>
            

                <div className='filter-none '>
                    
                    <p className='text-neutral-300 text-center text-4xl font-bold'>Sign Up Now !</p>
                    <div className='search-form-elemL flex flex-sb bg-white my-24 '>
                        <input type = "text" className='form-controlL text-black ' placeholder='Enter Mail ID' value={email} onChange={(e)=>setEmail(e.target.value)} />                            
                    </div>
                    <div className='search-form-elemL flex flex-sb bg-white my-24 '>
                        <input type = "password" className='form-controlL text-black' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />                          
                    </div>
                    <div className='flex justify-between '>
                        <button className='bg-white rounded-full p-4 ml-5' type='button' onClick={(e)=>handleGoogleAuth(e)}>
                        <img src={googleIcon} alt="" className='w-10'/>
                        </button>                        
                        <button className='bg-[#0B6EFE] rounded-[22px] p-5 mr-5 text-white' type='button' onClick={(e)=> handleSignUP(e)} >Sign Up</button>
                        
                    </div>
                

                </div>
            
          </div>
            
        </div>
    </main>

  )
}

export default Signup