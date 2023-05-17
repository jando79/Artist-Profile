import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/paintings' activeStyle>
            Paintings
          </NavLink>
          <NavLink to='/collage' activeStyle>
            Collage
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          {/* <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink> */} 
        {/* </NavBtn>  */}
      </Nav>
    </>
  );
};
  
export default Navbar;