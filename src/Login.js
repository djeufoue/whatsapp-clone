import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth,provider } from './firebase';

function Login() {
    const signIn = ()=>{
      auth.signInWithPopup(provider).then((result) => console.log(result)).catch((error) => alert(error.message));
    };

  return (
    <div className="Login">
      <div className="Login_container">
      <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/langfr-330px-WhatsApp.svg.png" />
        <div className="login__text">
            <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>
            Sign In With Google
        </Button>
      </div>    
    </div>
  );
}

export default Login