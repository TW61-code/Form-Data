import { useState } from 'react'
import './App.css'
import SignInPage from './form-pages/Sign-in.jsx';
import SignUpPage from './form-pages/Sign-up.jsx';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  //Sign in data.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //Sign up data.
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  console.log(email);

  return (
    <>
      {/* <SignInPage page='sign-in'/> */}
      <SignUpPage 
        page='sign-up'
        email={email} 
        setEmail={setEmail} 
        newPassword={newPassword}
        setNewPassword={setNewPassword} 
        confirmationPassword={confirmationPassword}
        setConfirmationPassword={setConfirmationPassword} 
      />
    </>
  )
}

export default App
