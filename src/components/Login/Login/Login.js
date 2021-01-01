import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { CreativeAgency } from '../../../App';
import google from "../../../images/icons/google.png";
import logo from "../../../images/logos/logo.png";
import "./Login.css";
import firebase from "firebase/app";

const Login = () => {
    const {userInformation} = useContext(CreativeAgency);
    const [userInfo, setUserInfo] = userInformation;
    const [loggedInUser, setLoggedInUser] = useState()
    let history = useHistory();
    let location = useLocation();
    console.log(userInfo)

    return (
        <div className="text-center">
            <img className="logo mt-5" src={logo} alt="logo"/>
            <div className="login-content d-flex justify-content-center align-items-center">
                <h3 className="login-heading">Login With</h3> 
                <div className="google-login d-flex justify-content-between align-items-center">
                    <img className="google-logo" src={google} alt="google"/>
                    <span>Continue With Google</span>
                    <span></span>
                </div>
                <p className="login-text">
                    Don't have an account?&nbsp; 
                    <Link to="/createOrder"><span className="login-link">
                    Create an account</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;