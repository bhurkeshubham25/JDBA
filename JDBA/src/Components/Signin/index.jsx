import "./signin.css";
import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import signinimg from '../../assets/signinimg.jpg';

const SignIn = () => {
  return (
    <section className="signin-section">
      <div className="container signin-container">
        <div className="signin-left">
          

          <h1 className="signin-title">Welcome Back..!</h1>
          <p className="signin-subtitle">Sign-In To Your Account</p>

          <form className="signin-form">
            <label>Email id:</label>
            <div className="input-box">
              <input type="email" placeholder="Enter Your Email" />
              <span className="icon"><MdEmail /></span>
            </div>

            <label>Password:</label>
            <div className="input-box">
              <input type="password" placeholder="Enter Your Password" />
              <span className="icon"><IoEyeSharp /></span>
            </div>

            <p className="signup-text">
              Do you have account? <span className="highlight">Signup</span>
            </p>

            <div className="btn-div">
              <button className="signin-btn">Sign-in</button>
            </div>
          </form>
        </div>

        <div className="signin-right">
          <img src={signinimg} alt="Badminton" />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
