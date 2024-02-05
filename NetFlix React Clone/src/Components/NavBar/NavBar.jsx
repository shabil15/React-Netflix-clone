import React from "react";
import "./NavBar.css";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

function NavBar({scrolled}) {
  return (
    <div className="navBar"  id={scrolled ? "nonetransp" : "transp"}>
      <div className="navigation">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix-logo"
        ></img>

        
          <ul className="primary-navigation">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
      </div>

      <div className="secondary-navigation">
      <IoSearch className='nav-search cursor-pointer'/>
      <FaRegBell className='nav-bell cursor-pointer'/>
      <img className='avatar cursor-pointer secondary-nav-item' src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png" alt=''/>
      </div>
    </div>
  );
}

export default NavBar;
