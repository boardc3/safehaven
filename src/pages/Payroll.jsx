import { A, Section, Stagger, item, usePageMeta, H2, Tilt, Parallax, Marquee } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'
import { PayrollEstimate } from '../components.jsx'

export default function Payroll() {
  usePageMeta('Payroll & Benefits | Safe Haven Payments', 'Payroll that runs in sync with your payments. Automated federal, state and local tax filing, benefits for employees and contractors, and one team behind it.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="solutions.html">Solutions</A> / Payroll &amp; benefits</p>
      <H2 as="h1">Payroll that doesn't compete with your cash flow.</H2>
      <p className="lead">Payroll is non-negotiable. Safe Haven Payroll keeps it simple, accurate, and in sync with the rest of your financial tools, so payday never depends on which invoices came in.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review?need=payroll">Get a payroll quote</A>
        <A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A>
      </div>
      <p className="fine" style={{marginTop:'0'}}>No obligation. No impact on your credit score.</p>
    </div>
    <Tilt className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <defs><linearGradient id="pbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#174a66"/><stop offset="1" stopColor="#0f2b3f"/></linearGradient></defs>
        <rect width="500" height="400" fill="url(#pbg)"/>
        
        <rect x="60" y="70" width="230" height="250" rx="16" fill="#fbf8f2"/>
        <rect x="60" y="70" width="230" height="54" rx="16" fill="#3f9e86"/><rect x="60" y="100" width="230" height="24" fill="#3f9e86"/>
        <text x="175" y="105" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="18" fill="#fff">OCTOBER</text>
        <g fill="#e4dfd4">
          <rect x="80" y="142" width="26" height="22" rx="4"/><rect x="116" y="142" width="26" height="22" rx="4"/><rect x="152" y="142" width="26" height="22" rx="4"/><rect x="188" y="142" width="26" height="22" rx="4"/><rect x="224" y="142" width="26" height="22" rx="4"/>
          <rect x="80" y="176" width="26" height="22" rx="4"/><rect x="116" y="176" width="26" height="22" rx="4"/><rect x="152" y="176" width="26" height="22" rx="4"/><rect x="188" y="176" width="26" height="22" rx="4"/><rect x="224" y="176" width="26" height="22" rx="4"/>
          <rect x="80" y="210" width="26" height="22" rx="4"/><rect x="116" y="210" width="26" height="22" rx="4"/><rect x="152" y="210" width="26" height="22" rx="4"/><rect x="188" y="210" width="26" height="22" rx="4"/><rect x="224" y="210" width="26" height="22" rx="4"/>
          <rect x="80" y="244" width="26" height="22" rx="4"/><rect x="116" y="244" width="26" height="22" rx="4"/><rect x="152" y="244" width="26" height="22" rx="4"/><rect x="188" y="244" width="26" height="22" rx="4"/><rect x="224" y="244" width="26" height="22" rx="4"/>
          <rect x="80" y="278" width="26" height="22" rx="4"/><rect x="116" y="278" width="26" height="22" rx="4"/>
        </g>
        <g fill="#d9a441"><rect x="224" y="176" width="26" height="22" rx="4"/><rect x="224" y="244" width="26" height="22" rx="4"/></g>
        <g stroke="#0f2b3f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M230 187l5 5 10-10"/><path d="M230 255l5 5 10-10"/></g>
        
        <g transform="translate(300 180) rotate(6)">
          <rect x="0" y="0" width="170" height="90" rx="10" fill="#fff"/>
          <rect x="0" y="0" width="170" height="22" rx="10" fill="#d9a441"/><rect x="0" y="12" width="170" height="10" fill="#d9a441"/>
          <path d="M16 42h70M16 58h100M16 74h50" stroke="#d3ccbe" strokeWidth="5" strokeLinecap="round"/>
          <text x="154" y="78" textAnchor="end" fontFamily="Fraunces" fontSize="18" fill="#2c7a66">$2,140</text>
        </g>
        <g transform="translate(316 262) rotate(6)">
          <rect x="0" y="0" width="170" height="90" rx="10" fill="#fff" opacity=".85"/>
          <rect x="0" y="0" width="170" height="22" rx="10" fill="#3f9e86"/><rect x="0" y="12" width="170" height="10" fill="#3f9e86"/>
          <path d="M16 42h70M16 58h100M16 74h50" stroke="#d3ccbe" strokeWidth="5" strokeLinecap="round"/>
        </g>
        
        <circle cx="300" cy="100" r="40" fill="#3f9e86"/><path d="M284 100a16 16 0 0130-7M316 100a16 16 0 01-30 7" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/><path d="M314 88l1 7-7 1M286 112l-1-7 7-1" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Tilt>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="pair">
      <div className="problem">
        <h3>The challenges we solve</h3>
        <ul>
          <li><b>Payroll timing pressure</b><span>Payroll deadlines don't wait for outstanding receivables to come in.</span></li>
          <li><b>Manual tax filing headaches</b><span>Staying current on federal, state and local payroll tax filings is time-consuming and easy to get wrong.</span></li>
          <li><b>Disconnected systems</b><span>Running payroll separately from your payment processing means duplicate data entry and more room for error.</span></li>
        </ul>
      </div>
      <div className="fix">
        <h3>Why Safe Haven Payroll</h3>
        <ul>
          <li><b>Synced with your payments</b><span>Payroll runs off the same financial ecosystem as your processing, so your numbers stay consistent.</span></li>
          <li><b>Automated tax filing</b><span>Federal, state and local filings handled automatically, with deadlines tracked for you.</span></li>
          <li><b>One login, one partner</b><span>No juggling multiple vendors for payroll, benefits and payments.</span></li>
        </ul>
      </div>
    </div>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">What's included</p><H2>Everything payday needs, and nothing you have to chase.</H2></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="9" cy="8" r="3.5" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 20c.5-4 3-6 6-6s5.5 2 6 6" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/><path d="M16 8h5M16 12h5" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Employees and contractors</h3><p>W-2 and 1099 workers in one run. Direct deposit, paper checks or pay cards, their choice.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Tax filing and year-end</h3><p>Quarterly filings, deposits, W-2s and 1099s prepared and filed. You get a copy; the agencies get theirs.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>Benefits</h3><p>Health, retirement and the employee savings app, offered through the same account with no extra vendor.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M12 7v5l3 2" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>Time and PTO tracking</h3><p>Hours, overtime and time off flow straight into the run, so nobody re-keys a timesheet.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 18l6-6 4 4 6-8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Bridge when cash is tight</h3><p>Payroll due before receivables land? <A href="capital.html" style={{margin:'0'}}>Working capital</A> from the same team closes the gap.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>A person who knows your account</h3><p>Setup, first run and every question after go to the same team that handles your payments.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">What manual payroll costs you</p>
      <H2>Count the hours, not just the fees.</H2>
      <p className="lead">Most owners underestimate how much time payroll takes once you add tax deposits, filings, corrections and year-end. Put your numbers in to see the rough picture.</p>
    </div>
    <PayrollEstimate />
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Get a payroll quote</p><H2>Tell us your headcount. We'll tell you the price.</H2><p style={{margin:'0'}}>No obligation and no impact on your credit score. A real person follows up, usually by the next business day.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Talk to us about payroll</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
