import React from "react";
import PropTypes from "prop-types";

function Collage(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCollageClicked(props.id)}>
        <center><img src={props.imgUrl} style={{ width: "30%", height: "30%" }} alt="collage" /></center>;
        <hr/>
      </div>
    </React.Fragment>
  );
}

Collage.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Collage;