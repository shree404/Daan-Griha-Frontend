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
        "Eastern_Rukum",
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
  const getMunicipalities = (district) => {
    const districtMunicipalities = {
      Jhapa: [],
      Ilam: [],
      Panchthar: [],
      Taplejung: [],
      Sankhuwasabha: [],
      Terhathum: [],
      Bhojpur: [],
      Dhankuta: [],
      Khotang: [],
      Sunsari: [],
      Morang: [],
      Solukhumbu: [],
      Okhaldhunga: [],
      Udaipur: [],
      Parsa: [],
      Bara: [],
      Rautahat: [],
      Sarlahi: [],
      Mahotari: [],
      Dhanusha: [],
      Siraha: [],
      Saptari: [],
      Kathmandu: [],
      Lalitpur: [],
      Bhaktapur: [],
      Chitwan: [],
      Rasuwa: [],
      Ramechhap: [],
      Kavre: [],
      Makhwanpur: [],
      Dhading: [],
      Nuwakot: [],
      Sindhupalchoke: [],
      Dolakha: [],
      Sindhuli: [],
      Baglung: [],
      Gorkha: [],
      Manang: [],
      Lamjung: [],
      Tanahun: [],
      Nawalparasi: [],
      Kaski: [],
      Syangja: [],
      Parvat: [],
      Myagdi: [],
      Mustang: [],
      Arghakhanchi: [],
      Banke: [],
      Bardiya: [],
      Dang: [],
      Eastern_Rukum: [],
      Gulmi: [],
      Kapilvastu: [],
      Parasi: [],
      Palpa: [],
      Pyuthan: [],
      Rolpa: [],
      Rupandehi: [],
      Dolpa: [],
      Mugu: [],
      Humla: [],
      Jumla: [],
      Kalikot: [],
      Dailekh: [],
      Jajarkot: [],
      Rukum: [],
      Salyan: [],
      Surkhet: [],
      Kailali: [],
      Kanchanpur: [],
      Baitadi: [],
      Dadeldhura: [],
      Doti: [],
      Achham: [],
      Darchula: [],
      Bajhang: [],
      Bajura: [],
    };
    return districtMunicipalities[district] || [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <div className="form-row">
            <label htmlFor="First Name" className="input-label">
              {" "}
              First Name:
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="input-type"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="\form-row">
            <label htmlFor="Last Name" className="input-label">
              {" "}
              Last Name:
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="input-type"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="address">
          <div className="form-row">
            <label htmlFor="Province" className="input-label">
              {" "}
              Province:
              <select
                name="province"
                className="input-type"
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
          </div>
          <div className="form-row">
            {formData.province && (
              <label htmlFor="district" className="input-label">
                District:{" "}
                <select
                  name="district"
                  className="input-type"
                  value={formData.district}
                  onChange={handleInputChange}
                >
                  <option value="">Select District</option>
                  {getDistricts(formData.province).map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
          <div className="form-row">
            {formData.district && (
              <label htmlFor="Municipality" className="input-label">
                Municipality:{" "}
                <select
                  name="municipality"
                  className="input-type"
                  value={formData.municipality}
                  onChange={handleInputChange}
                >
                  <option value="">Select Municipality:</option>
                  {getMunicipalities(formData.district).map((municipality) => (
                    <option key={municipality} value={municipality}>
                      {municipality}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        </div>
        <div className="contact-info">
          <div className="form-row">
            <label htmlFor="Contact" className="input-label">
              {" "}
              Contact No:
              <input
                type="tel"
                name="contact"
                id="contactno"
                className="input-type"
                placeholder="Contact No"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="Email" className="input-label">
              {" "}
              Email:
              <input
                type="email"
                name="email"
                className="input-type"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="username" className="input-label">
            {" "}
            Username:
            <input
              type="text"
              name="username"
              id="username"
              className="input-type"
              placeholder="Set Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="password">
          <div className="form-row">
            <label htmlFor="password" className="input-label">
              {" "}
              Password:
              <input
                type="password"
                name="password"
                id="password"
                className="input-type"
                placeholder="Set Password"
                formMethod="post"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="confirmpassword" className="input-label">
              {" "}
              Confirm Password:
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                className="input-type"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <button className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SingUp;
