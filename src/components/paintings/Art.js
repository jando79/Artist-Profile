import React from "react";
import PropTypes from "prop-types";

function Art(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        {/* <img src={props.image} alt="painting" /> */}
        <img src={props.imgUrl} style={{ width: 100, height: 100 }} alt="painting" />
        <h3>{props.title}</h3>
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
  price: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Art;
