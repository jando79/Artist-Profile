import React from "react";
import homeImage from "./../img/BlackAndWhite.JPG";

function Home() {
  return (
    <React.Fragment>
      {/* <h3>filler</h3>
      <p>Some stuff is going to go here</p> */}
      <img src={homeImage} className= "center" style={{ height: 350, width: 500, float: "left" }} alt="Black And White" />
      <h3>Outsider Artist</h3>
    </React.Fragment>
  );
}

export default Home;