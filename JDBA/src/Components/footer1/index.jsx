import "./footer1.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer1 = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-section footer-left">
          <div className="footer-left-top">
            <div className="footer-logo-container">
              <img src={logo} alt="JDBA Logo" className="footer-logo" />
            </div>
            <div className="footer-text-block">
              <h2>
                <span className="highlight">Jalgaon District Badminton</span><br />
                <span className="centered-word">Association</span>
              </h2>
              <p className="footer-description">
                JDBA is dedicated to the promotion<br />
                <span className="centered-line">of badminton to all levels</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About us" },
              { to: "/tournament-info", label: "Tournament Info" },
              { to: "/badminton-basics", label: "Badminton Basics" },
              { to: "/news-blogs", label: "News & blogs" },
              { to: "/other-badminton-association", label: "Other Badminton Association" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`footer-link ${location.pathname === to ? "active" : ""}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email : jdbasso.in</p>
          <p>Phone no : +91 89767915555</p>
          <p>
            Address : Badminton Lane<br />
         <span style={{paddingLeft:"20px"}}>Jalgaon Maharashtra</span>   
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
