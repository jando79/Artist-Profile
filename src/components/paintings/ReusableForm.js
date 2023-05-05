import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {/* <input
          type='file'
          name='image'
          placeholder='Upload Image' /> */}
        <input
          type='text'
          name='title'
          placeholder='Title' />
        <input
          type='text'
          name='year'
          placeholder='Year' />
        <textarea
          name='medium'
          placeholder='Medium' />
        <textarea
          name='about'
          placeholder='About' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;