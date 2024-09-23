import React from 'react';
import Button from './Form-submit-button.jsx';
import FormFooter from './Form-footer.jsx';

function SignupForm(
    {
        setFormData,
        formData,
        onHandleSubmitForm,
    }) {

        function handleValueChange(e) {
            const {name, value} = e.target;
            setFormData((prev) => ({...prev, [name]: value, isPasswordsMatch: true}));
            
        }

        return (
        <form className='signup-form' onSubmit={onHandleSubmitForm}>
            <h3 className='form-header'>Sign up</h3>
            <fieldset className='signup-fieldset'>
                {/* username / signUpEmail section */}
                <input 
                    type='text' 
                    id='signup-text'
                    name='signUpEmail'
                    value={formData.signUpEmail} 
                    onChange={handleValueChange} 
                    placeholder='Enter your email' 
                />
                {/* password section */}
                <input 
                    type='password'
                    id='signup-password'
                    name='newPassword'
                    value={formData.newPassword} 
                    onChange={handleValueChange} 
                    placeholder='Create a password'
                />
                <input 
                    type='password'
                    id='signup-password-check'
                    name='confirmationPassword'
                    value={formData.confirmationPassword} 
                    onChange={handleValueChange} 
                    placeholder='Confirm password'
                />
                {!formData.isPasswordsMatch && <p>Passwords do not match</p>}
                <button type='submit'>Sign up</button>
            </fieldset>
            <p className='form-footer'>
                Already have an account? 
                <span className='form-footer-span'><a> Login</a></span>
            </p>
        </form>
    );
};

export default SignupForm;