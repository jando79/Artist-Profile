import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import styled from 'styled-components'; 

const FormDiv = styled.div `
  margin: 20px;
`

function NewArtForm(props){

  function handleNewArtFormSubmission(event) {
    event.preventDefault();
    
    props.onNewArtCreation({
      imgUrl: event.target.imgUrl.value,
      title: event.target.title.value, 
      year: event.target.year.value, 
      medium: event.target.medium.value,
      about: event.target.about.value,
      price: event.target.price.value, 
    });
  }

  return (
    <React.Fragment>
      <FormDiv>
      <ReusableForm 
        formSubmissionHandler={handleNewArtFormSubmission}
        buttonText="Submit" />
      </FormDiv>
    </React.Fragment>
  );
}

NewArtForm.propTypes = {
  onNewArtCreation: PropTypes.func
};

export default NewArtForm;