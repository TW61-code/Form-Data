import React from 'react';

function signinForm(
    {
        email,
        password,
        setEmail,
        setPassword,
        onHandleSubmitForm,
        userData
    }) {

        

        return (
        <form className='signin-form' onSubmit={onHandleSubmitForm}>
            <h3 className='form-header'>Login</h3>
            <fieldset className='signin-fieldset'>
                {/* username / signinEmail section */}
                <input 
                    type='text' 
                    id='signin-text'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Enter your email' 
                />
                {/* password section */}
                <input 
                    type='password'
                    id='signin-password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Enter your password'
                />
                <button type='submit'>Sign in</button>
            </fieldset>
            <p className='form-footer'>
                Don't have an account?
                <span className='form-footer-span'><a> Sign up</a></span>
            </p>
        </form>
    );
};

export default signinForm;