import React from 'react';
import Button from './Form-submit-button.jsx';
import FormFooter from './Form-footer.jsx';

function Form(
    {
        type1, 
        type2, 
        page, 
    }) {

    //consitional rendering, dependant on the value of the 'page' prop.
    const signUpPasswordPlaceholder = page === 'sign-up' ? 'Create a password' : 'Enter your pasword';
    const signUpPasswordMatchLabel = page === 'sign-up' ? 'Confirm your password' : undefined;
    const signUpPasswordInput = <input type={type2} id={`${page}-${type2}-check`} placeholder={signUpPasswordMatchLabel} />;
    const buttonText = page === 'sign-in' ? 'Login' : 'Signup';
    const footerText = page === 'sign-in' ? "Don't have an account?" : 'Already have an account?';
    const footerType = page === 'sign-in' ? 'Signup' : 'Login';
    

    //TODO: create a conditional that checks the name of page.
    //render the form depending on the value of the page prop.
    return (
        <form className={`${page}-form`}>
            <h3 className='form-header'>{page === 'sign-in' ? 'Login' : 'Signup'}</h3>
            <fieldset className={`${page}-fieldset`}>
                {/* username / email section */}
                <input type={type1} id={`${page}-${type1}`} placeholder='Enter your email' />
                {/* password section */}
                <input type={type2} id={`${page}-${type2}`} placeholder={signUpPasswordPlaceholder}/>
                {page === 'sign-up' && signUpPasswordInput}
                {page === 'sign-in' && <p className='forgot-password'><a>Forgot password?</a></p>}
                <Button page={page} type={buttonText}/>
            </fieldset>
            <FormFooter 
                text={footerText}
                type={footerType}
            />
        </form>
    );
};

export default Form;