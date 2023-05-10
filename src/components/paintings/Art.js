import React from "react";
import PropTypes from "prop-types";

function Art(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        {props.img}
        <p><em>{props.title}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Art.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  year: PropTypes.string,
  medium: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Art;
