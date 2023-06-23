import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
   return (
      <div className="holder">
         <header className="header">
            <Navbar />
            <div className="header-content flex flex-c text-center text-white">
               <h2 className="header-title text-capitalize text-purple-600 ">
                  find your book of choice.
               </h2>
               <br />
               <p className="header-text fs-18 fw-3 text-neutral-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero voluptate magnam quos, excepturi eum autem. Doloribus unde nostrum quos.
                  
               </p>
               <SearchForm />
            </div>
         </header>
      </div>
   );
};

export default Header;
