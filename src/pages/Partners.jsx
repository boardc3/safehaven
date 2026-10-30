import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'
import { PartnerCalc } from '../components.jsx'

export default function Partners() {
  usePageMeta('Partner With Us | Safe Haven Payments', 'Refer a business once and earn a residual for as long as it stays. Programs for ISOs and sales teams, accountants and brokers, chambers and associations, and membership partners.')
  return (<>
<Section className="page-hero dark">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="index.html">Home</A> / Partners</p>
      <h1>Refer a business once. Earn for as long as it stays.</h1>
      <p className="lead">Partner with Safe Haven Payments to bring reliable, hand-picked payment solutions to your network while growing your revenue through our flexible referral and membership programs.</p>
      <div className="hero-ctas"><A className="btn btn-glass" href="contact.html#partner">Become a partner</A><A className="btn btn-outline" href="login.html#partner">Partner login</A></div>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <rect width="500" height="400" fill="#fbf8f2"/>
        <g stroke="#d3ccbe" strokeWidth="3"><path d="M250 200L110 110M250 200l140-90M250 200L90 260M250 200l160 60M250 200l-60 140M250 200l60 140"/></g>
        <circle cx="250" cy="200" r="54" fill="#0f2b3f"/><text x="250" y="207" textAnchor="middle" fontFamily="Fraunces" fontSize="18" fill="#fff">You</text>
        <g><circle cx="110" cy="110" r="34" fill="#3f9e86"/><circle cx="390" cy="110" r="34" fill="#3f9e86"/><circle cx="90" cy="260" r="34" fill="#d9a441"/><circle cx="410" cy="260" r="34" fill="#d9a441"/><circle cx="190" cy="340" r="34" fill="#174a66"/><circle cx="310" cy="340" r="34" fill="#174a66"/></g>
        <g fill="#fff" fontFamily="Manrope" fontWeight="700" fontSize="12" textAnchor="middle"><text x="110" y="115">CAFÉ</text><text x="390" y="115">CLINIC</text><text x="90" y="265">SHOP</text><text x="410" y="265">GYM</text><text x="190" y="345">FIRM</text><text x="310" y="345">SALON</text></g>
        <g fill="#2c7a66" fontFamily="Manrope" fontWeight="700" fontSize="12"><text x="150" y="150">$</text><text x="330" y="150">$</text><text x="150" y="240">$</text><text x="340" y="240">$</text><text x="210" y="280">$</text><text x="285" y="280">$</text></g>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Why a Safe Haven partnership</p><h2>Four ways to work together. One residual that keeps paying.</h2></div>
    <Stagger className="grid2">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M11 27l6-7 5 4 7-9" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-5 -7)"/></svg></div><h3>ISOs and sales teams</h3><p>From individuals to whole operations and everything in between, there's a fit for you: competitive splits, residual protection and a back office that treats your merchants like ours.</p><A href="careers.html">Bringing a team? See team transitions</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>Safe Haven membership partners</h3><p>Bring your service to the entire SHP membership program. Vetted vendors get a seat in front of every member merchant.</p><A href="solutions.html#membership">About membership</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="9" cy="9" r="3.5" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><circle cx="17" cy="9" r="3" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 20c.5-4 3-6 6-6s5.5 2 6 6M14 14c3 0 5.5 2 6 6" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>Business associations and large groups</h3><p>Chambers, referral groups and national associations: bring trusted solutions to your network, and extra income to the organization.</p><A href="who-we-serve.html#chambers">For chambers of commerce</A></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 20V9l8-5 8 5v11" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/><path d="M9 20v-6h6v6" stroke="#2c7a66" strokeWidth="1.8" fill="none"/></svg></div><h3>Direct referral partners</h3><p>Individuals, accountants, bookkeepers, brokers and more. You make the introduction; we handle everything else, discreetly and professionally.</p><A href="contact.html#partner">Find out how we can work together</A></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt">
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
    <div>
      <p className="kicker">Partner possibility calculator</p>
      <h2>What could your referrals be worth?</h2>
      <p className="lead">Refer a business once and earn a residual for as long as it stays active. Put in your own numbers and see how it stacks.</p>
      <ul className="chk"><li>Residuals paid monthly on every active account</li><li>Capital, payroll and insurance referrals pay too</li><li>Transparent reporting in the partner portal</li></ul>
    </div>
    <PartnerCalc />
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">How it works</p><h2>Introduce. We do the rest.</h2></div>
    <Stagger className="timeline">
      <motion.div variants={item} className="tl"><div className="dot">1</div><h3>Sign up</h3><p>A short agreement and a partner login. No quota, no minimums.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">2</div><h3>Make the introduction</h3><p>Send a name and a number through the portal, or warm-transfer a call. We take it from there.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">3</div><h3>Get paid monthly</h3><p>Residuals on every active account, reported line by line, for as long as the account stays.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Partner with us</p><h2>Tell us about your network. We'll map the fit.</h2><p style={{margin:'0'}}>A partnerships lead follows up within one business day.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#partner">Become a partner</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
