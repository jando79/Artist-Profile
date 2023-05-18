import React from "react";
import {
  Border,
  Foot,
  FootLink,
  FootMenu,
} from './FooterStyles';
  
const Footer = () => {
  return (
    <>
      <Border>
        <Foot>
          <FootMenu>
            <FootLink to='/sign-in' activeStyle>
              Admin
            </FootLink>
            {/* <FootLink to='/paintings' activeStyle>
              Paintings
            </FootLink>
            <FootLink activeStyle>
              Collage
            </FootLink> */}
            <FootLink to='https://www.instagram.com/recogoods/' activeStyle>
              Instagram
            </FootLink>
          </FootMenu>
        </Foot>
      </Border>
    </>
  );
};
  
export default Footer;