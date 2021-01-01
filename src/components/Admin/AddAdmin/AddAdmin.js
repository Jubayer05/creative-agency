import React from 'react';
import "../../Order/CreateOrder/CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "./AddAdmin.css";

const AddAdmin = () => {
    return (
        <section>
            <div className="mt-2 container d-flex justify-content-between align-items-center">
                <img src={logo} className="logo-brand" alt=""/>
                <h5 className="mt-3 w-50">Order</h5>
                <strong className="mt-3">Dynamic Name</strong>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mt-5 pl-5 w-25">
                    <div className="order__dashboard w-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h6 className=""><Link className="active__orderPage" to="/serviceList"><FontAwesomeIcon icon={faShoppingBag}/> Service List</Link></h6>
                            <h6 className="my-3"><Link className="" to="/addService"><FontAwesomeIcon icon={faPlus}/> Add Service</Link></h6>
                            <h6><Link className="" to="/addAdmin"><FontAwesomeIcon icon={faUserPlus}/> Make Admin </Link></h6>
                        </div>
                    </div>
                </div>
                <div className="w-75 bg-brand min-vh-100 main__container">
                    <div className="admin__content m-5">
                    <form className="main__content pt-3">
                        <span className="d-block ml-4">Email</span><br/>
                        <div className="d-flex align-items-center mt-n3">
                            <input className="form-control ml-3" type="email" name="name" placeholder="Email Address" />
                            <button className="btn btn-brand admin__btn ml-2">submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;