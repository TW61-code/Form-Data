import React, {useState} from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page , errors, setErrors}) {

  const [signUpEmail, setSignUpEmail] = useState('');  
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  let signUpData = {};

    async function handleSubmitForm(e) {
        e.preventDefault();

        if (newPassword === confirmationPassword) {
            signUpData = {
                password: newPassword,
                signUpEmail: signUpEmail,
            }

            const response = await fetch('http://localhost:3000/contacts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });

            console.log(await response.json());

          } else {
            alert('Passwords do not match');

            setErrors({...errors, noMatch: "Passwords do not match"});
          }

          console.log(errors.noMatch)

        setSignUpEmail('');
        setNewPassword('');
        setConfirmationPassword('');
    }


    return (
        <Form 
            page={page}
            type1='text' 
            type2='password'   
            setSignUpEmail={setSignUpEmail} 
            signUpEmail={signUpEmail}       
            setNewPassword={setNewPassword}
            newPassword={newPassword}
            setConfirmationPassword={setConfirmationPassword}
            confirmationPassword={confirmationPassword}
            onHandleSubmitForm={handleSubmitForm}
        />
    );
}

export default SignUp;