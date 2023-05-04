import React from "react";
import Art from "./Art";
import PropTypes from "prop-types";

function ArtList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.artList.map((art) =>
        <Art 
          whenArtClicked={props.onArtSelection}
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
