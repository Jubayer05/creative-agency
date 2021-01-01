import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import "./Feedback.css";

const clientsFeedback = [
    {image: customer1, name: "Nash Patrik"},
    {image: customer2, name: "Jonas Samuel"},
    {image: customer3, name: "Mike Hamasder"}
];

const Feedback = () => {
    return (
        <section className="container pb-5">
            <h2 className="text-center py-5 mt-5">Clients<span className="text-brand"> Feedback</span></h2> 
            <div className="row">
                { clientsFeedback.map(feedback => 
                <div className="col-md-4">
                    <div class="card py-2 px-3 h-100 feedback__card">
                        <div className="d-flex justify-content-between align-items-center feedback__card--header">
                            <img src={feedback.image} className="w-25" alt={feedback.name}/>
                            <p className="w-50 mt-4 ml-3">
                                {feedback.name} <br/> 
                                <p><small>CEO, Manpol</small></p>
                            </p>
                            <span className="w-25"></span>
                        </div>
                        <div class="card-body feedback__body">
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum distinctio vel ea nemo aliquid!</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default Feedback;