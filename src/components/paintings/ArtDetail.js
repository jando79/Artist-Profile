import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const DetailStyle = styled.div `
  float: right;
  paddingBottom: 20;
  
`

function ArtDetail(props){
  const { art, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <DetailStyle>
        <br></br>
        <img src={art.imgUrl} style={{ float: "left", height: "25%", width: "25%", paddingRight: 50 }} alt="painting" />
        <h2>{art.title}</h2>
        <h3>{art.year}</h3>
        <p><em>{art.medium}</em></p>
        <p><em>{art.about}</em></p>
        <p><em>$ {art.price}</em></p>
        <br></br>
        <button onClick={onClickingEdit}>Update Listing</button>
        <button onClick={()=> onClickingDelete(art.id)}>Delete Listing</button>
        <hr />
      </DetailStyle>
    </React.Fragment>
  );
}

ArtDetail.propTypes = {
  art: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default ArtDetail;