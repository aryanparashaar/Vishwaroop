import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutRelay from "./sections/AboutRelay.jsx";
import WhyParticipate from "./sections/WhyParticipate.jsx";
import RulesFormat from "./sections/RulesFormat.jsx";
import Awards from "./sections/Awards.jsx";
import Preparation from "./sections/Preparation.jsx";
import Registration from "./sections/Registration.jsx";
import ContactFooter from "./sections/ContactFooter.jsx";

// SUBJECT PAGES
import PhysicsAbout from "./pages/subjects/physics/About";

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-slate-900 font-sans">
      <Navbar />

      
        {/* HOME PAGE */}
        <main>
          <Hero />
          <AboutRelay />
          <WhyParticipate />
          <RulesFormat />
          <Awards />
          <Preparation />
          <Registration />
        </main>
        {/* SUBJECT PAGE */}
        <Routes>
        <Route path="/subjects/physics" element={<PhysicsAbout />} />
      </Routes>

      <ContactFooter />
    </div>
  );
}

export default App;
