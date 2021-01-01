import React from 'react';
import Carusel from '../Carusel/Carusel';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Service from '../Service/Service';
import "./Home.css";

const Home = () => {
    return (
        <div className="home__container">
            <Header/>
            <Service/>
            <Carusel/>
            <Feedback/>
            <Contact/>
        </div>
    );
};

export default Home;