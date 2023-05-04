import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewCollageForm(props){

  function handleNewCollageFormSubmission(event) {
    event.preventDefault();
    props.onNewCollageCreation({
      title: event.target.title.value, 
      year: event.target.year.value, 
      // medium: event.target.medium.value,
      about: event.target.about.value,
      price: event.target.price.value, 
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewCollageFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewCollageForm.propTypes = {
  onNewCollageCreation: PropTypes.func
};

export default NewCollageForm;