import { A, Section, Stagger, item, usePageMeta, H2, Tilt, Parallax, Marquee } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  usePageMeta('About Us | Safe Haven Payments', "Safe Haven began with statement reviews at kitchen tables and shop counters. Today we're one team behind every solution, still showing our work and only recommending what fits.")
  return (<>
<Section className="page-hero dark">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="index.html">Home</A> / About</p>
      <H2 as="h1">Built by people who kept hearing the same thing.</H2>
      <p className="lead">Safe Haven began with statement reviews at kitchen tables and shop counters, and the same story from every owner: "I don't know what I'm actually paying."</p>
      <div className="hero-ctas"><A className="btn btn-glass" href="contact.html">Contact us</A><A className="btn btn-outline" href="careers.html">Join the team</A></div>
    </div>
    <Tilt className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <defs><linearGradient id="abg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbf1dc"/><stop offset="1" stopColor="#f3eee4"/></linearGradient></defs>
        <rect width="500" height="400" fill="url(#abg)"/>
        
        <rect x="320" y="30" width="150" height="170" rx="6" fill="#fff6dc"/><path d="M395 30v170M320 115h150" stroke="#d3ccbe" strokeWidth="6"/>
        
        <path d="M0 260h500v30H0z" fill="#b98a52"/><path d="M0 254h500v10H0z" fill="#d8b07a"/>
        <rect x="40" y="290" width="22" height="110" fill="#8b6336"/><rect x="438" y="290" width="22" height="110" fill="#8b6336"/>
        
        <g transform="translate(150 150) rotate(-8)"><rect width="150" height="110" rx="4" fill="#fff"/><path d="M16 24h80M16 44h118M16 64h90M16 84h118" stroke="#d3ccbe" strokeWidth="5" strokeLinecap="round"/><circle cx="118" cy="24" r="10" fill="none" stroke="#b23a3a" strokeWidth="3"/></g>
        
        <path d="M300 240l48-40" stroke="#0f2b3f" strokeWidth="8" strokeLinecap="round"/><path d="M300 240l-8 7 10 2z" fill="#d9a441"/>
        
        <path d="M70 215h44l-6 40H76z" fill="#3f9e86"/><path d="M114 222c12 0 14 18 0 22" stroke="#3f9e86" strokeWidth="6" fill="none"/>
        <path d="M400 218h40l-5 36h-30z" fill="#d9a441"/><path d="M440 225c12 0 14 16 0 20" stroke="#d9a441" strokeWidth="6" fill="none"/>
        <path d="M86 205c0-10 6-10 6-18M96 205c0-10 6-10 6-18" stroke="#8fa8b8" strokeWidth="3" strokeLinecap="round" opacity=".8"/>
        
        <rect x="236" y="190" width="56" height="70" rx="6" fill="#0f2b3f"/><rect x="243" y="197" width="42" height="16" rx="3" fill="#3f9e86"/><g fill="#3b4d5c"><rect x="243" y="220" width="10" height="8" rx="2"/><rect x="259" y="220" width="10" height="8" rx="2"/><rect x="275" y="220" width="10" height="8" rx="2"/><rect x="243" y="234" width="10" height="8" rx="2"/><rect x="259" y="234" width="10" height="8" rx="2"/><rect x="275" y="234" width="10" height="8" rx="2"/><rect x="243" y="248" width="26" height="8" rx="2"/><rect x="275" y="248" width="10" height="8" rx="2" fill="#d9a441"/></g>
      </svg>
    </Tilt>
  </div>
</Section>

<Section>
  <div className="wrap prose">
    <p className="kicker">Our story</p>
    <H2 style={{marginTop:'0'}}>Answering one question honestly became our whole business.</H2>
    <p className="lead">Payments came first. Then, as merchants asked us to look at the rest (coverage, payroll, benefits, cash flow) the Safe Haven family grew around them.</p>
    <p>Today we're one team behind every solution, still doing what we did on day one: showing our work, and only recommending what fits. If staying with your current processor is your best move, we say so, and you still leave knowing exactly what you pay.</p>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">How we work</p><H2>Three things we won't bend on.</H2></div>
    <Stagger className="values">
      <motion.div variants={item} className="value"><h3>We show our work</h3><p>Every review is line by line. Every statement separates the card networks' cost from ours. No bundled "rate" that hides the margin.</p></motion.div>
      <motion.div variants={item} className="value"><h3>We start from how you operate</h3><p>We match the solution to the business, not the business to a product. If something doesn't fit, we won't push it.</p></motion.div>
      <motion.div variants={item} className="value"><h3>Real people answer</h3><p>The person who set you up is the person you call. Phones are answered by the team, not a queue.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">The team</p><H2>Former reps, former owners, and people who've read a lot of statements.</H2><p className="lead">We are former sales reps and industry leaders who understand the real ups and downs of running a business. Photos and bios to come from the team.</p></div>
    <Stagger className="team">
      <motion.div variants={item} className="member"><div className="avatar" style={{background:'#174a66'}}>SH</div><b>Founder</b><span>Statement reviews since day one</span></motion.div>
      <motion.div variants={item} className="member"><div className="avatar" style={{background:'#3f9e86'}}>SH</div><b>Head of merchant support</b><span>The voice on the phone</span></motion.div>
      <motion.div variants={item} className="member"><div className="avatar" style={{background:'#d9a441'}}>SH</div><b>Capital &amp; insurance lead</b><span>Packaging the difficult deals</span></motion.div>
      <motion.div variants={item} className="member"><div className="avatar" style={{background:'#0f2b3f'}}>SH</div><b>Partnerships</b><span>ISOs, chambers and referral partners</span></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Talk to us</p><H2>Still doing what we did on day one.</H2><p style={{margin:'0'}}>Send a statement, or just call and ask a question. Mon–Fri 8–5, Sat 8–12.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
