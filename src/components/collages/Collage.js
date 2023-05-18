import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CollageDiv = styled.div `
  padding: 8px;
`

const IDive = styled.div `
  &:hover {
    transform: scale(1.07); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */;
    cursor: pointer;
  `

function Collage(props){

  return (
    <React.Fragment>
      <CollageDiv>
        <div onClick = {() => props.whenCollageClicked(props.id)}>
          <IDive>
            <center><img src={props.imgUrl} style={{ width: "35%", height: "35%" }} alt="collage" /></center>
          </IDive>
          <hr/>
        </div>
      </CollageDiv>
    </React.Fragment>
  );
}

Collage.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Collage;