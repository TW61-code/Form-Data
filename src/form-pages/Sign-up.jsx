import React, {useState} from 'react';
import SignupForm from '../components/Signup-form.jsx';
import './Form.css';

function SignUp({page, setUserData, userData}) {

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