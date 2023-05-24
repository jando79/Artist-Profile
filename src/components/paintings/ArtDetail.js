import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { auth } from '../../firebase.js';

const DetailStyle = styled.div `
  float: right;
  paddingBottom: 20;
  
`

function ArtDetail(props){

  const { art, onClickingDelete, onClickingEdit } = props;
    return (
      <DetailStyle>
        <br></br>
        <img src={art.imgUrl} style={{ float: "left", height: "25%", width: "25%", paddingRight: 50 }} alt="painting" />
        <h2>{art.title}</h2>
        <p>{art.year}</p>
        <p>{art.medium}</p>
        <p>{art.about}</p>
        <p>$ {art.price}</p>
        {auth.currentUser && (
          <React.Fragment>
            <button onClick={() => onClickingEdit(art)}>Edit</button>
            <button onClick={() => onClickingDelete(art.id)}>Delete</button>
          </React.Fragment>
        )}
      </DetailStyle>
    );
  };
  

ArtDetail.propTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ArtDetail;