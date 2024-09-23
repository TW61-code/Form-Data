import React, {useState} from 'react';
import SignupForm from '../components/Signup-form.jsx';
import './Form.css';

function SignUp({page, setUserData, userData, setUserCount, userCount}) {

    const [formData, setFormData] = useState({signUpEmail: '', newPassword: '', confirmationPassword: '', isPasswordsMatch: true})

    async function handleSubmitForm(e) {
        e.preventDefault();

        //Only post data if form is correct.
        if (formData.newPassword === formData.confirmationPassword) {

            const signUpData = {
                password: formData.newPassword,
                email: formData.signUpEmail,
            }

            const request = await fetch('http://localhost:3000/contacts', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpData),
            });

            setFormData({signUpEmail: '', newPassword: '', confirmationPassword: '', isPasswordsMatch: true});
            setUserCount(count => count + 1)
          } else {
            //Render non-match text.
            setFormData((prev) => ({...prev, isPasswordsMatch: false}));
          }
    }


    return (
        <SignupForm 
            page={page}
            setFormData={setFormData}
            formData={formData}
            onHandleSubmitForm={handleSubmitForm}
        />
    );
}

export default SignUp;