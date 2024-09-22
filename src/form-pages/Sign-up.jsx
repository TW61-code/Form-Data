import React, {useState} from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page , errors, setErrors}) {

  const [signUpEmail, setSignUpEmail] = useState('');  
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);

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

            setIsPasswordsMatch(false);

          }

        setSignUpEmail('');
        setNewPassword('');
        setConfirmationPassword('');
    }


    return (
        <Form 
            page={page}
            type1='text' 
            type2='password' 
            isPasswordsMatch={isPasswordsMatch}
            setIsPasswordsMatch={setIsPasswordsMatch}
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