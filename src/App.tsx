/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GraphicDesign from './pages/GraphicDesign';
import VideoProduction from './pages/VideoProduction';
import HologramFan from './pages/HologramFan';
import Packages from './pages/Packages';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ContactModal from './components/ContactModal';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ContactModal />
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/video-production" element={<VideoProduction />} />
            <Route path="/hologram-fan" element={<HologramFan />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
