import "./signin.css";
import { MdEmail } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import signinimg from '../../assets/signinimg.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("playerId", data.playerId);
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg("Server error. Try again.");
    }
  };

  return (
    <section className="signin-section">
      <div className="container signin-container">
        <div className="signin-left">
          <h1 className="signin-title">Welcome Back..!</h1>
          <p className="signin-subtitle">Sign-In To Your Account</p>

          <form className="signin-form" onSubmit={handleLogin}>
            <label>Email id:</label>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="icon"><MdEmail /></span>
            </div>

            <label>Password:</label>
            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="icon"><IoEyeSharp /></span>
            </div>

            {errorMsg && <p className="error-msg" style={{ color: "red", fontWeight: "500" }}>{errorMsg}</p>}

            <p className="signup-text">
  Do you have account?{" "}
  <Link to="/register">
    <span className="highlight">Signup</span>
  </Link>
</p>


            <div className="btn-div">
              <button type="submit" className="signin-btn">Sign-in</button>
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
