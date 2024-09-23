import React from 'react';
import Button from './Form-submit-button.jsx';
import FormFooter from './Form-footer.jsx';

function SignupForm(
    {
        isPasswordsMatch,
        setIsPasswordsMatch,
        setSignUpEmail,
        signUpEmail,
        setNewPassword,
        newPassword,
        setConfirmationPassword,
        confirmationPassword,
        onHandleSubmitForm,
    }) {

        function handlePasswordChange(e) {
            setNewPassword(e.target.value);
            //Remove the non-matching password message
            setIsPasswordsMatch(true);
        }

        function handleConfirmPasswordChange(e) {
            setConfirmationPassword(e.target.value);
            setIsPasswordsMatch(true);
        }

        return (
        <form className='signup-form' onSubmit={onHandleSubmitForm}>
            <h3 className='form-header'>Sign up</h3>
            <fieldset className='signup-fieldset'>
                {/* username / signUpEmail section */}
                <input 
                    type='text' 
                    id='signup-text'
                    value={signUpEmail} 
                    onChange={(e) => setSignUpEmail(e.target.value)} 
                    placeholder='Enter your email' 
                />
                {/* password section */}
                <input 
                    type='password'
                    id='signup-password'
                    value={newPassword} 
                    onChange={handlePasswordChange} 
                    placeholder='Create a password'
                />
                <input 
                    type='password'
                    id='signup-password-check'
                    value={confirmationPassword} 
                    onChange={handleConfirmPasswordChange} 
                    placeholder='Confirm password'
                />
                {!isPasswordsMatch && <p>Passwords do not match</p>}
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