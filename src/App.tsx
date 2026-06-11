import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Governance from './pages/Governance';
import Media from './pages/Media';
import Bfaq from './pages/bfaq';
import Aboutus from './pages/Aboutus';
import Member from './pages/Member';
import CoreValues from "./pages/CoreValues";
import StrategicGoals from './pages/StrategicGoals';
import DepositorInfo from './pages/DepositorInfo';
import Contact from './pages/Contact';
import LatestUpdates from './pages/LatestUpdates';
import Homeb from './pages/Homeb';
import ChairmanProfile from './pages/ChairmanProfile.jsx';

// --- ADDED IMPORTS FOR NEW ROUTES ---
import Faq from './pages/faq'; // General FAQ
import ProtectedDeposits from './pages/Protecteddeposits';
import DepositorVerification from './pages/DepositorVerification';
// ----------------------------------

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/homeb" element={<Homeb />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/members" element={<Member />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/chairman-profile" element={<ChairmanProfile />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/strategic-goals" element={<StrategicGoals />} />
          
          {/* Depositor Section Routes */}
          <Route path="/depositor-info" element={<DepositorInfo />} />
          <Route path="/protected-deposits" element={<ProtectedDeposits />} />
          <Route path="/depositor-verification" element={<DepositorVerification />} />
          
          {/* FAQ Routes */}
          <Route path="/dfaq" element={<Faq />} /> {/* General FAQ */}
          <Route path="/bfaq" element={<Bfaq />} /> {/* Reference/Bank FAQ */}
          
          {/* ✅ FIXED: Added the closing bracket here */}
          <Route path="/media" element={<Media />} />
          <Route path="/latestupdates" element={<LatestUpdates />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
