import React from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page, email, setEmail, setConfirmationPassword, setNewPassword, newPassword, confirmationPassword}) {

    let confirmPasswordPlaceholder = 'Confirm your password';

    const matchingPassword = confirmationPassword === newPassword;

    const signUpData = {
        password: matchingPassword ? newPassword : undefined,
        email: matchingPassword ? email : undefined,
    }

    async function handleSubmitForm(e) {
        e.preventDefault();

        if (!matchingPassword) {
            confirmPasswordPlaceholder = 'Passwords do not match';
        }

        const response = await fetch('http://localhost:3000/contacts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData),
        });

        setEmail('');
        setNewPassword('');
        setConfirmationPassword('');
    }


    return (
        <Form 
            page={page}
            type1='text' 
            type2='password'   
            setEmail={setEmail} 
            email={email}       
            confirmPasswordPlaceholder={confirmPasswordPlaceholder}
            setNewPassword={setNewPassword}
            newPassword={newPassword}
            setConfirmationPassword={setConfirmationPassword}
            confirmationPassword={confirmationPassword}
            onHandleSubmitForm={handleSubmitForm}
        />
    );
}

export default SignUp;