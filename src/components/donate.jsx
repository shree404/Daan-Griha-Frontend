import React, { useState } from 'react';
import "./donate.css";
import { Link } from 'react-router-dom';

const DonateForm = () => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('+977');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleContactChange = (e) => {
        setContact(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform donation submission logic here
        console.log('Donation submitted:', { amount, name, email,contact });
        // Reset form fields
        setAmount(0);
        setName('');
        setEmail('');
        setContact('');
    };

    return (



       <div className="">
        <div className="donation-container">
            <div className="" id="forget_title">
                <p id="forget_title_name">Donation Process</p>
             </div>
        <form onSubmit={handleSubmit} className="donate-form-container">

             <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Contact:
                <input type="string" value={contact} onChange={handleContactChange} />
            </label>

            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            
            <label className="donate-label">
                Amount:
                <input type="text" value={amount} onChange={handleAmountChange} />
            </label>
            
            <label>

       Types of Donation:

       <select>

         <option value="">Packed Food</option>
         <option value="">Raw Food</option>
         <option value="">Cooked Food</option>
         <option value="">Books & Copy</option>
         <option value="">Clothes</option>
         <option value="">Others</option>

       </select>

     </label>
           
            
           
            <br />
            <button type="submit" className="submit-donate">Donate</button>

           <Link to="/"> <button type="" className="submit-donate">back</button></Link>
        </form>
        </div>
     </div> 
    );
};

export default DonateForm;
