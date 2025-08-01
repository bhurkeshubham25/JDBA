import "./header.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Marquee from "../Marquee";

const Header = () => {
const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <img src={logo} alt="JDBA Logo" className="logo" />
            <h1 className="title">Jalgaon District Badminton Association</h1>
          </div>
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              About us
            </Link>
            <Link 
              to="/fqa" 
              className={`nav-link ${location.pathname === "/fqa" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              FQA
            </Link>
           <Link
  to="/signin"
  className="button"
  onClick={() => window.scrollTo(0, 0)}
>
  Sign In
  <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      clipRule="evenodd"
    />
  </svg>
</Link>

          </nav>
        </div>
      </div>
      <Marquee></Marquee>
    </header>
  );
};

export default Header;
