import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import TeamPage from './pages/TeamPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import TattooPage from './pages/TattooPage.jsx'
import SiteSelector from './components/SiteSelector.jsx'

export default function App() {
  const [showSelector, setShowSelector] = useState(true)

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased">
      {showSelector && <SiteSelector onClose={() => setShowSelector(false)} />}
      
      <header className="backdrop-blur bg-white/60 sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/tattoo" element={<TattooPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
