import React from 'react';
import "./Login.css";
import {
  auth,
  signInWithPopup,
  provider
} from "../../firebase";
import { useUser } from "../../contextApi/User";


const Login = () => {

  const userInfo = useUser();

  const signIn = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
      const photoURL = `${result.user.photoURL}?access_token=${result._tokenResponse.oauthAccessToken}`;
      userInfo.setUser({
        displayName : result.user.displayName,
        photoURL : photoURL
      });
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  return (
    <div className='login-box'>
        <div className='login'>
            <img src='facebook.png' alt='login-logo' />
            <h3>Sign in to Facebook</h3>
            <button onClick={signIn}>login with facebook</button>
        </div>
    </div>
  )
}

export default Login;