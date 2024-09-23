import React, {useState} from 'react';
import Form from '../components/Form.jsx';
import './Form.css';

function SignUp({page}) {

  const [signUpEmail, setSignUpEmail] = useState('');  
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  //Display passwords don't match warning to user if false.
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);

    async function handleSubmitForm(e) {
        e.preventDefault();

        //Only post data if form is correct.
        if (newPassword === confirmationPassword) {

            const signUpData = {
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

            setSignUpEmail('');
            setNewPassword('');
            setConfirmationPassword('');

          } else {
            //Render non-match text.
            setIsPasswordsMatch(false);
          }
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