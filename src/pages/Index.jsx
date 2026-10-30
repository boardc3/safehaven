import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'
import { Receipt, FeeCheck, Tabs, Faq } from '../components.jsx'

const SERVE = [
  { label: 'New businesses', panel: <><div><h3>Open with the money side already sorted.</h3><p>Get payments, coverage and payroll set up right from day one, with room to grow into more.</p><A className="btn btn-primary" href="who-we-serve.html#new">Plan my launch</A></div><div className="need"><h4>What we set up</h4><ul className="chk" style={{margin:0}}><li>Card acceptance and equipment</li><li>Business insurance</li><li>Payroll for your first hires</li></ul></div></> },
  { label: 'Franchises', panel: <><div><h3>Every location runs the same playbook.</h3><p>Consistent setup, pricing and reporting across every store.</p><A className="btn btn-primary" href="who-we-serve.html#franchises">Franchise solutions</A></div><div className="need"><h4>What we standardize</h4><ul className="chk" style={{margin:0}}><li>Pricing across locations</li><li>Equipment and setup</li><li>Consolidated reporting</li></ul></div></> },
  { label: 'Multi-entity groups', panel: <><div><h3>One team across the whole group.</h3><p>Multi-entity operations with consolidated reviews, reporting and a single point of contact.</p><A className="btn btn-primary" href="who-we-serve.html#groups">Request a group review</A></div><div className="need"><h4>What you get</h4><ul className="chk" style={{margin:0}}><li>Consolidated statement reviews</li><li>Group-wide reporting</li><li>One team that knows every entity</li></ul></div></> },
  { label: 'Enterprise', panel: <><div><h3>Scale without the runaround.</h3><p>Security, integration support and a dedicated team for high-volume operations with complex requirements.</p><A className="btn btn-primary" href="who-we-serve.html#enterprise">Talk to our enterprise team</A></div><div className="need"><h4>What we support</h4><ul className="chk" style={{margin:0}}><li>Integrations and security reviews</li><li>High-volume processing</li><li>Dedicated account team</li></ul></div></> },
  { label: 'Municipalities', panel: <><div><h3>Accountable payments for public services.</h3><p>Public-sector payment acceptance with the transparency your community expects.</p><A className="btn btn-primary" href="who-we-serve.html#municipalities">Contact our public-sector team</A></div><div className="need"><h4>Typical needs</h4><ul className="chk" style={{margin:0}}><li>Online and in-person payments</li><li>Clear, auditable pricing</li><li>Reporting for oversight</li></ul></div></> },
  { label: 'Chambers of commerce', panel: <><div><h3>A member benefit you can stand behind.</h3><p>Real value for the businesses you represent, plus revenue for your chamber.</p><A className="btn btn-primary" href="partners.html">See association partnerships</A></div><div className="need"><h4>What members get</h4><ul className="chk" style={{margin:0}}><li>Free statement reviews</li><li>Preferred access to every solution</li><li>A local team that answers</li></ul></div></> },
]
const FAQ = [
  ['Is the statement review really free?', "Yes. Send one recent processing statement and we'll total every fee into one number and walk you through it. There's no obligation to switch."],
  ["What if I'm already getting a good deal?", "Then we'll tell you. If staying put is your best move, we say so. You'll still leave knowing exactly what you pay."],
  ['What do I need to send?', 'Your most recent monthly processing statement, as a PDF or a clear photo. If you have more than one location or processor, send one from each.'],
  ['Do I have to change my equipment or POS?', 'Not necessarily. We work with countertop, mobile, integrated POS, online carts and invoicing. If new equipment makes sense, setup and training are handled for you.'],
  ['I use Square. Can you still help?', 'Yes. We offer Square solutions with hands-on setup and support, including flat-rate and cash discount options.'],
  ["I'm already a merchant. How do I get support?", <>Call <a href="tel:+18668088183">(866) 808-8183</a>, email <a href="mailto:support@safehavenpayments.com">support@safehavenpayments.com</a>, or <A href="login.html">log in to your merchant account</A>.</>],
]
function HeroTitle() {
  const reduce = useReducedMotion()
  const words = ["Find", "out", "what", "you're", <em key="r">really</em>, "paying", "to", "accept", "cards."]
  return (
    <motion.h1 initial={reduce ? false : 'hidden'} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }} aria-label="Find out what you're really paying to accept cards.">
      {words.map((w, i) => <motion.span key={i} className="w" variants={{ hidden: { opacity: 0, y: '0.4em' }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } } }}>{w}{i < words.length - 1 ? ' ' : ''}</motion.span>)}
    </motion.h1>
  )
}

export default function Index() {
  usePageMeta("Safe Haven Payments | Know what you're really paying", 'Free statement review for business owners. We total every card-processing fee into one honest number, show our work, and tell you plainly whether switching is worth it.')
  return (<>
<Section className="hero" id="top">
  <svg className="beam" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
    <defs><linearGradient id="bm" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9a441" stopOpacity=".35"/><stop offset="1" stopColor="#d9a441" stopOpacity="0"/></linearGradient></defs>
    <path d="M1440 0 L600 700 L1440 700Z" fill="url(#bm)"/>
  </svg>
  <div className="wrap">
    <div>
      <p className="kicker">Free, no-obligation statement review</p>
      <HeroTitle />
      <p className="lead">Send us one processing statement. We'll add up every fee into one honest number, show our work, and tell you plainly whether switching is worth it. If it isn't, we'll say so.</p>
      <div className="hero-ctas">
        <A className="btn btn-glass" href="contact.html#review">Get my free review</A>
        <A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A>
      </div>
      <ul className="assure">
        <li><svg viewBox="0 0 22 22" width="22" height="22"><circle cx="11" cy="11" r="11" fill="#e6f4ef"/><path d="M6.5 11.5l3 3 6-6" stroke="#2c7a66" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>One statement is all we need to start</li>
        <li><svg viewBox="0 0 22 22" width="22" height="22"><circle cx="11" cy="11" r="11" fill="#e6f4ef"/><path d="M6.5 11.5l3 3 6-6" stroke="#2c7a66" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>You get a real person, usually by the next business day</li>
        <li><svg viewBox="0 0 22 22" width="22" height="22"><circle cx="11" cy="11" r="11" fill="#e6f4ef"/><path d="M6.5 11.5l3 3 6-6" stroke="#2c7a66" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>If you switch, equipment, setup and training are handled</li>
      </ul>
    </div>

    <div className="hero-visual" aria-hidden="true">
      <div className="photo">
        
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f7e9c9"/><stop offset="1" stopColor="#e8d7b4"/></linearGradient>
            <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a6f8a"/><stop offset="1" stopColor="#174a66"/></linearGradient>
            <linearGradient id="counter" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b98a52"/><stop offset="1" stopColor="#8b6336"/></linearGradient>
            <pattern id="tile" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#1a4f6b"/><rect x="1" y="1" width="38" height="38" fill="#215f7f" rx="2"/></pattern>
          </defs>
          <rect width="800" height="600" fill="url(#sky)"/>
          
          <rect x="520" y="40" width="240" height="260" rx="8" fill="#fff6dc"/>
          <rect x="520" y="40" width="240" height="260" rx="8" fill="none" stroke="#c9ab74" strokeWidth="10"/>
          <path d="M640 40v260M520 170h240" stroke="#c9ab74" strokeWidth="8"/>
          <path d="M540 60l80 40-20 120-60 10z" fill="#ffe9ad" opacity=".5"/>
          
          <rect x="0" y="0" width="470" height="330" fill="url(#wall)"/>
          <rect x="0" y="330" width="800" height="90" fill="url(#tile)"/>
          <rect x="40" y="70" width="380" height="8" fill="#0f2b3f"/><rect x="40" y="170" width="380" height="8" fill="#0f2b3f"/><rect x="40" y="270" width="380" height="8" fill="#0f2b3f"/>
          
          <g fill="#d9a441"><rect x="60" y="30" width="34" height="40" rx="6"/><rect x="110" y="24" width="30" height="46" rx="6"/><rect x="160" y="38" width="44" height="32" rx="6"/><rect x="230" y="22" width="26" height="48" rx="5"/><rect x="275" y="34" width="36" height="36" rx="6"/><rect x="330" y="26" width="30" height="44" rx="5"/><rect x="380" y="40" width="30" height="30" rx="6"/></g>
          <g fill="#3f9e86"><rect x="56" y="126" width="40" height="44" rx="6"/><rect x="118" y="134" width="30" height="36" rx="6"/><rect x="170" y="120" width="28" height="50" rx="6"/><rect x="220" y="138" width="50" height="32" rx="6"/><rect x="296" y="124" width="34" height="46" rx="6"/><rect x="350" y="130" width="52" height="40" rx="6"/></g>
          <g fill="#f3eee4"><rect x="62" y="232" width="30" height="38" rx="5"/><rect x="108" y="222" width="44" height="48" rx="6"/><rect x="176" y="238" width="28" height="32" rx="5"/><rect x="224" y="226" width="34" height="44" rx="6"/><rect x="282" y="236" width="52" height="34" rx="6"/><rect x="356" y="224" width="30" height="46" rx="5"/></g>
          
          <path d="M470 0v110" stroke="#0f2b3f" strokeWidth="4"/><path d="M430 110h80l-14 46h-52z" fill="#d9a441"/><ellipse cx="470" cy="160" rx="22" ry="6" fill="#fff3c4" opacity=".9"/>
          
          <rect x="0" y="410" width="800" height="190" fill="url(#counter)"/>
          <rect x="0" y="404" width="800" height="14" fill="#d8b07a"/>
          
          <rect x="690" y="356" width="56" height="52" rx="8" fill="#b23a3a"/>
          <path d="M718 356c-10-30-40-40-52-30 20 2 36 14 52 30zm0 0c10-34 44-42 56-30-22 0-40 12-56 30zm0 0c-2-26 6-50 20-56-6 20-10 38-20 56z" fill="#3f9e86"/>
          
          <g transform="translate(300 300)">
            <rect x="0" y="0" width="150" height="110" rx="14" fill="#1b2a35"/>
            <rect x="14" y="14" width="122" height="46" rx="8" fill="#2e8f7c"/>
            <text x="75" y="44" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="18" fontWeight="700" fill="#fff">$42.50</text>
            <g fill="#3b4d5c"><rect x="18" y="70" width="26" height="12" rx="3"/><rect x="50" y="70" width="26" height="12" rx="3"/><rect x="82" y="70" width="26" height="12" rx="3"/><rect x="114" y="70" width="18" height="12" rx="3"/><rect x="18" y="88" width="26" height="12" rx="3"/><rect x="50" y="88" width="26" height="12" rx="3"/><rect x="82" y="88" width="26" height="12" rx="3"/><rect x="114" y="88" width="18" height="12" rx="3" fill="#3f9e86"/></g>
          </g>
          
          <g transform="translate(470 250) rotate(-20)">
            <rect x="0" y="0" width="120" height="76" rx="10" fill="#d9a441"/>
            <rect x="0" y="16" width="120" height="14" fill="#0f2b3f"/>
            <rect x="14" y="44" width="34" height="22" rx="4" fill="#f3eee4"/>
            <path d="M60 60h44" stroke="#0f2b3f" strokeWidth="4" strokeLinecap="round"/>
          </g>
          <path d="M520 290c20-40 70-50 110-20 30 24 24 70-8 86-16 8-50 8-66-2l-46-20z" fill="#f2c9a6"/>
          <path d="M560 270c10-16 30-20 44-10" stroke="#e4ae84" strokeWidth="6" strokeLinecap="round" fill="none"/>
          
          <path d="M120 350h70l-8 56h-54z" fill="#f3eee4"/><path d="M190 360c18 0 22 26 0 30" stroke="#f3eee4" strokeWidth="8" fill="none"/><path d="M128 344h54" stroke="#d6cdbb" strokeWidth="6" strokeLinecap="round"/>
          <path d="M140 330c0-14 8-14 8-26M158 330c0-14 8-14 8-26" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"/>
          
          <path d="M620 404h120l-6 20H626z" fill="#fff"/>
        </svg>
      </div>

      <Receipt />
    </div>
  </div>
</Section>


<div className="trust" aria-label="Why owners trust us">
  <Stagger className="wrap" data-stagger>
    <motion.div variants={item}><svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="17" fill="none" stroke="#3f9e86" strokeWidth="2"/><path d="M11 18.5l5 5 9-10" stroke="#8fd4bf" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b>Free</b>Every review, no strings</div></motion.div>
    <motion.div variants={item}><svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="17" fill="none" stroke="#3f9e86" strokeWidth="2"/><path d="M18 9v9l6 4" stroke="#8fd4bf" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg><div><b>1 business day</b>Typical reply time</div></motion.div>
    <motion.div variants={item}><svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="17" fill="none" stroke="#3f9e86" strokeWidth="2"/><path d="M12 24c2-6 10-6 12 0M18 10a4 4 0 110 8 4 4 0 010-8z" stroke="#8fd4bf" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg><div><b>Real people</b>Not a ticket queue</div></motion.div>
    <motion.div variants={item}><svg viewBox="0 0 36 36" width="36" height="36"><circle cx="18" cy="18" r="17" fill="none" stroke="#3f9e86" strokeWidth="2"/><path d="M18 9l7 3v6c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-6l7-3z" stroke="#8fd4bf" strokeWidth="2.5" fill="none" strokeLinejoin="round"/></svg><div><b>PCI-aware</b>Secure handling of your statement</div></motion.div>
  </Stagger>
</div>


<Section className="feecheck" id="check">
  <div className="wrap">
    <div>
      <p className="kicker">60-second fee check</p>
      <h2>Two numbers from last month's statement tell you most of the story.</h2>
      <p className="lead">Your effective rate is everything you paid divided by everything you sold. Most owners have never seen theirs. Once you do, the conversation gets a lot shorter.</p>
      <div className="proof">
        <div><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#e6f4ef"/><path d="M12 27l6-7 5 4 6-9" stroke="#2c7a66" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b>Under 2.2%</b><span>You're in good shape. We'll confirm it and send you on your way.</span></div></div>
        <div><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#fbf1dc"/><path d="M20 12v10M20 27h.01" stroke="#b7832a" strokeWidth="2.6" strokeLinecap="round"/></svg><div><b>2.2% to 3%</b><span>Common. There's usually something worth a closer look.</span></div></div>
        <div><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#fde8e8"/><path d="M13 13l14 14M27 13L13 27" stroke="#b23a3a" strokeWidth="2.6" strokeLinecap="round"/></svg><div><b>Over 3%</b><span>You're almost certainly overpaying. A review will show you where.</span></div></div>
      </div>
    </div>

    <FeeCheck />
  </div>
</Section>


<Section className="how alt" id="how">
  <div className="wrap">
    <div className="sec-head center">
      <p className="kicker">How it works</p>
      <h2>Reviewed, explained, and switched only if it's worth it.</h2>
    </div>
    <Stagger className="steps">
      <motion.div variants={item} className="step">
        <div className="num">1</div>
        <div className="pic"><svg viewBox="0 0 320 150"><rect width="320" height="150" fill="#f3eee4"/><rect x="100" y="18" width="120" height="150" rx="6" fill="#fff" transform="rotate(-6 160 93)"/><g transform="rotate(-6 160 93)" stroke="#d3ccbe" strokeWidth="4" strokeLinecap="round"><path d="M118 42h60M118 60h84M118 78h70M118 96h84"/></g><path d="M226 110l24 24" stroke="#3f9e86" strokeWidth="8" strokeLinecap="round"/><circle cx="214" cy="98" r="22" fill="none" stroke="#3f9e86" strokeWidth="8"/></svg></div>
        <h3>Send one statement</h3>
        <p>Upload it below or email it over. We total every fee into one honest number and show our work line by line.</p>
      </motion.div>
      <motion.div variants={item} className="step">
        <div className="num">2</div>
        <div className="pic"><svg viewBox="0 0 320 150"><rect width="320" height="150" fill="#f3eee4"/><circle cx="110" cy="70" r="30" fill="#174a66"/><path d="M60 150c4-36 24-50 50-50s46 14 50 50z" fill="#174a66"/><rect x="150" y="34" width="130" height="64" rx="16" fill="#fff"/><path d="M150 80l-14 14 18-4z" fill="#fff"/><path d="M168 54h94M168 70h60" stroke="#d3ccbe" strokeWidth="5" strokeLinecap="round"/><circle cx="262" cy="70" r="6" fill="#3f9e86"/></svg></div>
        <h3>Get a straight answer</h3>
        <p>A real person walks you through what you're paying, where money slips away, and what would actually fit your business.</p>
      </motion.div>
      <motion.div variants={item} className="step">
        <div className="num">3</div>
        <div className="pic"><svg viewBox="0 0 320 150"><rect width="320" height="150" fill="#f3eee4"/><path d="M40 118h240" stroke="#d3ccbe" strokeWidth="6" strokeLinecap="round"/><g><rect x="60" y="58" width="80" height="60" rx="8" fill="#174a66"/><rect x="72" y="68" width="56" height="26" rx="4" fill="#3f9e86"/></g><path d="M150 88h36" stroke="#3f9e86" strokeWidth="6" strokeLinecap="round"/><path d="M178 76l14 12-14 12" stroke="#3f9e86" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/><rect x="200" y="46" width="70" height="72" rx="10" fill="#fff"/><rect x="210" y="56" width="50" height="34" rx="6" fill="#d9a441"/><text x="235" y="78" textAnchor="middle" fontFamily="Manrope" fontWeight="700" fontSize="14" fill="#0f2b3f">✓</text></svg></div>
        <h3>Switch only if it's worth it</h3>
        <p>If staying is your best move, we'll say so. If switching is, we handle equipment, setup and training for you.</p>
      </motion.div>
    </Stagger>
  </div>
</Section>


<Section id="solutions">
  <div className="wrap">
    <div className="sec-head">
      <p className="kicker">Solutions</p>
      <h2>Start with payments. Add the rest when you're ready.</h2>
      <p className="lead">One team behind every part of the money side of your business, so you make one call instead of six.</p>
    </div>

    <div className="sol-feature">
      <div className="dark">
        <svg className="art" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="100" cy="100" r="60" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="100" cy="100" r="30" fill="none" stroke="#fff" strokeWidth="2"/><path d="M100 10v180M10 100h180" stroke="#fff" strokeWidth="2"/></svg>
        <p className="kicker">Most businesses start here</p>
        <h3>Merchant processing</h3>
        <p>Pricing you can actually read, and a team that answers when you call.</p>
        <ul className="chk"><li>Transparent pricing options, explained in plain English</li><li>Equipment programs for qualified merchants</li><li>Fast onboarding and next-day funding</li><li>Countertop, mobile, online, invoicing and virtual terminal</li></ul>
        <A className="btn btn-light" href="contact.html#review">Review my rates</A>
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
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>SHP membership</h3><p>Preferred access across every solution, ongoing reviews included, and perks that grow over time.</p><A href="solutions.html#membership">About membership</A></motion.div>
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M12 7v10M9.5 9.5h3.5a2 2 0 010 4h-2a2 2 0 000 4h3.5" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>Employee savings app</h3><p>A retention perk for your team: simple savings tools, easy to offer, no burden on you.</p><A href="solutions.html#savings">See the app</A></motion.div>
      <motion.div variants={item} className="sol"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M8 7H4v10h4M16 7h4v10h-4M8 12h8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>ISV &amp; integrations</h3><p>Payments that meet your POS, e-commerce and invoicing where they are. Building software? We help with embedded payments.</p><A href="solutions.html#integrations">About integrations</A></motion.div>
    </Stagger>
  </div>
</Section>


<Section className="promise">
  <div className="wrap">
    <div className="text">
      <p className="kicker" style={{color:'#8fd4bf'}}>Our story</p>
      <h2>Built on one question owners kept asking.</h2>
      <p>Safe Haven began with statement reviews at kitchen tables and shop counters, and the same line from every owner: <em>"I don't know what I'm actually paying."</em> Answering that honestly became our whole business. Payments came first. Coverage, payroll, benefits and capital followed because merchants asked us to look at the rest.</p>
      <blockquote>We start with how your business actually runs, then match the solution to it. If something doesn't fit, we won't push it.<cite>The Safe Haven promise</cite></blockquote>
      <div style={{marginTop:'32px'}}><A className="btn btn-light" href="about.html">Meet the team</A></div>
    </div>
    <div className="scene" aria-hidden="true">
      
      <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0f2b3f"/><stop offset=".55" stopColor="#215f7f"/><stop offset="1" stopColor="#d9a441"/></linearGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#174a66"/><stop offset="1" stopColor="#0f2b3f"/></linearGradient>
          <linearGradient id="beam2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff3c4" stopOpacity=".55"/><stop offset="1" stopColor="#fff3c4" stopOpacity="0"/></linearGradient>
        </defs>
        <rect width="600" height="600" fill="url(#dusk)"/>
        <circle cx="430" cy="300" r="56" fill="#fbe3a2" opacity=".9"/>
        <rect y="360" width="600" height="240" fill="url(#sea)"/>
        <g stroke="#3f9e86" strokeWidth="2" fill="none" opacity=".5"><path d="M0 400c40-10 80 10 120 0s80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0"/><path d="M0 440c40-10 80 10 120 0s80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0"/><path d="M0 480c40-10 80 10 120 0s80 10 120 0 80 10 120 0 80 10 120 0 80 10 120 0"/></g>
        <path d="M60 380c60-40 140-40 200 0l20 20H40z" fill="#0f2b3f"/>
        <path d="M180 160l-24 220h88l-24-220z" fill="#f3eee4"/>
        <path d="M176 200h48M170 260h60M164 320h72" stroke="#b23a3a" strokeWidth="14"/>
        <rect x="168" y="130" width="64" height="40" rx="4" fill="#0f2b3f"/>
        <rect x="176" y="136" width="48" height="28" fill="#fff3c4"/>
        <path d="M232 150L600 60v180z" fill="url(#beam2)"/>
        <path d="M200 100l-14 30h28z" fill="#0f2b3f"/>
        <g fill="#fff" opacity=".8"><circle cx="80" cy="60" r="2"/><circle cx="140" cy="40" r="1.5"/><circle cx="300" cy="80" r="2"/><circle cx="360" cy="30" r="1.5"/><circle cx="520" cy="110" r="1.5"/><circle cx="560" cy="40" r="2"/></g>
      </svg>
    </div>
  </div>
</Section>


<Section className="serve alt" id="who">
  <div className="wrap">
    <div className="sec-head">
      <p className="kicker">Who we serve</p>
      <h2>The same transparent approach, fitted to how you operate.</h2>
    </div>

    <Stagger className="mosaic" aria-hidden="true">
      <motion.div variants={item} className="tile w2 h2"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#174a66"/><rect x="40" y="110" width="320" height="150" fill="#215f7f"/><path d="M30 110h340l-20-50H50z" fill="#b23a3a"/><g fill="#f3eee4"><path d="M50 60h32l-10 50H30zM114 60h32l-10 50H94zM178 60h32l-10 50h-32zM242 60h32l-10 50h-32zM306 60h32l-10 50h-32z"/></g><rect x="80" y="150" width="90" height="110" rx="4" fill="#fff3c4"/><rect x="230" y="150" width="90" height="110" rx="4" fill="#fff3c4"/><rect x="180" y="170" width="40" height="90" rx="3" fill="#0f2b3f"/><circle cx="212" cy="215" r="4" fill="#d9a441"/><path d="M40 260h320" stroke="#0f2b3f" strokeWidth="10"/></svg><span>Main-street shops</span></motion.div>
      <motion.div variants={item} className="tile"><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="200" height="120" fill="#2c7a66"/><path d="M60 110c0-24 10-40 40-40s40 16 40 40z" fill="#f3eee4"/><rect x="40" y="104" width="120" height="16" fill="#0f2b3f"/><path d="M140 80c14 0 16 20 0 22" stroke="#f3eee4" strokeWidth="7" fill="none"/><path d="M88 60c0-10 6-10 6-20M106 60c0-10 6-10 6-20" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"/></svg><span>Cafés</span></motion.div>
      <motion.div variants={item} className="tile"><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="200" height="120" fill="#d9a441"/><rect x="30" y="50" width="140" height="70" fill="#0f2b3f"/><rect x="30" y="20" width="60" height="30" fill="#0f2b3f"/><circle cx="60" cy="120" r="18" fill="#f3eee4"/><circle cx="140" cy="120" r="18" fill="#f3eee4"/><rect x="100" y="60" width="60" height="30" fill="#d9a441"/></svg><span>Contractors</span></motion.div>
      <motion.div variants={item} className="tile w2"><svg viewBox="0 0 400 120" preserveAspectRatio="xMidYMid slice"><rect width="400" height="120" fill="#0f2b3f"/><g fill="#215f7f"><rect x="20" y="30" width="60" height="90"/><rect x="100" y="10" width="60" height="110"/><rect x="180" y="40" width="60" height="80"/><rect x="260" y="20" width="60" height="100"/><rect x="340" y="50" width="50" height="70"/></g><g fill="#fff3c4"><rect x="30" y="40" width="10" height="10"/><rect x="50" y="60" width="10" height="10"/><rect x="110" y="20" width="10" height="10"/><rect x="130" y="40" width="10" height="10"/><rect x="190" y="50" width="10" height="10"/><rect x="270" y="30" width="10" height="10"/><rect x="290" y="70" width="10" height="10"/><rect x="350" y="60" width="10" height="10"/></g></svg><span>Enterprise &amp; multi-location</span></motion.div>
      <motion.div variants={item} className="tile"><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="200" height="120" fill="#f3eee4"/><path d="M40 120V60h120v60" fill="#174a66"/><path d="M30 60l70-40 70 40z" fill="#0f2b3f"/><g fill="#f3eee4"><rect x="56" y="72" width="10" height="48"/><rect x="80" y="72" width="10" height="48"/><rect x="110" y="72" width="10" height="48"/><rect x="134" y="72" width="10" height="48"/></g></svg><span>Municipalities</span></motion.div>
      <motion.div variants={item} className="tile"><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="200" height="120" fill="#215f7f"/><circle cx="70" cy="50" r="18" fill="#f3eee4"/><circle cx="130" cy="50" r="18" fill="#f3eee4"/><path d="M40 120c0-26 12-40 30-40s30 14 30 40zM100 120c0-26 12-40 30-40s30 14 30 40z" fill="#3f9e86"/><path d="M100 20l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" fill="#d9a441"/></svg><span>Chambers &amp; associations</span></motion.div>
      <motion.div variants={item} className="tile"><svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="200" height="120" fill="#3f9e86"/><rect x="50" y="40" width="100" height="70" rx="8" fill="#fff"/><path d="M70 64h60M70 80h40" stroke="#d3ccbe" strokeWidth="6" strokeLinecap="round"/><rect x="60" y="24" width="80" height="24" rx="6" fill="#0f2b3f"/><text x="100" y="41" textAnchor="middle" fontFamily="Manrope" fontSize="12" fontWeight="700" fill="#fff">OPEN</text></svg><span>New businesses</span></motion.div>
    </Stagger>

    <Tabs id="serve" items={SERVE} />
  </div>
</Section>



<Section>
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">From our merchants</p><h2>Every solution. Every kind of business.</h2></div>
    <Stagger className="quotes">
      <motion.figure variants={item} className="quote"><div className="stars">★★★★★</div><p>"Square was easy. Square with Safe Haven behind it was effortless, set up right the first time."</p><figcaption className="who"><div className="avatar" style={{background:'#3f9e86'}}>M</div><div><b>Café owner</b>Coffee &amp; quick service</div></figcaption></motion.figure>
      <motion.figure variants={item} className="quote"><div className="stars">★★★★★</div><p>"New contracts used to mean a cash crunch. Now growth pays for itself instead of squeezing us."</p><figcaption className="who"><div className="avatar" style={{background:'#d9a441'}}>R</div><div><b>Owner</b>Construction firm</div></figcaption></motion.figure>
      <motion.figure variants={item} className="quote"><div className="stars">★★★★★</div><p>"We opened with payments, payroll and coverage already sorted. Day one felt like day one hundred."</p><figcaption className="who"><div className="avatar" style={{background:'#174a66'}}>J</div><div><b>Founder</b>First-year startup</div></figcaption></motion.figure>
    </Stagger>
  </div>
</Section>


<Section className="partner alt" id="partners">
  <div className="wrap">
    <div>
      <p className="kicker">Partner with us</p>
      <h2>Refer a business once. Earn for as long as it stays.</h2>
      <p className="lead">Bring hand-picked payment and business solutions to your network, backed by a team that treats your referrals like their own.</p>
      <Stagger className="ptypes">
        <motion.div variants={item} className="ptype"><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#e6f4ef"/><path d="M12 28V16l8-5 8 5v12" stroke="#2c7a66" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M16 28v-6h8v6" stroke="#2c7a66" strokeWidth="2" fill="none"/></svg><div><b>Accountants, bookkeepers &amp; brokers</b><span>Direct referral partnerships for trusted advisors.</span></div></motion.div>
        <motion.div variants={item} className="ptype"><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#fbf1dc"/><path d="M11 27l6-7 5 4 7-9" stroke="#b7832a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg><div><b>ISOs &amp; sales teams</b><span>From individuals to whole operations, there's a fit.</span></div></motion.div>
        <motion.div variants={item} className="ptype"><svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="12" fill="#e4edf3"/><circle cx="15" cy="16" r="4" stroke="#174a66" strokeWidth="2" fill="none"/><circle cx="25" cy="16" r="4" stroke="#174a66" strokeWidth="2" fill="none"/><path d="M8 29c1-5 4-7 7-7s6 2 7 7M18 29c1-5 4-7 7-7s6 2 7 7" stroke="#174a66" strokeWidth="2" fill="none" strokeLinecap="round"/></svg><div><b>Chambers &amp; associations</b><span>Member benefits that also generate income.</span></div></motion.div>
      </Stagger>
      <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
        <A className="btn btn-primary" href="partners.html">Become a partner</A>
        <A className="btn btn-outline" href="login.html#partner">Partner login</A>
      </div>
    </div>
    <div className="card" aria-labelledby="pTitle">
      <h3 id="pTitle" style={{marginBottom:'4px'}}>What could your referrals be worth?</h3>
      <p style={{color:'var(--muted)',fontSize:'.93rem',marginBottom:'20px'}}>Use your own numbers. Residuals stack month over month.</p>
      <div className="field"><label htmlFor="refs">Businesses you refer per month</label><input id="refs" type="number" min="0" defaultValue="2"/></div>
      <div className="field"><label htmlFor="resid">Average monthly residual per account</label><div className="money"><span>$</span><input id="resid" type="text" inputMode="decimal" defaultValue="40"/></div></div>
      <div className="field"><label htmlFor="months">Months of referring</label><input id="months" type="number" min="1" max="60" defaultValue="12"/></div>
      <div className="growth" aria-hidden="true"><svg viewBox="0 0 400 140" id="growth"></svg></div>
      <div className="verdict" aria-live="polite" style={{marginBottom:'0'}}>
        <div className="big" id="pMonthly">$960</div>
        <p><strong>per month</strong> after <span id="mLbl">12</span> months, <span id="pYear">about $11,520 a year</span> if those accounts stay active.</p>
      </div>
      <p className="fine">Example only. Your residual depends on your partner agreement and each account's volume.</p>
    </div>
  </div>
</Section>


<Section id="faq">
  <div className="wrap">
    <div className="sec-head center"><p className="kicker">Questions</p><h2>Straight answers before you call.</h2></div>
    <Faq items={FAQ} />
  </div>
</Section>


<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Get started</p><h2>Send one statement. Get one honest number.</h2><p style={{fontSize:'1.08rem',margin:'0'}}>A real person will follow up, usually by the next business day. No obligation, and if staying put is your best move, we'll say so.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
