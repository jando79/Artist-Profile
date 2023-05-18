import React from "react";
import Collage from "./Collage";
import PropTypes from "prop-types";

function CollageList(props){

  return (
    <React.Fragment>
      <br></br>
      {props.collageList.map((collage) =>
        <Collage 
          whenCollageClicked={props.onCollageSelection}
          imgUrl={collage.imgUrl}
          title={collage.title}
          year={collage.year}
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