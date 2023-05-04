import React from "react";
import PropTypes from "prop-types";

function CollageDetail(props){
  const { collage, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Collage Detail</h1>
      <h3>{collage.title} - {collage.year}</h3>
      {/* <p><em>{art.mudium}</em></p> */}
      <p><em>{collage.about}</em></p>
      <p><em>{collage.price}</em></p>
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

