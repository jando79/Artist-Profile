import React from "react";
import PropTypes from "prop-types";

function ArtDetail(props){
  const { art, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Art Detail</h1>
      {art.img}
      <h3>{art.title} - {art.year}</h3>
      <p><em>{art.mudium}</em></p>
      <p><em>{art.about}</em></p>
      <p><em>{art.price}</em></p>
      <button onClick={onClickingEdit}>Update Listing</button>
      <button onClick={()=> onClickingDelete(art.id)}>Delete Listing</button>
      <hr/>
    </React.Fragment>
  );
}

ArtDetail.propTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ArtDetail;