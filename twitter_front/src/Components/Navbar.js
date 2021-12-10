import React from 'react';
import { NavLink } from 'react-router-dom';
import appLogo from "../images/appLogo.png"


function Navbar() {
  return (
    <div className="navbar">
        <div className="appLogo">
            <img src={appLogo} alt = "app-logo"/>
            <h4>Twitter Sentiments</h4>
        </div>
        <div className= "navItems">
            <NavLink className= "navItem" end to="/" 
                style={({ isActive }) => ({ backgroundColor: isActive ?  "#339AF0" : ""})} >
                <p>Home</p>
            </NavLink>
        </div>
    </div>
    );}

export default Navbar;