import React, { useContext } from 'react';
import "../CreateOrder/CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import uploadLogo from "../../../images/icons/upload-file.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CreativeAgency } from '../../../App';

const OrderReview = () => {
    const {login} = useContext(CreativeAgency);
    const [loggedInUser, setLoggedInUser] = login;
    return (
        <div>
            <div className="mt-2 container d-flex justify-content-between align-items-center">
                <img src={logo} className="logo-brand" alt=""/>
                <h5 className="mt-3 w-50">Review</h5>
                <strong className="mt-3">{loggedInUser.displayName}</strong>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mt-5 pl-5 w-25">
                    <div className="order__dashboard w-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h6 className=""><Link className="" to="/createOrder"><FontAwesomeIcon icon={faShoppingCart}/> Order </Link></h6>
                            <h6 className="my-3"><Link className="" to="/orderList"><FontAwesomeIcon icon={faShoppingBag}/> Service List</Link></h6>
                            <h6><Link className="active__orderPage" to="/orderReview"><FontAwesomeIcon icon={faCommentDots}/> Order Review </Link></h6>
                        </div>
                    </div>
                </div>
                <div className="w-75 bg-brand min-vh-100 main__container">
                    <form className="main__content">
                        <input className="form-control custom__input mt-5 ml-3" type="text" name="name" placeholder="Your Name" />
                        <input className="form-control custom__input mt-2 ml-3" type="text" name="company" placeholder="Company's Name, designation" />
                        <textarea className="form-control mt-2 ml-3" placeholder="Description" rows="7"></textarea>
                        <button className="btn btn-brand custom__btn ml-3 mt-2">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;