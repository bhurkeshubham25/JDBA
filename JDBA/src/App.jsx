import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signinpage from './Pages/Signinpage';
import Aboutpage from './Pages/Aboutpage';
import Registration from './Components/RegistrationForm/registration';
import Dashboard from './Components/Dashboard';
import MyEntries from './Components/Myentry';
import TournamentEntry from './Components/Tournamententry';

import Vision from './Components/Vision';
import About from './Components/About';
import Carousel from './Components/carousel';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import Sponsors from './Components/Sponsors';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route element={<PublicLayout />}>
          <Route path="/" element={
            <>
              <Vision />
              <About />
              <Carousel />
              <Tournaments />
              <BadmintonBasics />
              <Sponsors />
            </>
          } />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/fqa" element={<div style={{ padding: '2rem' }}><h2>FQA Page Placeholder</h2></div>} />
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/register" element={<Registration />} />
        </Route>

       
        <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-entries" element={<MyEntries />} />
          <Route path="/tournament-entry" element={<TournamentEntry />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
