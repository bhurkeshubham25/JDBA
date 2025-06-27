import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Vision from './Components/Vision';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import Sponsors from './Components/Sponsors';
import SignIn from './Components/Signin';
import Carousel from './Components/carousel';
import Footer1 from './Components/footer1';
import Registration from './Components/RegistrationForm/registration';
import Dashhead from './Components/Dashheader';
import Dashboard from './Components/Dashboard';
import Dashfooter from './Components/Dashfooter';
import TournamentEntry from './Components/Tournamententry';
import MyEntries from './Components/Myentry';
import BadmintonAssociations from './Components/Other';
import Signinpage from './Pages/Signinpage';
import Aboutpage from './Pages/Aboutpage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Vision />
              <About />
              <Carousel></Carousel>
              <Tournaments />
              <BadmintonBasics />
              <Sponsors />
              
            </>
          } 
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/fqa" element={<div style={{ padding: '2rem' }}><h2>FQA Page Placeholder</h2></div>} />
        <Route path="/signin" element={<Signinpage />} />
      </Routes>
      <Footer1></Footer1>
    </BrowserRouter>
  );
}

export default App;
