import React, {useState} from 'react';
import SigninForm from '../components/Signin-form.jsx';
import './Form.css';

function SignIn({page, userData, setUserData}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmitForm(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/contacts');
        const data = await response.json();
        
        setUserData(data);
    }

    return (
        <SigninForm 
            page={page}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onHandleSubmitForm={handleSubmitForm}
            userData={userData}
        />
    );
}

export default SignIn;