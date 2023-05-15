import React from "react";
import homeImage1 from "./../img/BlackAndWhite.JPG";
// import homeImage2 from "./../img/paintingHome.jpg";
import homeImage3 from "./../img/collageHome.jpg";
import homeImage2 from "./../img/paintingLoud.jpg";

function Home() {
  return (
    <React.Fragment>
      {/* <h3>filler</h3>
      <p>Some stuff is going to go here</p> */}
      <img src={homeImage3} style={{ height: 350, width: 325, float: "left", paddingRight: 22 }} alt="Collage" />
      <img src={homeImage2} style={{ height: 350, width: 500, float: "right"}} alt="Bright Painting" />
      {/* <img src={homeImage2} style={{ height: 350, width: 275, float: "right", paddingLeft: 2 }} alt="Painting" /> */}
      <img src={homeImage1} style={{ height: 350, width: 500 }} alt="Black And White" />
      <br></br>
      <center><h2>An Outsider Artist, specializing in Mixed-Media Paintings and Collage</h2></center>
      
    </React.Fragment>
  );
}

export default Home;