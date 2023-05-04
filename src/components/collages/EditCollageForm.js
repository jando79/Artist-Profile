import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCollageForm (props) {
  const { collage } = props;

  function handleEditCollageFormSubmission(event) {
    event.preventDefault();
    props.onEditCollage({
      title: event.target.title.value, 
      year: event.target.year.value, 
      // medium: event.target.medium.value,
      about: event.target.about.value,
      price: event.target.price.value, 
      id: collage.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCollageFormSubmission} 
        buttonText="Update Listing" />
    </React.Fragment>
  );
}

EditCollageForm.propTypes = {
  onEditCollage: PropTypes.func,
  collage: PropTypes.object
};

export default EditCollageForm;