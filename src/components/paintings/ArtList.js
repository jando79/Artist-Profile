import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";

function ArtList(props){

  return (
    <React.Fragment>
      <br></br>
      {props.artList.map((art) =>
        <Art 
          whenArtClicked={props.onArtSelection}
          imgUrl={art.imgUrl}
          title={art.title}
          year={art.year}
          medium={art.medium}
          about={art.about}
          price={art.price}
          id={art.id}
          key={art.id}/>
      )}
    </React.Fragment>
  );
}

ArtList.propTypes = {
  artList: PropTypes.array,
  onArtSelection: PropTypes.func
};

export default ArtList;
