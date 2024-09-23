// import { useState } from 'react'
import './App.css'
import SignInPage from './form-pages/Sign-in.jsx';
import SignUpPage from './form-pages/Sign-up.jsx';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      {/* <SignInPage page='sign-in'/> */}
      <SignUpPage page='sign-up' />
    </>
  )
}

export default App
