import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Payments() {
  usePageMeta('Merchant Processing | Safe Haven Payments', 'Card processing with pricing you can actually read, equipment programs for qualified merchants, fast onboarding and a team that answers when you call.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="solutions.html">Solutions</A> / Merchant processing</p>
      <h1>Pricing you can actually read, and a team that answers.</h1>
      <p className="lead">Countertop, mobile, online, invoicing and virtual terminal, priced transparently and reviewed for free before you commit to anything.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review">Review my rates</A>
        <A className="btn btn-outline" href="index.html#check">Try the fee check</A>
      </div>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <defs><linearGradient id="mbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0f2b3f"/><stop offset="1" stopColor="#215f7f"/></linearGradient></defs>
        <rect width="500" height="400" fill="url(#mbg)"/>
        
        <g transform="translate(70 50) rotate(-3)">
          <rect width="300" height="320" rx="8" fill="#fff"/>
          <text x="24" y="40" fontFamily="Manrope" fontWeight="700" fontSize="14" fill="#0f2b3f">YOUR STATEMENT</text>
          <path d="M24 56h252" stroke="#e4dfd4" strokeWidth="2" strokeDasharray="4 4"/>
          <g fontFamily="Manrope" fontSize="13" fill="#3d4852">
            <text x="24" y="86">Interchange</text><text x="276" y="86" textAnchor="end">$812.40</text>
            <text x="24" y="114">Assessments</text><text x="276" y="114" textAnchor="end">$52.10</text>
            <text x="24" y="142">Safe Haven margin</text><text x="276" y="142" textAnchor="end">$88.00</text>
            <text x="24" y="170">Equipment</text><text x="276" y="170" textAnchor="end">$0.00</text>
            <text x="24" y="198">PCI</text><text x="276" y="198" textAnchor="end">$0.00</text>
          </g>
          <path d="M24 220h252" stroke="#e4dfd4" strokeWidth="2" strokeDasharray="4 4"/>
          <text x="24" y="256" fontFamily="Manrope" fontWeight="700" fontSize="14" fill="#0f2b3f">Total</text><text x="276" y="258" textAnchor="end" fontFamily="Fraunces" fontSize="26" fill="#2c7a66">$952.50</text>
          <text x="24" y="292" fontFamily="Manrope" fontSize="12" fill="#6b7682">Effective rate 2.38%</text>
        </g>
        
        <g transform="translate(330 220)">
          <rect width="130" height="150" rx="14" fill="#1b2a35"/>
          <rect x="14" y="14" width="102" height="50" rx="8" fill="#3f9e86"/>
          <text x="65" y="46" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="16" fill="#fff">Approved</text>
          <g fill="#3b4d5c"><rect x="14" y="78" width="28" height="16" rx="3"/><rect x="51" y="78" width="28" height="16" rx="3"/><rect x="88" y="78" width="28" height="16" rx="3"/><rect x="14" y="102" width="28" height="16" rx="3"/><rect x="51" y="102" width="28" height="16" rx="3"/><rect x="88" y="102" width="28" height="16" rx="3"/><rect x="14" y="126" width="28" height="16" rx="3"/><rect x="51" y="126" width="28" height="16" rx="3"/><rect x="88" y="126" width="28" height="16" rx="3" fill="#d9a441"/></g>
        </g>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">What you get</p><h2>Most businesses start here.</h2></div>
    <Stagger className="grid4">
      <motion.div variants={item} className="feature"><h3>Transparent pricing</h3><p>Interchange-plus or cash discount, explained in plain English before you sign. Every statement shows the card networks' cost and ours separately.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Equipment programs</h3><p>Countertop terminals, mobile readers and integrated POS, with programs for qualified merchants so hardware isn't a reason to wait.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>Fast onboarding and funding</h3><p>Most accounts are approved and live within days, with next-day funding on card sales.</p></motion.div>
      <motion.div variants={item} className="feature"><h3>A team that answers</h3><p>Setup, first batch, chargebacks and the odd Tuesday question all go to the same people, by phone.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Ways to accept</p><h2>Wherever the sale happens.</h2></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="4" y="3" width="16" height="18" rx="3" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><rect x="7" y="6" width="10" height="5" rx="1" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M8 15h2M12 15h2M8 18h2M12 18h2" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Countertop</h3><p>Terminals with tap, chip and swipe, tipping and receipts, for shops, restaurants and front desks.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="7" y="2" width="10" height="20" rx="2.5" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M11 18h2" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Mobile</h3><p>Phone and tablet readers for service calls, markets, deliveries and anywhere without a counter.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="#2c7a66" strokeWidth="1.8" fill="none"/></svg></div><h3>Online</h3><p>Checkout for your website or cart, with the major platforms supported out of the box.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="4" y="3" width="16" height="18" rx="2" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Invoicing</h3><p>Send an invoice, get paid by card or bank transfer, and see who's paid without chasing.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="5" width="18" height="12" rx="2" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M8 21h8M12 17v4" stroke="#2c7a66" strokeWidth="1.8" strokeLinecap="round"/></svg></div><h3>Virtual terminal</h3><p>Key in phone and mail orders from any browser, with stored cards for repeat customers.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 7H4v10h4M16 7h4v10h-4M8 12h8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Integrated POS</h3><p>Payments inside the POS, e-commerce or practice software you already run. <A href="solutions.html#integrations" style={{margin:'0'}}>About integrations</A></p></motion.div>
    </Stagger>
  </div>
</Section>

<Section>
  <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'56px',alignItems:'center'}}>
    <div>
      <p className="kicker">Prefer Square?</p>
      <h2>We set that up too.</h2>
      <p className="lead">Keep Square's simplicity with Safe Haven's hands-on setup and support behind it, on cash discount or interchange-plus pricing.</p>
      <A className="btn btn-outline" href="square.html">Explore Square solutions</A>
    </div>
    <div className="card" style={{background:'var(--paper-2)'}}>
      <h3>Not sure what you're paying now?</h3>
      <p style={{color:'var(--ink-2)'}}>Two numbers from last month's statement show your effective rate in seconds.</p>
      <A className="btn btn-primary" href="index.html#check">Try the fee check</A>
    </div>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Free statement review</p><h2>Send one statement. Get one honest number.</h2><p style={{margin:'0'}}>If staying put is your best move, we'll say so.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Review my rates</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
