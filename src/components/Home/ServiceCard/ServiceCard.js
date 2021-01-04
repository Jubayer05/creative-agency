import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CreativeAgency } from '../../../App';
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const services = [
    {
        image: service1,
        title: "Web & Mobile design",
        price: 100,
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product"
    },
    {
        image: service2,
        title: "Graphic design",
        price: 100,
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out"
    },
    {
        image: service3,
        title: "Web development",
        price: 100,
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
    },   
];
const ServiceCard = () => {
    const {userInformation} = useContext(CreativeAgency);
    const [userInfo, setUserInfo] = userInformation;
    let history = useHistory();

    const handleOrderService = (service) => {
        setUserInfo({...userInfo, ...service});
        history.push("/createOrder");
    }

    return (
        <div className="row service-card mx-auto">
            {
                services.map(service => 
                    
                    <div onClick={() => handleOrderService(service)} className="col-md-4 text-center mt-5">
                        <div className="card pt-3 h-100 service__card--item">
                        <Link className="serviceCardLink" to="/createOrder">
                        <img src={service.image} className="card-img-top w-25 mx-auto" alt="..." />
                        <div className="card-body">
                            <h3>{service.title}</h3>
                            <p className="card-text">{service.description}</p>
                        </div>
                        </Link>
                        </div>
                  </div>
                 )
            }
        </div>
    );
};

export default ServiceCard;