import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditArtForm (props) {
  const { art } = props;

  function handleEditArtFormSubmission(event) {
    event.preventDefault();
    props.onEditArt({
      title: event.target.title.value, 
      year: event.target.year.value, 
      medium: event.target.medium.value,
      about: event.target.about.value,
      price: event.target.price.value, 
      id: art.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditArtFormSubmission} 
        buttonText="Update Listing" />
    </React.Fragment>
  );
}

EditArtForm.propTypes = {
  onEditArt: PropTypes.func,
  art: PropTypes.object
};

export default EditArtForm;