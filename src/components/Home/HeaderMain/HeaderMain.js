import React from 'react';
import HeaderImg from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="header__content mr-5 ml-3 pr-5">
                    <h2>Let’s Grow Your Brand To The Next Level</h2>
                    <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, magni! Dolorem earum atque sequi labore est veritatis accusantium ipsum voluptatem?</p>
                    <button className="btn btn-brand">Hire Us</button>
                </div>
            </div>
            <div className="col-md-6">
                <img src={HeaderImg} className="header__img" alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;