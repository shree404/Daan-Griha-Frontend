import React, { useState } from 'react';
import "./donate.css";

const DonateForm = () => {
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform donation submission logic here
        console.log('Donation submitted:', { amount, name, email });
        // Reset form fields
        setAmount(0);
        setName('');
        setEmail('');
    };

    return (
        <div className="donation-container">
        <form onSubmit={handleSubmit} className="donate-form-container">
            <label>
                Amount:
                <input type="number" value={amount} onChange={handleAmountChange} />
            </label>
            <br />
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <button type="submit" className="submit-donate">Donate</button>
        </form>
        </div>
    );
};

export default DonateForm;
