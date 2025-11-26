import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell'
import LandingPage from './pages/LandingPage'
import MotivationPage from './pages/MotivationPage'
import TerapakSolutionsPage from './pages/TerapakSolutionsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root shows motivation page */}
        <Route path="/" element={<MotivationPage />} />
        
        {/* Features/capabilities page */}
        <Route path="/explore" element={<LandingPage />} />
        
        {/* App pages (with AppShell) */}
        <Route path="/app" element={<AppShell />}>
          <Route path="seoplatform" element={<MotivationPage />} />
          <Route path="terapak-solutions" element={<TerapakSolutionsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        {/* Default redirect */}
        <Route path="/app" element={<Navigate to="/app/seoplatform" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
