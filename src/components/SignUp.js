import React, { useState } from "react";
import "./SignUp.css";

function SingUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    province: "",
    district: "",
    municipality: "",
    contact: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getDistricts = (province) => {
    const provinceDistricts = {
      koshi: [
        "Jhapa",
        "Ilam",
        "Panchthar",
        "Taplejung",
        "Sankhuwasabha",
        "Terhathum",
        "Bhojpur",
        "Dhankuta",
        "Khotang",
        "Sunsari",
        "Morang",
        "Solukhumbu",
        "Okhaldhunga",
        "Udaipur",
      ],
      madesh: [
        "Parsa",
        "Bara",
        "Rautahat",
        "Sarlahi",
        "Mahotari",
        "Dhanusha",
        "Siraha",
        "Saptari",
      ],
      bagmati: [
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur",
        "Chitwan",
        "Rasuwa",
        "Ramechhap",
        "Kavre",
        "Makhwanpur",
        "Dhading",
        "Nuwakot",
        "Sindhupalchoke",
        "Dolakha",
        "Sindhuli",
      ],
      gandaki: [
        "Baglung ",
        "Gorkha",
        "Manang",
        "Lamjung",
        "Tanahun",
        "Nawalparasi",
        "Kaski",
        "Syangja",
        "Parvat",
        "Myagdi",
        "Mustang",
      ],
      lumbini: [
        "Arghakhanchi",
        "Banke",
        "Bardiya",
        "Dang",
        "Eastern Rukum",
        "Gulmi",
        "Kapilvastu",
        "Parasi",
        "Palpa",
        "Pyuthan",
        "Rolpa",
        "Rupandehi",
      ],
      karnali: [
        "Dolpa",
        "Mugu",
        "Humla",
        "Jumla",
        "Kalikot",
        "Dailekh",
        "Jajarkot",
        "Rukum",
        "Salyan",
        "Surkhet",
      ],
      sudurpashchim: [
        "Kailali",
        "Kanchanpur",
        "Baitadi",
        "Dadeldhura",
        "Doti",
        "Achham",
        "Darchula",
        "Bajhang",
        "Bajura",
      ],
    };

    return provinceDistricts[province] || [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="First Name" className="firstname">
          {" "}
          First Name:
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="Last Name" className="lastname">
          {" "}
          Last Name:
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="Province" className="province">
          {" "}
          Province:
          <select
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          >
            <option value="">Select your Province</option>
            <option value="koshi">Koshi province</option>
            <option value="madesh">Madesh Province </option>
            <option value="bagmati">Bagmati Province</option>
            <option value="gandaki">Gandaki Province</option>
            <option value="lumbini">Lumbini Province</option>
            <option value="karnali">Karnali Province</option>
            <option value="sudurpashchim">Sudurpashchim Province</option>
          </select>
        </label>
        {formData.province && (
          <label htmlFor="district">
            District:
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
            >
              <option value="">Select district</option>
              {getDistricts(formData.province).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </label>
        )}
        <label htmlFor="Contact">
          {" "}
          Contact No:
          <input
            type="tel"
            name="contact"
            id="contactno"
            placeholder="Contact No"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="username">
          {" "}
          Username:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Set Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="Email">
          {" "}
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SingUp;
