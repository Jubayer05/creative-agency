import React, { useState } from 'react';
import "../../Order/CreateOrder/CreateOrder.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import "./ServiceList.css";

const serviceList = [
    {
        name: "Jubayer",
        email: "jubayer@fortawesome.io",
        service: "Jubayer",
        details: "Dynamic Name Dynamic Name Dynamic ",
        status: "active"
    },
    {
        name: "Jubayer",
        email: "jubayer@fortawesome.io",
        service: "Jubayer",
        details: "Dynamic Name Dynamic Name Dynamic ",
        status: "active"
    },
    {
        name: "Jubayer",
        email: "jubayer@fortawesome.io",
        service: "Jubayer",
        details: "Dynamic Name Dynamic Name Dynamic ",
        status: "active"
    },
    {
        name: "Jubayer",
        email: "jubayer@fortawesome.io",
        service: "Jubayer",
        details: "Dynamic Name Dynamic Name Dynamic ",
        status: "active"
    },
    {
        name: "Jubayer",
        email: "jubayer@fortawesome.io",
        service: "Jubayer",
        details: "Dynamic Name Dynamic Name Dynamic ",
        status: "active"
    }
]

const ServiceList = () => {
    const [value1, setValue1] = useState({
        pending: "",
        going: "",
        done: ""
    });

        
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
                        <table style={{width:"100%"}} >
                            <thead className="w-100">
                                <tr style={{width:"100%"}} className="table__header">
                                    <th style={{width:"18%"}}>Name</th>
                                    <th style={{width:"25%"}}>Email ID</th>
                                    <th style={{width:"15%"}}>Service</th>
                                    <th style={{width:"23%"}}>Project Details</th>
                                    <th style={{width:"10%"}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceList.map(item => 
                                    <tr style={{width:"100%"}}>
                                        <td style={{width:"18%"}}>{item.name}</td>
                                        <td style={{width:"25%"}}>{item.email}</td>
                                        <td style={{width:"15%"}}>{item.service}</td>
                                        <td style={{width:"25%"}}>{item.details}</td>
                                        <td style={{width:"10%"}}>
                                        <select class="green" >
                                            { value1 ?  
                                                <option style={{color: "green"}} value="pending" >Pending</option>
                                                : 
                                                <>
                                                    <option style={{color: "red"}} value="pending" >Pending</option>
                                                    <option style={{color: "blue"}} value="pending" >Pending</option>
                                                </>
                                            }
                                            
                                        </select>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;