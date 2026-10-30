import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Insurance() {
  usePageMeta('Business Insurance | Safe Haven Payments', 'Business insurance built around how you actually operate, quoted fast by the same team that handles your payments and payroll.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="solutions.html">Solutions</A> / Business insurance</p>
      <h1>Protecting what you built. Transparent business coverage.</h1>
      <p className="lead">Coverage that matches the business you run today, not the one you started, from a brokerage that already knows your operation.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review">Get a coverage quote</A>
        <A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A>
      </div>
      <p className="fine" style={{marginTop:'0'}}>No obligation. No impact on your credit score.</p>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <defs><linearGradient id="isky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#215f7f"/><stop offset="1" stopColor="#0f2b3f"/></linearGradient></defs>
        <rect width="500" height="400" fill="url(#isky)"/>
        <g stroke="#8fa8b8" strokeWidth="2" strokeLinecap="round" opacity=".5"><path d="M60 40l-10 30M120 20l-10 30M400 30l-10 30M450 80l-10 30M90 110l-10 30M470 160l-10 30M30 200l-10 30"/></g>
        
        <rect x="110" y="200" width="280" height="200" fill="#f3eee4"/>
        <rect x="100" y="180" width="300" height="30" rx="4" fill="#b23a3a"/>
        <g fill="#fbf8f2"><path d="M110 180h40l-12 30h-40zM190 180h40l-12 30h-40zM270 180h40l-12 30h-40zM350 180h40l-12 30h-40z"/></g>
        <rect x="140" y="240" width="80" height="120" rx="4" fill="#fff3c4"/><rect x="280" y="240" width="80" height="120" rx="4" fill="#fff3c4"/>
        <rect x="230" y="250" width="40" height="150" rx="3" fill="#0f2b3f"/><circle cx="262" cy="330" r="4" fill="#d9a441"/>
        <path d="M150 250h60M150 266h60M290 250h60M290 266h60" stroke="#d9a441" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
        
        <path d="M250 70c-110 0-160 70-160 100 20-16 40-16 60 0 20-16 40-16 60 0 20-16 40-16 60 0 20-16 40-16 60 0 20-16 40-16 60 0 20-16 40-16 60 0 0-30-50-100-160-100z" fill="#3f9e86"/>
        <path d="M250 70c-40 0-70 60-70 100 20-16 40-16 60 0 2-40 4-70 10-100z" fill="#2c7a66" opacity=".6"/>
        <path d="M250 60v10M250 170v50a14 14 0 01-28 0" stroke="#fbf8f2" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <circle cx="250" cy="58" r="6" fill="#d9a441"/>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Why Safe Haven Insurance</p><h2>A broker who starts from how you operate.</h2></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 20V9l8-5 8 5v11" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M9 20v-6h6v6" stroke="#2c7a66" strokeWidth="1.8" fill="none"/></svg></div><h3>Coverage that matches how you operate</h3><p>Business insurance built around your actual operations, not a generic template policy.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="9" cy="9" r="3.5" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><circle cx="17" cy="9" r="3" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 20c.5-4 3-6 6-6s5.5 2 6 6M14 14c3 0 5.5 2 6 6" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>One team, not a cold call center</h3><p>The same partner supporting your payments and payroll also supports your coverage, so you're never starting over with someone new.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M13 3L5 14h6l-1 7 8-11h-6z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>Fast, direct quotes</h3><p>No lengthy back and forth. Get a real quote quickly so you can make a decision and get covered.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Common coverage</p><h2>What most of our merchants ask about first.</h2><p className="lead">Every policy is placed with a carrier after underwriting. These are the lines we quote most often; if you need something else, ask.</p></div>
    <Stagger className="grid4">
      <motion.div variants={item} className="feature"><h3>General liability</h3><p>Slips, property damage and the claims that come with having customers on site.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Business owner's policy</h3><p>Liability plus property in one package, often the simplest fit for shops and offices.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Workers' compensation</h3><p>Required in most states once you hire. Pairs naturally with your payroll account.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Commercial auto</h3><p>Vehicles used for deliveries, service calls and job sites.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Professional liability</h3><p>Errors and omissions coverage for advice- and service-based businesses.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Cyber and data</h3><p>Breach response and liability, relevant to any business that stores customer data.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Commercial property</h3><p>Your building, equipment, inventory and the income you'd lose if they're out of action.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Umbrella</h3><p>Extra limits above your core policies for contracts that demand more.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">How it works</p><h2>From first call to covered.</h2></div>
    <Stagger className="timeline">
      <motion.div variants={item} className="tl"><div className="dot">1</div><h3>Tell us how you operate</h3><p>A short conversation or online form: what you do, where, with how many people and what equipment.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">2</div><h3>Get a real quote</h3><p>We shop carriers and come back with options side by side, in plain English, usually within one business day.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">3</div><h3>Bind and move on</h3><p>Pick the policy, sign, and your certificates are ready for landlords, lenders and contracts.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Ready to protect what you built?</p><h2>Get a quote in minutes, or talk it through with a specialist.</h2><p style={{margin:'0'}}>A representative will reach out within one business day.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Get my quote</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>

<Section style={{padding:'36px 0'}}>
  <div className="wrap"><p className="fine" style={{maxWidth:'60em'}}>Safe Haven Insurance is an insurance brokerage. All coverage is subject to carrier approval and underwriting. Terms, rates and coverage availability vary by carrier, policy and applicant qualifications and are provided for general information only.</p></div>
</Section>
  </>)
}
