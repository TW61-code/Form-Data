import React from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page}) {
    return (
        <Form 
            page={page}
            type1='text' 
            type2='password'           
            passwordCheckPlaceholder='Confirm your password'
        />
    );
}

export default SignUp;