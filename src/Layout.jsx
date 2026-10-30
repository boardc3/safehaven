import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { scrollToHash } from './ui.jsx'

function Logo({ dark }) {
  return (
    <Link className="logo" to="/" aria-label="Safe Haven Payments home">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 3 5 10v10c0 9 6.5 15 15 17 8.5-2 15-8 15-17V10L20 3z" fill={dark ? 'rgba(255,255,255,.15)' : '#0f2b3f'} />
        <path d="M20 7.5 9 12.8v7.4c0 6.7 4.7 11.4 11 13.2 6.3-1.8 11-6.5 11-13.2v-7.4L20 7.5z" fill={dark ? 'rgba(255,255,255,.1)' : '#174a66'} />
        <path d="M13 23c2.4-1.6 4.6-1.6 7 0s4.6 1.6 7 0" stroke="#3f9e86" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M13 18.5c2.4-1.6 4.6-1.6 7 0s4.6 1.6 7 0" stroke="#d9a441" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
      <span className="word">Safe Haven<small>PAYMENTS</small></span>
    </Link>
  )
}

const NAV = [['/solutions', 'Solutions'], ['/who-we-serve', 'Who we serve'], ['/partners', 'Partners'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Layout() {
  const loc = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 })

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8)
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])

  // scroll handling on route change: hash → element, else top
  useEffect(() => {
    setOpen(false)
    if (loc.hash) {
      let tries = 0
      const t = setInterval(() => { if (scrollToHash(loc.hash, 'auto') || ++tries > 20) clearInterval(t) }, 40)
      return () => clearInterval(t)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [loc.pathname, loc.hash])

  const active = p => loc.pathname === p || (p !== '/' && loc.pathname.startsWith(p + '/')) || (p === '/solutions' && ['/payments', '/square', '/insurance', '/payroll', '/capital'].includes(loc.pathname))

  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <div className="util">
      <div className="wrap">
        <div>Talk to a real person: <a href="tel:+18668088183">(866) 808-8183</a> <span className="hours">&nbsp;·&nbsp; Mon–Fri 8–5, Sat 8–12</span></div>
        <div className="links"><Link to="/login">Merchant login</Link><Link to="/login#partner">Partner login</Link></div>
      </div>
    </div>

    <header className={'site' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap">
        <Logo />
        <nav className={'main' + (open ? ' open' : '')} id="nav" aria-label="Main">
          <ul>
            {NAV.map(([to, l]) => <li key={to}><Link to={to} aria-current={active(to) ? 'page' : undefined}>{l}</Link></li>)}
          </ul>
        </nav>
        <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
        <div className="hdr-cta">
          <a className="btn btn-outline call" href="tel:+18668088183">Call us</a>
          <Link className="btn btn-primary" to="/contact#review">Free statement review</Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}>{open ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>

    <main id="main">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={loc.pathname}
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.995 }} animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] } }}
          exit={reduce ? undefined : { opacity: 0, y: -16, transition: { duration: 0.25 } }}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </main>

    <footer>
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo dark />
            <p style={{ marginTop: 18, maxWidth: '30em' }}>We start with how your business actually runs, then match the solution to it. If something doesn't fit, we won't push it.</p>
          </div>
          <div><h4>Solutions</h4><ul>
            <li><Link to="/payments">Payment processing</Link></li><li><Link to="/square">Square</Link></li>
            <li><Link to="/insurance">Insurance</Link></li><li><Link to="/payroll">Payroll &amp; benefits</Link></li>
            <li><Link to="/capital">Capital</Link></li><li><Link to="/solutions#membership">SHP membership</Link></li></ul></div>
          <div><h4>Company</h4><ul>
            <li><Link to="/about">Our story</Link></li><li><Link to="/who-we-serve">Who we serve</Link></li><li><Link to="/partners">Partner with us</Link></li>
            <li><Link to="/careers">Careers</Link></li><li><Link to="/contact">Contact</Link></li></ul></div>
          <div><h4>Contact</h4><ul>
            <li><a href="tel:+18668088183">(866) 808-8183</a></li><li><a href="mailto:support@safehavenpayments.com">support@safehavenpayments.com</a></li>
            <li>Mon–Fri 8–5, Sat 8–12</li>
            <li><Link to="/login">Merchant login</Link> &nbsp;/&nbsp; <Link to="/login#partner">Partner login</Link></li></ul></div>
        </div>
        <div className="base"><span>© 2026 Safe Haven Payments. All rights reserved.</span><span><Link to="/privacy">Privacy policy</Link> &nbsp;/&nbsp; <Link to="/contact#help">Get help</Link></span></div>
      </div>
    </footer>

    <div className="mbar" aria-label="Quick actions">
      <a className="btn btn-outline" href="tel:+18668088183">Call</a>
      <Link className="btn btn-glass" to="/contact#review">Free review</Link>
    </div>
  </>)
}
