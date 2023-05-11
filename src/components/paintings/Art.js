import React from "react";
import PropTypes from "prop-types";

function Art(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        <img src={props.img} />
        <h3><em>{props.title}</em></h3>
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
