import React from 'react';
import "./contact.css"

import Nav from "./nav"

const Contact = () => {
    return (
        <div>
        <div>
            <Nav />
         </div>
    <div className="" id="contact_page">
      
        <div className="contact-container">
            <div className='contact-head'>
            <h1>Contact Us</h1>
            </div>
            <div id='contact-para'>
            <p>For any inquiries or support, please feel free to reach out to us.</p>
            </div>
            
            <form>
                <label htmlFor="name" id="label-name-contact">Name:
                <input type="text" id="contact-form-name" className="contact-form " name="name" />
                </label>
                <label htmlFor="email">Email:
                <input type="email"  id="contact-form-email" className="contact-form" name="email" />
                </label>
                <label htmlFor="message">Message:
                <textarea  name="message"  id=" contact-form-message" className="contact-form input"  rows="4" />
                </label>
                <button type="submit" id="contactbutton" >Submit</button>
            </form>
            
        </div>

    </div>
    </div>
    );
};

export default Contact;
