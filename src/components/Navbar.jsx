import "../styles/Navbar.css";
import FillButton from "./FillButton";
import React, { useState } from 'react';

const NavBar = ({handleAccountClick, handleMainPageClick,handleSignOutClick}) => {

  return (
    <div className="navbar">
        
      <div className="logo" onClick={handleMainPageClick}>
        {"VibeTune."}
        
      </div>
      <div className="buton">
      <FillButton text="My Account" onClick={handleAccountClick}/>
      </div>
      <div className="buton1">
      <FillButton text="Sign Out" onClick={handleSignOutClick}/>
      </div>
      
    </div>
  );
};

export default NavBar;
