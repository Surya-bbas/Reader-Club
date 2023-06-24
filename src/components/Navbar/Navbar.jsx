import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {useGlobalContext} from '../../context.'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebaseConfig'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const {currentUser} = useGlobalContext()

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
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            {currentUser ?
              <button>
                <li className='nav-item nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={()=>{
                  signOut(auth).then((response)=>console.log(response))
                }}>
                  LogOut
                </li>
              </button>
              
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