import React from 'react';
import {
  Border,
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
import { BiSprayCan, BiCut, BiHomeHeart, BiUser } from "react-icons/bi";
  
const Navbar = () => {
  return (
    <>
      <Border>
        <Nav>
          {/* <Bars /> */}
    
          <NavMenu>
            <NavLink to='/' activeStyle>
              <BiHomeHeart />
              Home
            </NavLink>
            <NavLink to='/paintings' activeStyle>
              <BiSprayCan />
              Paintings
            </NavLink>
            <NavLink to='/collages' activeStyle>
              <BiCut />
              Collage
            </NavLink>
            <NavLink to='/about' activeStyle>
              <BiUser />
              About
            </NavLink>
          </NavMenu>
        </Nav>
      </Border>
    </>
  );
};
  
export default Navbar;