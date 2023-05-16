import React from "react";
import PropTypes from "prop-types";

function CollageDetail(props){
  const { collage, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <img src={collage.imgUrl} style={{ float: "left", height: "35%", width: "35%", paddingRight: 50 }} alt="collage" />
      <h2>{collage.title}</h2> 
      <h3>{collage.year}</h3>
      <p><em>{collage.about}</em></p>
      <p><em>$ {collage.price}</em></p>
      <button onClick={onClickingEdit}>Update Listing</button>
      <button onClick={()=> onClickingDelete(collage.id)}>Delete Listing</button>
      <hr/>
    </React.Fragment>
  );
}

CollageDetail.propTypes = {
  collage: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default CollageDetail;

