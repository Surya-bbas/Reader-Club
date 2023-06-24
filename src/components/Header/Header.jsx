import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
   return (
      <div className="holder">
         <header className="header">
            <Navbar />
            <div className="flex">

               <div className="header-content flex flex-c text-center text-white flex-1">

                  <br />
                  <p className="header-text fs-18 fw-3 text-neutral-200">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero voluptate magnam quos, excepturi eum autem. Doloribus unde nostrum quos.
                     
                  </p>
               </div>
               <div className="flex-1 flex flex-col text-center home-page-right">
                  <h2 className="header-title text-capitalize text-purple-600 mb-10 p-5">
                     Search For the Book You Are Looking For
                  </h2>
                  <SearchForm />
               </div>
            </div>
         </header>
      </div>
   );
};

export default Header;
