import React, {useState, useEffect} from 'react';
import SigninForm from '../components/Signin-form.jsx';
import './Form.css';

function SignIn({page, userData, setUserData, userCount}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        getData();
    }, [userCount]);

    async function getData() {
        const response = await fetch('http://localhost:3000/contacts');
        const data = await response.json();
        setUserData(data);
        console.log('from useEffect ', data);
    }

    function handleSubmitForm(e) {
        e.preventDefault();

        
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