import React from "react";
import './navbar.scss'
// import {ReactComponent as Logo} from ''
import Search from "@mui/icons-material/Search";
import Notifs from "@mui/icons-material/Notifications";
import ArrowDrop from '@mui/icons-material/ArrowDropDown';
import Profile from '@mui/icons-material/Face';
import Film from '@mui/icons-material/CameraRoll';
// import Logo from '../../imgs/svg/oldstyletubeTV.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
            <Film />
            <span></span>
            <span>Home</span>
            <span>Films</span>
            <span>Lists</span>
            <span>Reviews</span>
        </div>
        <div className="right">
            <Search />
            <span></span>
            <Notifs />
            <span></span>
            <Profile />
            <span></span>
            <ArrowDrop />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
