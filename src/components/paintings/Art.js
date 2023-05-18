import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ArtDiv = styled.div `
  padding: 8px;
`

const IDive = styled.div `
  &:hover {
    transform: scale(1.07); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */;
    cursor: pointer;
  `

function Art(props){

  return (
    <React.Fragment>
      <ArtDiv>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        <IDive>
          <center><img src={props.imgUrl} style={{ width: "35%", height: "35%" }} alt="painting" /></center>;
        </IDive>
      </div>
      <hr/>
      </ArtDiv>
    </React.Fragment>
  );
}

Art.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  medium: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Art;
