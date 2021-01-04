import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { CreativeAgency } from '../../../App';
import google from "../../../images/icons/google.png";
import logo from "../../../images/logos/logo.png";
import "./Login.css";
import firebase from "firebase/app";
import firebaseConfig from '../../../firebase.config';
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {userInformation, login} = useContext(CreativeAgency);
    const [userInfo, setUserInfo] = userInformation;
    const [loggedInUser, setLoggedInUser] = login;

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(userInfo)

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            setUserInfo({...userInfo, 
                displayName: user.displayName, 
                email: user.email, 
                photoURL: user.photoURL});

            setLoggedInUser({displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL})
                history.replace(from);
        })
    }

    return (
        <div className="text-center">
            <img className="logo mt-5" src={logo} alt="logo"/>
            <div className="login-content d-flex justify-content-center align-items-center">
                <h3 className="login-heading">Login With</h3> 
                <div onClick={handleGoogleSignIn} className="google-login d-flex justify-content-between align-items-center">
                    <img className="google-logo" src={google} alt="google"/>
                    <span>Continue With Google</span>
                    <span></span>
                </div>
                <p className="login-text">
                    Don't have an account?&nbsp; 
                    <Link to="/createOrder"><span onClick={handleGoogleSignIn} className="login-link">
                    Create an account</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;