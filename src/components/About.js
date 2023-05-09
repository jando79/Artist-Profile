import React from "react";
//import { Link } from "react-router-dom";
//import styled from 'styled-components';
import artistImage from "./../img/art-profile-pic.jpg";

function About () {
  return (
    <React.Fragment>
      <h3>About: </h3>
      <img src={artistImage} style={{ width: 300, height: 250 }} alt="David Jadron, Artist" />
      <p>Hi hi hi hi hi hi</p>
    </React.Fragment>
  );
}

export default About;