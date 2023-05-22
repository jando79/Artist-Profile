import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { auth } from '../../firebase.js';

const DetailStyle = styled.div `
  float: right;
  paddingBottom: 20;
  
`

function CollageDetail(props){
  const { collage, onClickingDelete, onClickingEdit } = props; 

  return (
    <DetailStyle>
        <br></br>
        <img src={collage.imgUrl} style={{ float: "left", height: "25%", width: "25%", paddingRight: 50 }} alt="collage" />
        <h2>{collage.title}</h2>
        <p>{collage.year}</p>
        <p>{collage.about}</p>
        <p>{collage.price}</p>
        {auth.currentUser && (
          <React.Fragment>
            <button onClick={() => onClickingEdit(collage)}>Edit</button>
            <button onClick={() => onClickingDelete(collage.id)}>Delete</button>
          </React.Fragment>
        )}
    </DetailStyle>
  );
}

CollageDetail.propTypes = {
  collage: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default CollageDetail;

