import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Index from './pages/Index.jsx'
import Solutions from './pages/Solutions.jsx'
import Payments from './pages/Payments.jsx'
import Square from './pages/Square.jsx'
import Insurance from './pages/Insurance.jsx'
import Payroll from './pages/Payroll.jsx'
import Capital from './pages/Capital.jsx'
import WhoWeServe from './pages/WhoWeServe.jsx'
import Partners from './pages/Partners.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Privacy from './pages/Privacy.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="payments" element={<Payments />} />
          <Route path="square" element={<Square />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="capital" element={<Capital />} />
          <Route path="who-we-serve" element={<WhoWeServe />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
