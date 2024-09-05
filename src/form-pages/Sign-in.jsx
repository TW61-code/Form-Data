import React from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignIn({page}) {
    return (
        <Form 
            page={page}
            type1='text' 
            type2='password' 
        />
    );
}

export default SignIn;