import "./dashfooter.css"
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Dashfooter = () => {
const location = useLocation();

  return (
    <div>
      <footer className="dashfooter">
      <div className="container dashfooter-inner">
        <div className="dashfooter-section dashfooter-left">
          <div className="dashfooter-left-top">
            <div className="dashfooter-logo-container">
              <img src={logo} alt="JDBA Logo" className="dashfooter-logo" />
            </div>
            <div className="dashfooter-text-block">
              <h2>
                <span className="highlight">Jalgaon District Badminton</span><br />
                <span className="centered-word">Association</span>
              </h2>
              <p className="dashfooter-description">
                JDBA is dedicated to the promotion<br />
                <span className="centered-line">of badminton to all levels</span>
              </p>
            </div>
          </div>
        </div>

        <div className="dashfooter-section dashfooter-links">
          <h3>Quick Links</h3>
          <ul>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About us" },
              { to: "/dashboard", label: "User Dashboard" },
              { to: "/tournament-entry", label: "Tournament Entry" },
              { to: "/tournament-withdrawal", label: "Touurnament Withdrawal" },
              { to: "/my-entries", label: "My Entries" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`dashfooter-link ${location.pathname === to ? "active" : ""}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashfooter-section dashfooter-contact">
          <h3>Contact Us</h3>
          <p>Email : jdbasso.in</p>
          <p>Phone no : +91 89767915555</p>
          <p>
            Address : Badminton Lane<br />
         <span style={{paddingLeft:"20px"}}>Jalgaon Maharastra</span>   
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Dashfooter;
