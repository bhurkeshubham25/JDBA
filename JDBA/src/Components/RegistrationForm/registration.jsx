import "./registration.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaAddressCard,
  FaIdCard,
  FaChevronDown
} from "react-icons/fa";

import registrationimg from "../../assets/registrationimg.jpg";

const RegistrationForm = () => {
  return (
    <div className="container register-wrapper">
      <div className="register-left">
        <img src={registrationimg} alt="Registration Visual" />
      </div>

      <div className="register-right">
        <h2>Create Your Account</h2>
        <p>Sign up to access member benefits, events & resources.</p>

        <form className="register-form">
          {/* BAI ID Select */}
          <div className="input-wrapper input-icon">
            <label>Do You Have BAI ID</label>
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>Select Yes Or No</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <FaChevronDown className="icon dropdown-icon" />
            </div>
          </div>

          {/* MBA ID */}
          <div className="input-wrapper input-icon">
            <label>MBA ID</label>
            <input type="text" placeholder="Enter Your MBA ID" />
            <FaIdCard className="icon" />
          </div>

          {/* Email */}
          <div className="input-wrapper input-icon">
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
            <FaEnvelope className="icon" />
          </div>

          {/* First Name */}
          <div className="input-wrapper input-icon">
            <label>First Name</label>
            <input type="text" placeholder="Enter Your First Name" />
            <FaUser className="icon" />
          </div>

          {/* Middle Name */}
          <div className="input-wrapper input-icon">
            <label>Middle Name</label>
            <input type="text" placeholder="Enter Your Middle Name" />
            <FaUser className="icon" />
          </div>

          {/* Last Name */}
          <div className="input-wrapper input-icon">
            <label>Last Name</label>
            <input type="text" placeholder="Enter Your Last Name" />
            <FaUser className="icon" />
          </div>

          {/* Gender */}
          <div className="input-wrapper input-icon">
            <label>Gender</label>
            <div className="select-wrapper">
              <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <FaChevronDown className="icon dropdown-icon" />
            </div>
          </div>

          {/* DOB */}
          {/* DOB */}
<div className="input-wrapper input-icon">
  <label>Date of Birth</label>
  <div className="input-date-wrapper" style={{ position: "relative" }}>
    <input
      type="date"
      onClick={(e) => e.target.showPicker && e.target.showPicker()}
      
    />
    <FaBirthdayCake
      className="date-icon"
      onClick={(e) =>
        e.target.previousSibling?.showPicker && e.target.previousSibling.showPicker()
      }
      style={{ pointerEvents: "auto", cursor: "pointer" }}
    />
  </div>
</div>


          {/* Mobile No */}
          <div className="input-wrapper input-icon">
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter Your Mobile No" />
            <FaPhone className="icon" />
          </div>

          {/* Address */}
          <div className="input-wrapper input-icon">
            <label>Address</label>
            <input type="text" placeholder="Enter Your Address" />
            <FaAddressCard className="icon" />
          </div>

          {/* Aadhar No */}
          <div className="input-wrapper input-icon">
            <label>Aadhar Card Number</label>
            <input type="text" placeholder="Enter Your Aadhar No" />
            <FaIdCard className="icon" />
          </div>

          {/* Aadhar Image */}
          <div className="input-wrapper">
            <label>Aadhar Card Colour Photo (Max 2MB)</label>
            <input type="file" accept="image/*" />
          </div>

          {/* Profile Photo */}
          <div className="input-wrapper">
            <label>Colour Photo (Max 2MB)</label>
            <input type="file" accept="image/*" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
