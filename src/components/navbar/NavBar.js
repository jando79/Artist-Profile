import React from 'react';
import {
  Border,
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Border>
        <Nav>
          {/* <Bars /> */}
    
          <NavMenu>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/paintings' activeStyle>
              Paintings
            </NavLink>
            <NavLink to='/collages' activeStyle>
              Collage
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
          </NavMenu>
        </Nav>
      </Border>
    </>
  );
};
  
export default Navbar;