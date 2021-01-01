import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="contact__title mb-3">Let us handle your project, professionally.</h2>
                        <p className="contact__description">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input className="form-control custom__input" type="text" name="name" placeholder="Your Email Address"/>
                            <input className="form-control custom__input my-2" type="text" name="name" placeholder="Your Name / Company's Name"/>
                            <textarea className="form-control" placeholder="Your Message" name="message" cols="30" rows="10"></textarea>
                            <button className="btn btn-brand mt-2 custom__btn">Send</button>
                        </form>
                    </div>
                </div>
                <p className="text-center mt-5">&copy; copyright creative agency {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Contact;