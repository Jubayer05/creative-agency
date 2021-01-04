import React, { useContext } from 'react';
import "./CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import uploadLogo from "../../../images/icons/upload-file.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CreativeAgency } from '../../../App';
import { useForm } from "react-hook-form";

const CreateOrder = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {login, userInformation} = useContext(CreativeAgency);
    const [loggedInUser, setLoggedInUser] = login;
    const [userInfo, setUserInfo] = userInformation;

    const onSubmit = data => {
        fetch("http://localhost:5000/userOrder", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    return (
        <section>
            <div className="mt-2 container d-flex justify-content-between align-items-center">
                <img src={logo} className="logo-brand" alt=""/>
                <h5 className="mt-3 w-50">Order</h5>
                <strong className="mt-3">{loggedInUser.displayName}</strong>
            </div>
            <div className="d-flex justify-content-between">
                <div className="mt-5 pl-5 w-25">
                    <div className="order__dashboard w-100 d-flex justify-content-center align-items-center">
                        <div>
                            <h6 className=""><Link className="active__orderPage" to="/createOrder"><FontAwesomeIcon icon={faShoppingCart}/> Order </Link></h6>
                            <h6 className="my-3"><Link className="" to="/orderList"><FontAwesomeIcon icon={faShoppingBag}/> Service List</Link></h6>
                            <h6><Link className="" to="/orderReview"><FontAwesomeIcon icon={faCommentDots}/> Order Review </Link></h6>
                        </div>
                    </div>
                </div>
                <div className="w-75 bg-brand min-vh-100 main__container">
                    <form onSubmit={handleSubmit(onSubmit)} className="main__content">
                        <input className="form-control custom__input mt-5 ml-3"
                         type="text" name="name" 
                         placeholder="Your Name / Company's Name" 
                         defaultValue={userInfo.displayName} 
                         ref={register}/>

                        <input className="form-control custom__input mt-2 ml-3"
                        type="email" name="email" 
                        placeholder="Your Email Address" 
                        defaultValue={userInfo.email} 
                        ref={register}/>

                        <input className="form-control custom__input mt-2 ml-3" 
                        type="text" name="productTitle" 
                        placeholder="Graphics Design" 
                        value={userInfo.title} 
                        ref={register}/>

                        <textarea className="form-control mt-2 ml-3" 
                        placeholder="Project Detail" rows="7" name="details"
                        ref={register}></textarea>

                        <div className="d-flex justify-content-between align-items-center">
                            <input className="form-control custom__input mt-2 ml-3" 
                            type="text" name="productPrice" 
                            placeholder="Price" 
                            value={userInfo.price} 
                            ref={register}/>

                            <label className="upload__btn ml-3 form-control custom__input mt-2">
                                <img src={uploadLogo} alt=""/>
                                <span> Upload a file </span>
                                <input className="" type="file" name="file" style={{display:"none"}}/>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-brand custom__btn ml-3 mt-2">submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateOrder;