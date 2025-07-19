import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

// Pages
import Signinpage from './Pages/Signinpage';
import Aboutpage from './Pages/Aboutpage';
import Registration from './Components/RegistrationForm/registration';
import Dashboard from './Components/Dashboard';
import MyEntries from './Components/Myentry';
import TournamentEntry from './Components/Tournamententry';

// Public Layout Sections
import Vision from './Components/Vision';
import About from './Components/About';
import Carousel from './Components/carousel';
import Tournaments from './Components/Tournaments';
import BadmintonBasics from './Components/Badmintonbasic';
import Sponsors from './Components/Sponsors';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <PublicLayout>
            <Vision />
            <About />
            <Carousel />
            <Tournaments />
            <BadmintonBasics />
            <Sponsors />
          </PublicLayout>
        } />
        <Route path="/about" element={<PublicLayout><Aboutpage /></PublicLayout>} />
        <Route path="/fqa" element={<PublicLayout><div style={{ padding: '2rem' }}><h2>FQA Page Placeholder</h2></div></PublicLayout>} />
        <Route path="/signin" element={<PublicLayout><Signinpage /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Registration /></PublicLayout>} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardLayout><Dashboard /></DashboardLayout>
          </PrivateRoute>
        } />

        <Route path="/my-entries" element={
          <PrivateRoute>
            <DashboardLayout><MyEntries /></DashboardLayout>
          </PrivateRoute>
        } />

        <Route path="/tournament-entry" element={
          <PrivateRoute>
            <DashboardLayout><TournamentEntry /></DashboardLayout>
          </PrivateRoute>
        } />

        {/* You can add TournamentWithdrawal and others similarly */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
