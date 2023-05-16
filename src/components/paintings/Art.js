import React from "react";
import PropTypes from "prop-types";

function Art(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        <center><img src={props.imgUrl} style={{ width: "auto", height: "auto" }} alt="painting" /></center>;
        <hr/>
      </div>
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
