import React from 'react';

const FormSubmitButton = ({page, type}) => <button id='form-submit-button' type='submit' to={`/${page}`}>{type}</button>

export default FormSubmitButton;