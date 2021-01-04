import React, { useContext, useEffect, useState } from 'react';
import "../CreateOrder/CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo1 from "../../../images/icons/service1.png";
import logo2 from "../../../images/icons/service2.png";
import { CreativeAgency } from '../../../App';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/getUserOrder`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setOrderList(data)});
    }, []);
    

    const {login} = useContext(CreativeAgency);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <div>
            <div className="mt-2 container d-flex justify-content-between align-items-center">
                <img src={logo} className="logo-brand" alt=""/>
                <h5 className="mt-3 w-50">Service LIst</h5>
                <strong className="mt-3">{loggedInUser.displayName}</strong>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mt-5 pl-5 w-25">
                    <div className="order__dashboard w-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h6 className=""><Link className="" to="/createOrder"><FontAwesomeIcon icon={faShoppingCart}/> Order </Link></h6>
                            <h6 className="my-3"><Link className="active__orderPage" to="/orderList"><FontAwesomeIcon icon={faShoppingBag}/> Service List</Link></h6>
                            <h6><Link className="" to="/orderReview"><FontAwesomeIcon icon={faCommentDots}/> Order Review </Link></h6>
                        </div>
                    </div>
                </div>
                <div className="w-75 bg-brand min-vh-100 main__container pb-5">
                    <div className="order__content p-3 pb-5">
                        {
                        orderList.map(item => 
                            <div key={item._id} className="card pt-3 h-100 orderList__card">
                                <div className="d-flex justify-content-between align-items-start mx-3">
                                    <img src={item.image} className="card-img-top w-25 orderList__card--img" alt="..." />
                                    <button className="btn btn-brand">Pending</button>
                                </div>
                            <div className="card-body">
                                <h3 className="orderList__card--heading">{item.productTitle}</h3>
                                <p className="card-text orderList__card--text">{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio repellat doloribus dolorum? Labore, quisquam?</p>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;