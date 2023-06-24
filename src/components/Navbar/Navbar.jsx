import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {useGlobalContext} from '../../context.'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebaseConfig'
import { Avatar } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const {currentUser} = useGlobalContext()
  const navigate = useNavigate()
  console.log('photo',currentUser?.photoURL);

  return (
    <nav className='navbar' id = "navbar">
      <div className=' navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex '>
            <img src = {logoImg} alt = "site logo" className='site-logo' />
            <span className='text-uppercase fw-7 fs-24 ls-1 logo-font'> reader's Club</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav ">
            {currentUser ?
              <>
                <li className='nav-item nav-link text-uppercase text-white fs-22 fw-6 ls-1 space-x-10 flex flex-row  hover:text-[#000!important]'>
                  <p><span className='text-purple-600 pr-3'> Welcome </span>  {currentUser?.email}</p>

                  <div className='nav-avatar hidden'>
                    { (currentUser?.photoURL)== null ? 

                        <Avatar alt={currentUser?.email} src />
                      :
                        <Avatar alt={currentUser?.email} src={currentUser?.photoURL} />

                    }
                  </div>
                </li>
                <button>
                  <li className='nav-item nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={()=>{
                    signOut(auth).then(()=>navigate('/'))
                  }}>
                    LogOut
                  </li>
                </button>
              </>
              
            :

              <li className='nav-item'>
                <Link to = "login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login</Link>
              </li>
            }
            
       
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar