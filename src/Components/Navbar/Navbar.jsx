import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import * as assets from "../../assets/assets.jsx";

export const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="flex-div nav-left">
        <img
          className="menu-icon"
          src={assets.menu}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          alt=""
        />
        <Link to="/"><img className="logo" src={assets.logo} alt="UTube logo" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={assets.search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.userProfile} className="user-icon" alt="" />
      </div>
    </nav>
  );
};
