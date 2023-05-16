import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";
import styled from 'styled-components';

const AboutPaintingText = styled.p `
  font-size: 15px;
`
function ArtList(props){

  return (
    <React.Fragment>
      <AboutPaintingText>
        <p>All work posted has been completed since March 2021, when David went through a stylistic evolution. The paintings speak to the internal battle between the voices of the flesh and the spirit.</p>
      </AboutPaintingText>
      <hr/>
      {props.artList.map((art) =>
        <Art 
          whenArtClicked={props.onArtSelection}
          imgUrl={art.imgUrl}
          title={art.title}
          year={art.year}
          medium={art.medium}
          about={art.about}
          price={art.price}
          id={art.id}
          key={art.id}/>
      )}
    </React.Fragment>
  );
}

ArtList.propTypes = {
  artList: PropTypes.array,
  onArtSelection: PropTypes.func
};

export default ArtList;
