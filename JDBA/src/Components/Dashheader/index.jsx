import "./dashheader.css"
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Dashhead = () => {
 const location = useLocation();  
    
  return (
    <header className="dashheader">
      <div className="container">
        <div className="dashheader-inner">
          <div className="dashheader-left">
            <img src={logo} alt="JDBA Logo" className="logo" />
            <h1 className="title">Jalgaon District Badminton Association</h1>
          </div>
          <nav className="dashnav">
            <Link 
              to="/" 
              className={`dashnav-link ${location.pathname === "/" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className={`dashnav-link ${location.pathname === "/about" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Tournament Entry
            </Link>
            <Link 
              to="/fqa" 
              className={`dashnav-link ${location.pathname === "/fqa" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              Tournament Withdrawal
            </Link>
             <Link 
              to="/fqa" 
              className={`dashnav-link ${location.pathname === "/fqa" ? "active" : ""}`} 
              onClick={() => window.scrollTo(0, 0)}
            >
              My Entries
            </Link>
            
            <button className="dashbutton">
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Dashhead;
