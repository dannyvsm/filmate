import React from "react";
import './navbar.scss'
import { useState } from "react";
// import {ReactComponent as Logo} from ''
import Search from "@mui/icons-material/Search";
import Notifs from "@mui/icons-material/Notifications";
import ArrowDrop from '@mui/icons-material/ArrowDropDown';
import Profile from '@mui/icons-material/Face';
import Film from '@mui/icons-material/CameraRoll';
// import Logo from '../../imgs/svg/oldstyletubeTV.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <Film classname="logo"/>
            <span></span>
            <span>Home</span>
            <div className="menu">
                <span>Films</span>
                <ArrowDrop className="icon" />
                <div class="films">     
                    <span>By Decade</span>
                    <span>By Genre</span>
                    <span>By Director</span>
                    <span>By Country</span>
                    <span>Hidden Gems</span>
                    <span>Show me something!</span>
                </div>   
            </div>
            <span>Lists</span>
            <span>Reviews</span>
        </div>
        <div className="right">
            <Search  className="icon"/>
            <Notifs className="icon"/>
            <Profile className="icon" />
            <div className="settings">
                <ArrowDrop className="icon" />
                <div className="options">
                    <span>Profile</span>
                    <span>Settings</span>
                    <span>Accessibility</span>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
