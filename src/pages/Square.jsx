import { A, Section, Stagger, item, usePageMeta, H2, Tilt, Parallax, Marquee } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Square() {
  usePageMeta('Square, Backed by Safe Haven Support | Safe Haven Payments', "Keep Square's simplicity with white-glove setup, one point of contact and everything bundled into one statement. Cash discount or interchange-plus pricing.")
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="solutions.html">Solutions</A> / Square</p>
      <H2 as="h1">Square, set up right the first time.</H2>
      <p className="lead">Keep Square's simplicity, with Safe Haven's hands-on setup and support behind it. Same hardware, same app, plus a local team that picks up the phone.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review">Start my Square setup</A>
        <A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A>
      </div>
      <p className="fine" style={{marginTop:'0'}}>No obligation. No impact on your credit score.</p>
    </div>
    <Tilt className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <rect width="500" height="400" fill="#f3eee4"/>
        <rect x="0" y="280" width="500" height="120" fill="#b98a52"/><rect x="0" y="274" width="500" height="12" fill="#d8b07a"/>
        
        <rect x="180" y="200" width="140" height="80" rx="8" fill="#0f2b3f"/>
        <rect x="140" y="60" width="220" height="170" rx="18" fill="#fff"/>
        <rect x="156" y="76" width="188" height="138" rx="10" fill="#174a66"/>
        <text x="250" y="130" textAnchor="middle" fontFamily="Fraunces" fontSize="34" fill="#fff">$18.50</text>
        <rect x="186" y="160" width="128" height="34" rx="17" fill="#3f9e86"/><text x="250" y="182" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="14" fill="#fff">Tap to pay</text>
        
        <rect x="370" y="220" width="70" height="60" rx="12" fill="#fff"/><rect x="385" y="240" width="40" height="8" rx="4" fill="#3f9e86"/>
        
        <g transform="translate(395 150) rotate(-25)"><rect width="90" height="58" rx="8" fill="#d9a441"/><rect y="12" width="90" height="10" fill="#0f2b3f"/><path d="M50 44h28" stroke="#0f2b3f" strokeWidth="3" strokeLinecap="round"/></g>
        <g stroke="#3f9e86" strokeWidth="4" fill="none" strokeLinecap="round"><path d="M372 190a24 24 0 010 34"/><path d="M360 178a40 40 0 010 58"/></g>
        
        <rect x="40" y="200" width="110" height="80" rx="8" fill="#fff" opacity=".9"/>
        <g fill="#d9a441"><circle cx="70" cy="240" r="12"/><circle cx="100" cy="240" r="12"/><circle cx="130" cy="240" r="12"/></g>
        <g fill="#b23a3a"><circle cx="70" cy="236" r="4"/><circle cx="100" cy="236" r="4"/><circle cx="130" cy="236" r="4"/></g>
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
          <li><b>DIY setup, no support</b><span>Signing up for Square on your own often means figuring out hardware, software and troubleshooting by yourself.</span></li>
          <li><b>Generic onboarding</b><span>Standard signup flows don't account for how your specific business operates.</span></li>
          <li><b>Disconnected from your other tools</b><span>Managing Square separately from your other financial services adds complexity.</span></li>
        </ul>
      </div>
      <div className="fix">
        <h3>Why Safe Haven for Square</h3>
        <ul>
          <li><b>White-glove setup</b><span>We handle your Square signup and configuration from start to finish: catalog, taxes, tipping, hardware.</span></li>
          <li><b>One point of contact</b><span>The same team supporting your payments and payroll also supports your Square account.</span></li>
          <li><b>Bundled into one statement</b><span>Simplify your reporting with everything under one roof.</span></li>
        </ul>
      </div>
    </div>
  </div>
</Section>

<Section className="alt" id="pricing">
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">Choose your pricing option</p><H2>Two ways to pay. Neither needs a rep.</H2><p className="lead">No pressure. Sign up directly with Square in minutes, and Safe Haven is here if you want local help along the way.</p></div>
    <div className="price">
      <div className="plan hi">
        <span className="tag">Keep more of every sale</span>
        <h3>Cash discount</h3>
        <div className="amt">4%<small>per card transaction</small></div>
        <p>Customers who pay by card cover the processing cost. Cash customers get the discount. You keep the full ticket.</p>
        <ul className="chk"><li>No monthly processing bill to absorb</li><li>Compliant signage and receipts set up for you</li><li>Works with Square's standard hardware</li></ul>
        <A className="btn btn-primary" style={{width:'100%'}} href="contact.html#review">Get started with cash discount</A>
      </div>
      <div className="plan">
        <h3>IC Plus</h3>
        <div className="amt">2.6%<small>built into your rate</small></div>
        <p>Straightforward interchange-plus pricing. You see the card networks' cost and our margin on top, line by line.</p>
        <ul className="chk"><li>One transparent rate on every statement</li><li>Added perks for high-volume merchants</li><li>Same Square app and reporting</li></ul>
        <A className="btn btn-outline" style={{width:'100%'}} href="contact.html#review">Get started with IC Plus</A>
      </div>
    </div>
    <p className="fine center" style={{textAlign:'center',marginTop:'22px'}}>Rates shown as listed on safehavenpayments.com. Your free review confirms which option costs you less based on your card mix.</p>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">Setup</p><H2>Open by the weekend.</H2></div>
    <Stagger className="timeline">
      <motion.div variants={item} className="tl"><div className="dot">1</div><h3>Tell us about the counter</h3><p>What you sell, how you tip, whether you deliver. Fifteen minutes on the phone is plenty.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">2</div><h3>We configure it</h3><p>Account, catalog, taxes, hardware and staff logins, built the way your business runs.</p></motion.div>
      <motion.div variants={item} className="tl"><div className="dot">3</div><h3>Train and go live</h3><p>A walkthrough with your team, then a first-week check-in from the same person who set you up.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Start your Square setup</p><H2>Already on Square? We'll review that too.</H2><p style={{margin:'0'}}>Send a recent Square statement and we'll show you whether cash discount or IC Plus comes out ahead.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Talk to us about Square</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
