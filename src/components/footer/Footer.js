import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  Link,
  // Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1> */}
      <Container>
        <Row>
          <Column>
            {/* <Heading>About Us</Heading> */}
            <Link to="/sign-in">Admin Login</Link>
          </Column>
          {/* <Column>
            {/* <Heading>Services</Heading> */}
            {/* <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column> */}
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            <Link href="djandronart@gmail.com">Email the Artist</Link>
            {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            {/* <Heading>Social Media</Heading> */}
            {/* <Link href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </Link> */}
            <Link href="https://www.instagram.com/recogoods/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </Link>
            {/* <Link href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </Link>
            <Link href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Link> */}
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;