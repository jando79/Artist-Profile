import React from "react";
import Collage from "./Collage";
import PropTypes from "prop-types";

function CollageList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.collageList.map((collage) =>
        <Collage 
          whenCollageClicked={props.onCollageSelection}
          title={collage.title}
          year={collage.year}
          // medium={art.medium}
          about={collage.about}
          price={collage.price}
          id={collage.id}
          key={collage.id}/>
      )}
    </React.Fragment>
  );
}

CollageList.propTypes = {
  collageList: PropTypes.array,
  onCollageSelection: PropTypes.func
};

export default CollageList;