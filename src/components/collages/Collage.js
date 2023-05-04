import React from "react";
import PropTypes from "prop-types";

function Collage(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCollageClicked(props.id)}>
        {/* This is where the image to click on go */}
        <p><em>{props.title}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Collage.propTypes = {
  // image
  title: PropTypes.string,
  year: PropTypes.string,
  // medium: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Collage;