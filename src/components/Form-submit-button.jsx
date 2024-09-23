import React from 'react';

const FormSubmitButton = ({page, buttonText}) => <button id='form-submit-button' type='submit' to={`/${page}`}>{buttonText}</button>

export default FormSubmitButton;