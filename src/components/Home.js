import React from "react";
import homeImage1 from "./../img/BlackAndWhite.JPG";
import homeImage2 from "./../img/paintingLoud.jpg";
import homeImage3 from "./../img/collageHome.jpg";

function Home() {
  return (
    <React.Fragment>
      <img src={homeImage3} style={{ height: 350, width: 325, float: "left", paddingRight: 22 }} alt="Collage" />
      <img src={homeImage2} style={{ height: 350, width: 500, float: "right"}} alt="Bright Painting" />
      <img src={homeImage1} style={{ height: 350, width: 500 }} alt="Black And White" />
      <br></br>
      <center><h2>News and Appearances:</h2></center>
      
    </React.Fragment>
  );
}

export default Home;