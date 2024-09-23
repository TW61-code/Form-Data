import { useState } from 'react'
import './App.css'
import SignInPage from './form-pages/Sign-in.jsx';
import SignUpPage from './form-pages/Sign-up.jsx';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [userData, setUserData] = useState();

  return (
    <>
      <SignInPage page='sign-in' userData={userData} setUserData={setUserData} />
      {/* <SignUpPage page='sign-up' setUserData={setUserData} userData={userData} /> */}
    </>
  )
}

export default App
