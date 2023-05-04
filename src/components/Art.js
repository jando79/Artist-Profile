import React from "react";
import PropTypes from "prop-types";

function Art(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenArtClicked(props.id)}>
        {/* This is where the image to click on go */}
        <p><em>{props.title}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  // image
  title: PropTypes.string,
  year: PropTypes.string,
  medium: PropTypes.string,
  about: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenArtClicked: PropTypes.func
}

export default Art;
