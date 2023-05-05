import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { serverTimestamp} from "firebase/firestore";

function NewArtForm(props){

  function handleNewArtFormSubmission(event) {
    event.preventDefault();
    props.onNewArtCreation({
      title: event.target.title.value, 
      year: event.target.year.value, 
      medium: event.target.medium.value,
      about: event.target.about.value,
      price: event.target.price.value, 
      timeOpen: serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewArtFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewArtForm.propTypes = {
  onNewArtCreation: PropTypes.func
};

export default NewArtForm;