import React, {useEffect, useState} from "react";
import './Nav.scss';
import {NavLink, useLocation} from 'react-router-dom'; //prevented reload page
//NavLink auto add active => delete class=active, replace "href" by "to"
// https://www.w3schools.com/howto/howto_js_topnav.asp
const Nav = (props) => {
  const [isShow, setIsShow] = useState(false);

  let location = useLocation();

  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if(location.pathname === '/login'){
      setIsShow(false);
    }
  }, []);
  return (
    <>
    {isShow === true && 
      <div className="topnav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/users">users</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    }
    </>
  );
};

export default Nav;
