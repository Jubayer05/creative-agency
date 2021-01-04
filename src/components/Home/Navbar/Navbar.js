import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logos/logo.png";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light mb-5">
             <div class="container-fluid">
                <a class="navbar-brand" href="#home">
                    <img src={logo} className="header__logo" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-2">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link active" href="#home">Our Portfolio</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link active" href="#home">Our Team</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link active" href="#home"><Link to="/addService">Contact Us</Link></a>
                    </li>
                    <li class="nav-item mx-2">
                    <Link to="/createOrder"><button className="btn btn-brand">Login</button></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;