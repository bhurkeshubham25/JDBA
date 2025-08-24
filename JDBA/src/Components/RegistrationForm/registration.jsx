import "./registration.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaAddressCard,
  FaIdCard,
  FaChevronDown,
} from "react-icons/fa";

import registrationimg from "../../assets/registrationimg.jpg";
import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    bai_id: "", 
    mba_id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    dob: "",
    mobile_number: "",
    address: "",
    aadhar_number: "",
    password: "123456",
  });

  const [aadharImage, setAadharImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    if (aadharImage) form.append("aadhar_card_image", aadharImage);
    if (profileImage) form.append("profile_image", profileImage);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Registered successfully!");
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="container register-wrapper">
      <div className="register-left">
        <img src={registrationimg} alt="Registration Visual" />
      </div>

      <div className="register-right">
        <h2>Create Your Account</h2>
        <p>Sign up to access member benefits, events & resources.</p>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* BAI ID Select */}
          <div className="input-wrapper input-icon">
            <label>Do You Have BAI ID</label>
            <div className="select-wrapper">
              <select
                name="bai_id"
                value={formData.bai_id}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Yes Or No
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <FaChevronDown className="icon dropdown-icon" />
            </div>
          </div>

          {/* MBA ID */}
          <div className="input-wrapper input-icon">
            <label>MBA ID</label>
            <input
              type="text"
              name="mba_id"
              placeholder="Enter Your MBA ID"
              value={formData.mba_id}
              onChange={handleChange}
            />
            <FaIdCard className="icon" />
          </div>

          {/* Email */}
          <div className="input-wrapper input-icon">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FaEnvelope className="icon" />
          </div>

          {/* First Name */}
          <div className="input-wrapper input-icon">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter Your First Name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <FaUser className="icon" />
          </div>

          {/* Middle Name */}
          <div className="input-wrapper input-icon">
            <label>Middle Name</label>
            <input
              type="text"
              name="middle_name"
              placeholder="Enter Your Middle Name"
              value={formData.middle_name}
              onChange={handleChange}
            />
            <FaUser className="icon" />
          </div>

          {/* Last Name */}
          <div className="input-wrapper input-icon">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Your Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <FaUser className="icon" />
          </div>

          {/* Gender */}
          <div className="input-wrapper input-icon">
            <label>Gender</label>
            <div className="select-wrapper">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <FaChevronDown className="icon dropdown-icon" />
            </div>
          </div>

          {/* DOB */}
          <div className="input-wrapper input-icon">
            <label>Date of Birth</label>
            <div className="input-date-wrapper" style={{ position: "relative" }}>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              <FaBirthdayCake className="date-icon" />
            </div>
          </div>

          {/* Mobile No */}
          <div className="input-wrapper input-icon">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobile_number"
              placeholder="Enter Your Mobile No"
              value={formData.mobile_number}
              onChange={handleChange}
            />
            <FaPhone className="icon" />
          </div>

          {/* Address */}
          <div className="input-wrapper input-icon">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
            />
            <FaAddressCard className="icon" />
          </div>

          {/* Aadhar No */}
          <div className="input-wrapper input-icon">
            <label>Aadhar Card Number</label>
            <input
              type="text"
              name="aadhar_number"
              placeholder="Enter Your Aadhar No"
              value={formData.aadhar_number}
              onChange={handleChange}
            />
            <FaIdCard className="icon" />
          </div>

          {/* Aadhar Image */}
          <div className="input-wrapper">
            <label>Aadhar Card Colour Photo (Max 2MB)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAadharImage(e.target.files[0])}
            />
          </div>

          {/* Profile Photo */}
          <div className="input-wrapper">
            <label>Colour Photo (Max 2MB)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>

          {message && <p style={{ color: "orange", fontWeight: 600 }}>{message}</p>}

          <div className="btn-div" style={{marginTop:"10px"}}>
            <button type="submit" className="signin-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
