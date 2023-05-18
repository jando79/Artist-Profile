import React from "react";
import styled from 'styled-components';

const ArtistProfileHeader = styled.h1`
  font-family: 'blowbrush';
  font-size: 30px;
  text-align: center;
  color: black;
  background-color: black;
  -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: yellow;
  padding: 0px;
  
  &:hover {
    color: rgb(42,244,152,255);
    transition: 200ms ease-in;
}
`;
const StyledWrapper = styled.section`
  background-image: linear-gradient(260deg, rgb(42,244,152,255) 0%, #3498db 100%); 
  border: 1px solid rgba(0,0,0,0.2);
`;

function Header(){
  return (
    <StyledWrapper>
      <React.Fragment>
        <ArtistProfileHeader>
          <h1>the david jandron gallery</h1>
        </ArtistProfileHeader>
      </React.Fragment>
    </StyledWrapper>
  );
}

export default Header;