import React from "react";
import artistImage from "./../img/art-profile-pic.jpg";
import styled from 'styled-components';

const AboutText = styled.p `
  font-size: 20px;
  float: "right";
`

function About () {
  return (
    <React.Fragment>
      <h3>About: </h3>
      <img src={artistImage} style={{ width: 400, height: 525, float: "left", padding: 15 }} alt="David Jadron, Artist" />
      <AboutText>
        <br></br>
        <br></br>
        <br></br>
        <p>David Jandron resides  in Portland, OR. He is a self-trained artist, recovering drug addict/alcoholic, and a full time single parent. These pieces provide a lens into the struggles he has experienced.  These experiences include battles with mental illness, surviving domestic violence, divorce, over-coming alcohol /drug addiction,  the loss of loved ones, the loss of employment, the loss of a co-parent to drugs, and now having full custody of 2 tiny humans.</p>
      </AboutText>      
    </React.Fragment>
  );
}

export default About;