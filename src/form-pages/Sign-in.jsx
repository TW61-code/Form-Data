import React, {useState, useEffect} from 'react';
import SigninForm from '../components/Signin-form.jsx';
import './Form.css';

function SignIn({page, userData, setUserData, userCount}) {

    const [formData, setFormData] = useState({email: '', password: ''});

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

        for (let user of userData) {
            if (user.email === formData.email && user.password === formData.password) {
                alert(user.email + ' is registered');
            } else {
                console.log('no match');
            }
        }
    }

    return (
        <SigninForm 
            page={page}
            formData={formData}
            setFormData={setFormData}
            onHandleSubmitForm={handleSubmitForm}
            userData={userData}
        />
    );
}

export default SignIn;