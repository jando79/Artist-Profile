import React from "react";
import {
  Border,
  Foot,
  FootLink,
  FootMenu,
} from './FooterStyles';
import { FaInstagram } from "react-icons/fa";
  
const Footer = () => {
  return (
    <>
      <Border>
        <Foot>
          <FootMenu>
            <FootLink to='/sign-in' activeStyle>
              Admin
            </FootLink>
            <FootLink mailto='djandronart@gmail.com' activeStyle>
              Contact
            </FootLink>
            <FootLink to='https://www.instagram.com/recogoods/' activeStyle>
              <FaInstagram />
              Instagram
            </FootLink>
          </FootMenu>
        </Foot>
      </Border>
    </>
  );
};
  
export default Footer;