import React, { useState } from 'react';
import "./donate.css";

const DonateForm = () => {
    const [addressType, setAddressType] = useState('defaultAddress');
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

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
    const handleAddressChange = (event) => {
        setAddressType(event.target.value);
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
                <input type="text" value={name} name="dname" onChange={handleNameChange} />
            </label>
            <label>
                Contact:
                <input type="number" value={contact} name="dcontact"    onChange={handleContactChange} />
            </label>

            <label>
                Email:
                <input type="email" value={email} name="demail"    onChange={handleEmailChange} />
            </label>
            <br />
            <label className="donate-label">
                Amount:
                <input type="number" value={amount} name="damount"    onChange={handleAmountChange} />
            </label>
            <br />
            <label>
                <label htmlFor="Location" className='addressType'>Location
                <br />
                Default Address
                    <input type="radio" name="addressType" id="defaultAddress" value="defaultAddress"/>
                    <br />
                    New Address
                    <input type="radio" name="addressType" id="newAddress" value="newAddress" checked={addressType === 'newAddress'}
          onChange={handleAddressChange} />
                 <br />
                </label>
                {addressType === 'newAddress' && (
        <div>
          <label htmlFor="newAddressLine1"> New Address </label>
          <input type="text" id="newprovince" name="newProvince" placeholder='Province' />
          <input type="text" id="newdistrict" name="newdistrict" placeholder='District' />
          <input type="text" id="newmunicipality" name="newmunicipality" placeholder='Municipality' />
          {/* Add more text fields as needed */}
        </div>
      )}


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
            <button type="" className="submit-donate">back</button>
        </form>
        </div>
     </div> 
    );
};

export default DonateForm;
