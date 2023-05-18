import React from "react";
import homeImage1 from "./../img/BlackAndWhite.JPG";
import homeImage2 from "./../img/paintingLoud.jpg";
import homeImage3 from "./../img/collageHome.jpg";
import UltraLocal from "./../img/UltraLocal.JPG";
import MADS2 from "./../img/MADS2.jpeg";
import SalonPoster from "./../img/SalonPoster.JPG"

function Home() {
  return (
    <React.Fragment>
      <br></br>
      <img src={homeImage3} style={{ height: 350, width: 325, float: "left", paddingRight: 12 }} alt="Collage" />
      <img src={homeImage2} style={{ height: 350, width: 500, float: "right", paddingLeft: 2 }} alt="Bright Painting" />
      <img src={homeImage1} style={{ height: 350, width: 500 }} alt="Black And White" />
      <br></br>
      <center><h2>Featured Appearances:</h2></center>
      <img src={UltraLocal} style={{ height: 500, width: 400, float: "left", paddingRight: 25 }} alt="poster1" />
      <img src={SalonPoster} style={{ height: 500, width: 400, float: "right", paddingLeft: 0 }} alt="poster2"/>
      <img src={MADS2} style={{ height: 500, width: 500, paddingRight: 0 }} alt="poster3" />
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

export default Home;