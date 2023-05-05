import React from "react";
import { Link } from "react-router-dom";
//import artistImage from "./../img/artist.jpg";
import styled from 'styled-components';

const ArtistProfileHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  color: black;
  background-color: yellow;
  -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
`;
const StyledWrapper = styled.section`
  background-color: yellow;
`;

function Header(){
  return (
    <StyledWrapper>
      <React.Fragment>
        <ArtistProfileHeader>
          <h1>the DAVID JANDRON gallery</h1>
        </ArtistProfileHeader>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/paintings">Paintings</Link>
          </li>
          <li>
            <Link to="/collages">Collage</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
      </ul> */}
      </React.Fragment>
    </StyledWrapper>
  );
}

export default Header;