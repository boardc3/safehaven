import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Solutions() {
  usePageMeta('Solutions | Safe Haven Payments', 'Payment processing, Square, insurance, payroll and benefits, capital, SHP membership, the employee savings app and integrations, all from one team.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="index.html">Home</A> / Solutions</p>
      <h1>Start with payments. Add the rest when you're ready.</h1>
      <p className="lead">One team behind every part of the money side of your business, so you make one call instead of six. Each solution stands on its own; together they share one login, one statement and one person who knows your account.</p>
      <div className="hero-ctas"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <rect width="500" height="400" fill="#174a66"/>
        <circle cx="250" cy="200" r="150" fill="none" stroke="#3f9e86" strokeWidth="2" opacity=".5"/>
        <circle cx="250" cy="200" r="90" fill="none" stroke="#3f9e86" strokeWidth="2" opacity=".5"/>
        <g stroke="#3f9e86" strokeWidth="2" opacity=".5"><path d="M250 200L250 50M250 200L380 125M250 200L380 275M250 200L250 350M250 200L120 275M250 200L120 125"/></g>
        <circle cx="250" cy="200" r="46" fill="#d9a441"/><text x="250" y="208" textAnchor="middle" fontFamily="Fraunces" fontSize="22" fill="#0f2b3f">SHP</text>
        <g fill="#fbf8f2"><circle cx="250" cy="50" r="28"/><circle cx="380" cy="125" r="28"/><circle cx="380" cy="275" r="28"/><circle cx="250" cy="350" r="28"/><circle cx="120" cy="275" r="28"/><circle cx="120" cy="125" r="28"/></g>
        <g fontFamily="Manrope" fontWeight="700" fontSize="11" fill="#0f2b3f" textAnchor="middle"><text x="250" y="54">PAY</text><text x="380" y="129">SQUARE</text><text x="380" y="279">INSURE</text><text x="250" y="354">PAYROLL</text><text x="120" y="279">CAPITAL</text><text x="120" y="129">SAVE</text></g>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sol-feature">
      <div className="dark">
        <svg className="art" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="100" cy="100" r="60" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="100" cy="100" r="30" fill="none" stroke="#fff" strokeWidth="2"/><path d="M100 10v180M10 100h180" stroke="#fff" strokeWidth="2"/></svg>
        <p className="kicker">Most businesses start here</p>
        <h3>Merchant processing</h3>
        <p>Pricing you can actually read, and a team that answers when you call.</p>
        <ul className="chk"><li>Transparent pricing options, explained in plain English</li><li>Equipment programs for qualified merchants</li><li>Fast onboarding and next-day funding</li><li>Countertop, mobile, online, invoicing and virtual terminal</li></ul>
        <A className="btn btn-light" href="payments.html">About merchant processing</A>
      </div>
      <div>
        <p className="kicker">Prefer Square?</p>
        <h3>Square, set up right the first time</h3>
        <p style={{color:'var(--ink-2)'}}>Keep Square's simplicity, with Safe Haven's hands-on setup and support behind it.</p>
        <ul className="chk"><li>Flat-rate and cash discount options</li><li>Added perks for high-volume merchants</li><li>Local help instead of a ticket queue</li></ul>
        <A className="btn btn-outline" href="square.html">Explore Square solutions</A>
      </div>
    </div>

    <Stagger className="sol-grid">
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>Business insurance</h3><p>Coverage that matches the business you run today, not the one you started.</p><A href="insurance.html">Learn about coverage</A></motion.div>
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="5" width="18" height="16" rx="3" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 10h18M8 3v4M16 3v4" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Payroll &amp; benefits</h3><p>Accurate, dependable payroll and benefits for employees and contractors alike.</p><A href="payroll.html">Learn about payroll</A></motion.div>
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 18l6-6 4 4 6-8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 8h5v5" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Capital access</h3><p>Your team gets paid before your clients pay you. Working capital bridges the gap, with clear terms.</p><A href="capital.html">Learn about capital</A></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt" id="membership">
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">SHP membership</p>
      <h2>Preferred access across every solution.</h2>
      <p className="lead">Membership is how our longest-standing merchants get more out of the relationship: ongoing statement reviews, first access to new programs and perks that grow the longer you stay.</p>
      <ul className="chk"><li>An annual statement review, so your rate never drifts</li><li>Preferred pricing when you add payroll, coverage or capital</li><li>Partner-provided member services from vetted vendors</li><li>Priority support from the team that knows your account</li></ul>
      <A className="btn btn-primary" href="contact.html#review">Ask about membership</A>
    </div>
    <div className="card" style={{textAlign:'center',padding:'44px'}}>
      <svg viewBox="0 0 120 120" width="120" height="120" style={{margin:'0 auto 16px'}} aria-hidden="true"><circle cx="60" cy="60" r="56" fill="#fbf1dc"/><path d="M60 24l9.5 19.5 21.5 3-15.5 15 3.7 21.5L60 73l-19.2 10 3.7-21.5-15.5-15 21.5-3z" fill="#d9a441"/></svg>
      <h3>Member perks that compound</h3>
      <p style={{color:'var(--ink-2)',margin:'0'}}>Reviews, pricing and services get better each year you're with us, not worse.</p>
    </div>
  </div>
</Section>

<Section id="savings">
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div className="card" style={{padding:'0',overflow:'hidden',background:'var(--harbor)'}}>
      <svg viewBox="0 0 400 300" aria-hidden="true" style={{width:'100%',display:'block'}}>
        <rect width="400" height="300" fill="#0f2b3f"/>
        <rect x="130" y="30" width="140" height="260" rx="22" fill="#fff"/>
        <rect x="140" y="40" width="120" height="240" rx="16" fill="#fbf8f2"/>
        <text x="200" y="90" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="11" fill="#6b7682">SAVED SO FAR</text>
        <text x="200" y="124" textAnchor="middle" fontFamily="Fraunces" fontSize="28" fill="#0f2b3f">$1,240</text>
        <rect x="156" y="146" width="88" height="10" rx="5" fill="#e4dfd4"/><rect x="156" y="146" width="56" height="10" rx="5" fill="#3f9e86"/>
        <g fill="#fff" stroke="#e4dfd4"><rect x="152" y="176" width="96" height="26" rx="8"/><rect x="152" y="210" width="96" height="26" rx="8"/><rect x="152" y="244" width="96" height="26" rx="8"/></g>
        <g fill="#3f9e86"><circle cx="166" cy="189" r="6"/><circle cx="166" cy="223" r="6"/><circle cx="166" cy="257" r="6"/></g>
        <g stroke="#d3ccbe" strokeWidth="4" strokeLinecap="round"><path d="M180 189h50M180 223h40M180 257h56"/></g>
      </svg>
    </div>
    <div>
      <p className="kicker">Employee savings app</p>
      <h2>A retention perk your team will actually use.</h2>
      <p className="lead">Simple savings tools your employees set up themselves, funded straight from payroll. Easy to offer, no administration for you, and a reason for good people to stay.</p>
      <ul className="chk"><li>Automatic transfers each pay run, chosen by the employee</li><li>Goals, progress and alerts in the app</li><li>No cost to set up when you run payroll with us</li></ul>
      <A className="btn btn-primary" href="contact.html#review">Offer it to my team</A>
    </div>
  </div>
</Section>

<Section className="alt" id="integrations">
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">ISV &amp; integrations</p>
      <h2>Payments that meet your software where it is.</h2>
      <p className="lead">Already running a POS, an e-commerce cart or practice-management software? We connect to the platforms businesses already use. Building software yourself? We help with embedded payments, from sandbox to go-live.</p>
      <ul className="chk"><li>Integrated POS and e-commerce platforms</li><li>Invoicing and recurring billing</li><li>Embedded payments for software vendors, with revenue share</li></ul>
      <A className="btn btn-primary" href="contact.html#review">Talk integrations</A>
    </div>
    <Stagger className="grid2">
      <motion.div variants={item} className="feature" style={{textAlign:'center'}}><b style={{font:'450 2rem Fraunces',color:'var(--harbor)'}}>POS</b><p>Restaurant, retail and service POS systems</p></motion.div>
      <motion.div variants={item} className="feature" style={{textAlign:'center'}}><b style={{font:'450 2rem Fraunces',color:'var(--harbor)'}}>Carts</b><p>Online stores and booking platforms</p></motion.div>
      <motion.div variants={item} className="feature" style={{textAlign:'center'}}><b style={{font:'450 2rem Fraunces',color:'var(--harbor)'}}>API</b><p>Embedded payments for your own product</p></motion.div>
      <motion.div variants={item} className="feature" style={{textAlign:'center'}}><b style={{font:'450 2rem Fraunces',color:'var(--harbor)'}}>ERP</b><p>Invoicing and accounting connections</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Not sure where to start?</p><h2>Start with one statement.</h2><p style={{margin:'0'}}>The free review tells you what you pay today. Everything else is optional, and only if it fits.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
