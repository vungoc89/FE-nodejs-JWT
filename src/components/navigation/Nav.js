import React from "react";
import './Nav.scss';
import {NavLink} from 'react-router-dom'; //prevented reload page
//NavLink auto add active => delete class=active, replace "href" by "to"
// https://www.w3schools.com/howto/howto_js_topnav.asp
const Nav = (props) => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
