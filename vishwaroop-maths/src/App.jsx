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
import ScrollToTop from "./components/ScrollToTop.jsx";
import ComingSoon    from "./pages/ComingSoon.jsx";
import ExamSchedule from "./pages/subjects/ExamSchedule.jsx";


// import PhysicsAbout from "./pages/subjects/physics/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";




function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-slate-900 font-sans">
      <ScrollToTop />
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <AboutRelay />
              <WhyParticipate />
              <RulesFormat />
              <Awards />
              <Preparation />
              <Registration />
            </main>
          }
        />

        {/* SUBJECT PAGE */}
        {/* <Route path="/subjects/physics" element={<PhysicsAbout />} /> */}

        {/* PRIVACY POLICY */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
<Route path="/subjects/maths/exam-schedule" element={<ExamSchedule />} />
<Route path="/subjects/*"                   element={<ComingSoon />} />

      </Routes>

      <ContactFooter />
    </div>
  );
}

export default App;
