import React, { useContext } from 'react';
import { CreativeAgency } from '../../../App';
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const services = [
    {
        image: service1,
        title: "Web & Mobile design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product"
    },
    {
        image: service2,
        title: "Graphic design",
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out"
    },
    {
        image: service3,
        title: "Web development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
    },
];
const ServiceCard = () => {
    const {userInformation} = useContext(CreativeAgency);
    const [userInfo, setUserInfo] = userInformation;

    const handleOrderService = (service) => {
        setUserInfo({...userInfo, ...service});
    }

    return (
        <div className="row service-card mx-auto">
            {
                services.map(service => 
                    <div onClick={() => handleOrderService(service)} className="col-md-4 text-center mt-5">
                        <div className="card pt-3 h-100 service__card--item">
                        <img src={service.image} className="card-img-top w-25 mx-auto" alt="..." />
                        <div className="card-body">
                            <h3>{service.title}</h3>
                            <p className="card-text">{service.description}</p>
                        </div>
                        </div>
                  </div>)
            }
        </div>
    );
};

export default ServiceCard;