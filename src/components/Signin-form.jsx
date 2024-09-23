import React from 'react';

function signinForm(
    {
        formData,
        setFormData,
        onHandleSubmitForm,
    }) {

        function handleValueChange(e) {
            const {name, value} = e.target;
            setFormData((prev) => ({...prev, [name]: value}));
        }

        return (
        <form className='signin-form' onSubmit={onHandleSubmitForm}>
            <h3 className='form-header'>Login</h3>
            <fieldset className='signin-fieldset'>
                {/* username / signinEmail section */}
                <input 
                    type='text' 
                    id='signin-text'
                    name='email'
                    value={formData.email} 
                    onChange={handleValueChange} 
                    placeholder='Enter your email' 
                />
                {/* password section */}
                <input 
                    type='password'
                    id='signin-password'
                    name='password'
                    value={formData.password} 
                    onChange={handleValueChange} 
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