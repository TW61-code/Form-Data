import React, {useState} from 'react';
import SignupForm from '../components/Signup-form.jsx';
import './Form.css';

function SignUp({page, setUserData, userData, setUserCount, userCount}) {

  const [signUpEmail, setSignUpEmail] = useState('');  
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(true);

    async function handleSubmitForm(e) {
        e.preventDefault();

        //Only post data if form is correct.
        if (newPassword === confirmationPassword) {

            const signUpData = {
                password: newPassword,
                email: signUpEmail,
            }

            const request = await fetch('http://localhost:3000/contacts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });

            setSignUpEmail('');
            setNewPassword('');
            setConfirmationPassword('');
            setUserCount(userCount++)
          } else {
            //Render non-match text.
            setIsPasswordsMatch(false);
          }
    }


    return (
        <SignupForm 
            page={page}
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