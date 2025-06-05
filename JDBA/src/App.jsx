import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Vision from './Components/Vision';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import Sponsors from './Components/Sponsors';
import SignIn from './Components/Signin';

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
              <Tournaments />
              <BadmintonBasics />
              <Sponsors />
              <SignIn></SignIn>
            </>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/fqa" element={<div style={{ padding: '2rem' }}><h2>FQA Page Placeholder</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
