import React from "react";
import {
  Border,
  Foot,
  FootLink,
  FootMenu,
} from './FooterStyles';
import { FaInstagram, FaAdn, FaTelegramPlane, FaEtsy } from "react-icons/fa";
  
const Footer = () => {
  return (
    <>
      <Border>
        <Foot>
          <FootMenu>
            <FootLink to='/sign-in' activeStyle>
              <FaAdn />
              Admin
            </FootLink>
            <FootLink mailto='djandronart@gmail.com' activeStyle>
              <FaTelegramPlane />
              Contact
            </FootLink>
            <FootLink to='https://www.instagram.com/recogoods/' activeStyle>
              <FaInstagram />
              Instagram
            </FootLink>
            <FootLink to='https://www.etsy.com/shop/RECOGoods' activeStyle>
              <FaEtsy />
              Etsy Shop
            </FootLink>
          </FootMenu>
        </Foot>
      </Border>
    </>
  );
};
  
export default Footer;