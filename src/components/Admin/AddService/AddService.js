import React from 'react';
import "../../Order/CreateOrder/CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import uploadLogo from "../../../images/icons/upload-file.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AddService = () => {
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
                <div className="admin__content mt-5 ml-5 mb-3 p-3">
                    <form className="main__content">
                        <span className="ml-3">Service Title</span>
                        <div className="d-flex justify-content-between align-items-center mt-n1">
                            <input className="form-control mt-2 ml-2 w-75" type="text" name="company" placeholder="Enter Title" />
                            <label className="upload__btn upload__btn--admin ml-2 form-control mt-2">
                                <img src={uploadLogo} alt=""/>
                                <span> Upload a file </span>
                                <input className="" type="file" name="file" style={{display:"none"}}/>
                            </label>
                        </div>
                        <label className="ml-3 mt-2">Description</label>
                        <textarea className="form-control ml-2 mt-n1" placeholder="Enter Description" rows="7"></textarea>
                    </form>
                </div>
                <div className="container d-flex">
                    <span></span>
                    <button className="btn btn-brand ml-auto mr-5">submit</button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;