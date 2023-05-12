import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const imgInput = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(imgInput)

  console.log(imageAsFile)
    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='file'
          onChange={handleImageAsFile}
          name='image'
          // accept=".png, .jpg, jpeg"
          placeholder='Painting Url' />
          {/* // onChange={handleImageAsFile}/> */}
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