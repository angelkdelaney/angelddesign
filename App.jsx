import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import CSUtilityReconnection from './pages/CSUtilityReconnection';
import CSFigmaDocumentationKit from './pages/CSFigmaDocumentationKit';
import CSUtilityContactNudge from './pages/CSUtilityContactNudge';
import CSPaymentPlanImprovements from './pages/CSPaymentPlanImprovements';
import CSAdaptiveAI from './pages/CSAdaptiveAI';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/cs-utility-reconnection" element={<CSUtilityReconnection />} />
        <Route path="/case-studies/cs-figma-ui-documentation-kit" element={<CSFigmaDocumentationKit />} />
        <Route path="/case-studies/cs-utility-contact-nudge" element={<CSUtilityContactNudge />} />
        <Route path="/case-studies/cs-payment-plan-improvements" element={<CSPaymentPlanImprovements />} />
        <Route path="/case-studies/cs-adaptive-ai" element={<CSAdaptiveAI />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/angelddesign">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
