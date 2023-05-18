import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import styled from 'styled-components'; 

const FormDiv = styled.div `
  margin: 20px;
`

function NewCollageForm(props){

  function handleNewCollageFormSubmission(event) {
    event.preventDefault();
    props.onNewCollageCreation({
      imgUrl: event.target.imgUrl.value,
      title: event.target.title.value, 
      year: event.target.year.value, 
      about: event.target.about.value,
      price: event.target.price.value,
    });
  }

  return (
    <React.Fragment>
      <FormDiv>
        <ReusableForm 
          formSubmissionHandler={handleNewCollageFormSubmission}
          buttonText="Submit" />
      </FormDiv>
    </React.Fragment>
  );
}

NewCollageForm.propTypes = {
  onNewCollageCreation: PropTypes.func
};

export default NewCollageForm;