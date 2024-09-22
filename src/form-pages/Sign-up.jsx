import React from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page, email, setEmail, setConfirmationPassword, setNewPassword, newPassword, confirmationPassword}) {

    const data = {
        password: newPassword,
        confirmationPassword: confirmationPassword,
        email: email,
    }

    async function handleSubmitForm(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/contacts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        console.log(await response.json());
    }


    return (
        <Form 
            page={page}
            type1='text' 
            type2='password'   
            setEmail={setEmail} 
            email={email}       
            passwordCheckPlaceholder='Confirm your password'
            setNewPassword={setNewPassword}
            setConfirmationPassword={setConfirmationPassword}
            onHandleSubmitForm={handleSubmitForm}
        />
    );
}

export default SignUp;