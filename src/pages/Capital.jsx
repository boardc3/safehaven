import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Capital() {
  usePageMeta('Safe Haven Capital | Working Capital for Growing Businesses', 'Working capital, term loans, lines of credit, SBA loans and equipment financing from a deep lender network. One application, competing offers, plain-English terms.')
  return (<>
<Section className="page-hero dark">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="solutions.html">Solutions</A> / Capital</p>
      <h1>Working capital for the business you're building.</h1>
      <p className="lead">Safe Haven Capital connects small business owners with the funding they need to steady cash flow, seize opportunities and grow with confidence, drawing on a deep network of banks, private lenders and institutional partners.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review">Apply now</A>
        <A className="btn btn-outline" href="tel:+18668088183">Talk to a specialist</A>
      </div>
      <p className="fine" style={{marginTop:'0',color:'#8fa8b8'}}>Call (866) 808-8183 or apply online. A funding specialist will reach out within one business day.</p>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <rect width="500" height="400" fill="#fbf8f2"/>
        <path d="M0 400V300c80-20 120-90 180-100s90 40 150 20 80-100 170-120v300z" fill="#e6f4ef"/>
        
        <g>
          <rect x="70" y="260" width="50" height="110" rx="8" fill="#d3ccbe"/>
          <rect x="150" y="220" width="50" height="150" rx="8" fill="#d3ccbe"/>
          <rect x="230" y="170" width="50" height="200" rx="8" fill="#3f9e86"/>
          <rect x="310" y="120" width="50" height="250" rx="8" fill="#3f9e86"/>
          <rect x="390" y="60" width="50" height="310" rx="8" fill="#174a66"/>
        </g>
        <path d="M95 240 175 200 255 150 335 100 415 40" stroke="#d9a441" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <g fill="#fff" stroke="#d9a441" strokeWidth="5"><circle cx="95" cy="240" r="9"/><circle cx="175" cy="200" r="9"/><circle cx="255" cy="150" r="9"/><circle cx="335" cy="100" r="9"/><circle cx="415" cy="40" r="9"/></g>
        
        <g transform="translate(60 40)"><ellipse cx="40" cy="40" rx="40" ry="14" fill="#d9a441"/><rect x="0" y="20" width="80" height="20" fill="#d9a441"/><ellipse cx="40" cy="20" rx="40" ry="14" fill="#f0c66a"/><text x="40" y="26" textAnchor="middle" fontFamily="Fraunces" fontSize="16" fill="#8b6336">$</text></g>
        <g transform="translate(60 60)"><ellipse cx="40" cy="40" rx="40" ry="14" fill="#c9922f"/><rect x="0" y="20" width="80" height="20" fill="#c9922f"/></g>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Why Safe Haven Capital</p><h2>A safer route to the right funding.</h2><p className="lead">We do more than shop your file. We package it, position it and put it in front of the lenders most likely to say yes.</p></div>
    <Stagger className="grid4">
      <motion.div variants={item} className="feature"><h3>A trusted advisor</h3><p>Straight answers and transparent terms from a team that treats your business like its own.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Deep lender network</h3><p>Established relationships with banks, hedge funds, insurers and private investors nationwide.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Every funding tool</h3><p>From working capital to SBA loans, we combine products to fit the deal, not force the deal to fit a product.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Higher approval odds</h3><p>Expert packaging and competitive shopping mean more approvals, including the difficult deals.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt" id="programs">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Financing solutions</p><h2>Funding built around your business.</h2><p className="lead">Five core programs, one goal: getting you the capital you need on terms that make sense.</p></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 18l6-6 4 4 6-8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Working capital</h3><p>Smooth out cash flow, cover payroll or fund the next stage of growth with fast, flexible capital.</p><A href="contact.html#review">Explore working capital</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="5" width="18" height="16" rx="3" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 10h18M8 3v4M16 3v4" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Term loans</h3><p>Predictable payments over a set term, with flexible structures including interest-only options.</p><A href="contact.html#review">Explore term loans</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 12a8 8 0 1016 0 8 8 0 00-16 0z" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M12 8v8M8 12h8" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Business lines of credit</h3><p>Revolving, asset-based credit you can draw on when you need it, and pay for only what you use.</p><A href="contact.html#review">Explore lines of credit</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 20V9l8-5 8 5v11" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M9 20v-6h6v6" stroke="#2c7a66" strokeWidth="1.8" fill="none"/></svg></div><h3>SBA loans</h3><p>Government-backed financing for expansion, commercial real estate, refinancing and more.</p><A href="contact.html#review">Explore SBA loans</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="7" width="18" height="12" rx="2" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M7 7V5h10v2M8 19v2M16 19v2" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Equipment financing</h3><p>Acquire the machinery and technology your business runs on, without draining your reserves.</p><A href="contact.html#review">Explore equipment financing</A></motion.div>
      <motion.div variants={item} className="feature" style={{background:'var(--harbor)',color:'#c6d5e0',borderColor:'var(--harbor)'}}><h3 style={{color:'#fff'}}>Not sure which fits?</h3><p style={{color:'#c6d5e0'}}>Tell us about your business and goals, and a funding specialist will map the options, often more than one.</p><A href="contact.html#review" style={{color:'#8fd4bf'}}>Get a free consultation</A></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">How it works</p><h2>From application to funding in three steps.</h2></div>
    <Stagger className="timeline">
      <motion.div variants={item} className="tl"><div className="dot">1</div><h3>Apply in minutes</h3><p>Complete a short application online or over the phone. Minimal documentation to get started. No cost, no obligation.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">2</div><h3>Review your options</h3><p>A specialist packages your file, shops our lender network and walks you through the offers side by side.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">3</div><h3>Get funded</h3><p>Choose the terms that work for you. Many programs fund within days of approval, some in as little as 24 to 48 hours.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt">
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">The Safe Haven difference</p>
      <h2>We get the difficult deals done.</h2>
      <p className="lead">Banks say no for a hundred reasons that have nothing to do with the strength of your business. We look past checkbox underwriting: packaging your file properly, matching it to the right lenders and combining products when a single loan won't cover the need.</p>
      <ul className="chk"><li>One application, multiple competing funding sources</li><li>Options for newer businesses and imperfect credit</li><li>No hidden fees. Terms explained in plain English</li><li>A dedicated specialist from first call to funding</li></ul>
    </div>
    <Stagger className="stats" style={{gridTemplateColumns:'1fr'}}>
      <motion.div variants={item} className="stat"><b>20+ years</b><span>of combined small business lending experience on our team</span></motion.div>
      <motion.div variants={item} className="stat"><b>5 programs</b><span>that can be combined and structured to fit your deal</span></motion.div>
      <motion.div variants={item} className="stat"><b>24–48 hrs</b><span>typical approval window for working capital requests</span></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">Referral program</p>
      <h2>Know someone who needs funding?</h2>
      <p className="lead">Accountants, brokers, consultants and connectors of every kind partner with Safe Haven Capital to create a new income stream. You make the introduction; we handle everything else, discreetly and professionally, and you get paid when their deals fund, across our entire product line.</p>
      <A className="btn btn-primary" href="partners.html">Learn about referrals</A>
    </div>
    <div className="card" style={{background:'var(--paper-2)'}}>
      <h3>Ready to secure your funding?</h3>
      <p style={{color:'var(--ink-2)'}}>Apply online in minutes, or call and talk through your options with a funding specialist. A representative will reach out within one business day.</p>
      <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}><A className="btn btn-glass" href="contact.html#review">Apply now</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
    </div>
  </div>
</Section>
  </>)
}
