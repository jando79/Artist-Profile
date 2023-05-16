import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <React.Fragment>      
      <br></br>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='imgUrl'
          placeholder='Painting Url' />
          <br></br>
          <br></br>
        <input
          type='text'
          name='title'
          placeholder='Title' />
          <br></br>
          <br></br>
        <input
          type='text'
          name='year'
          placeholder='Year' />
          <br></br>
          <br></br> 
        <textarea
          name='medium'
          placeholder='Medium'
          style={{ width: 300, height: 20 }} />
          <br></br>
          <br></br>
        <textarea
          name='about'
          placeholder='About' 
          style={{ width: 600, height: 300 }} />
          <br></br>
          <br></br>
        <input
          type='text'
          name='price'
          placeholder='$ price' />
          <br></br>
          <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br></br>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;