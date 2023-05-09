import React from "react";
import homeImage from "./../img/BlackAndWhite.jpg";

function Home() {
  return (
    <React.Fragment>
      {/* <h3>filler</h3>
      <p>Some stuff is going to go here</p> */}
      <img src={homeImage} style={{ margin: 0, padding: 0, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} alt="Black And White"/>
    </React.Fragment>
  );
}

export default Home;