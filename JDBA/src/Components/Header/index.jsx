import "./header.css";
import logo from '../../assets/logo.png';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {


  return (
     <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <img src={logo} alt="JDBA Logo" className="logo" />
            <h1 className="title">Jalgaon District Badminton Association</h1>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#faq">FQA</a>
            <div className='icon'><FaUserCircle className="user-icon" /></div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
