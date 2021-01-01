import React from 'react';
import "./Service.css";
import airbnb from "../../../images/logos/airbnb.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";
import ServiceCard from '../ServiceCard/ServiceCard';

const logos = [
    {image: airbnb},
    {image: google},
    {image: netflix},
    {image: slack},
    {image: uber}    
]

const Service = () => {
    return (
        <section className="service mt-5 py-5">
            <div className="container">
                <div className="serviceLogo__container d-flex justify-content-around mx-auto mb-5">
                    {
                        logos.map(logo => <img src={logo.image} alt="2logo" />)
                    }
                </div> 
                <h2 className="text-center pt-5">Provide awesome <span className="text-brand">services</span></h2> 
                <ServiceCard/>  
            </div>            
        </section>
    );
};

export default Service;