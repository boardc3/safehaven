import { A, Section, Stagger, item, usePageMeta, H2, Tilt, Parallax, Marquee } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function WhoWeServe() {
  usePageMeta('Who We Serve | Safe Haven Payments', 'New businesses, franchises, multi-entity groups, enterprise, municipalities and chambers of commerce. The same transparent approach, fitted to how you operate.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="index.html">Home</A> / Who we serve</p>
      <H2 as="h1">The same transparent approach, fitted to how you operate.</H2>
      <p className="lead">Whether you're opening your first location or running a hundred, you deserve a partner who understands your business as well as you do. Here's how that looks for each kind of operation.</p>
      <div className="hero-ctas"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
    </div>
    <Tilt className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice"><rect width="500" height="400" fill="#174a66"/><rect x="40" y="170" width="420" height="230" fill="#215f7f"/><path d="M30 170h440l-24-70H54z" fill="#b23a3a"/><g fill="#f3eee4"><path d="M54 100h40l-12 70H42zM134 100h40l-12 70h-40zM214 100h40l-12 70h-40zM294 100h40l-12 70h-40zM374 100h40l-12 70h-40z"/></g><rect x="90" y="220" width="110" height="180" rx="4" fill="#fff3c4"/><rect x="300" y="220" width="110" height="180" rx="4" fill="#fff3c4"/><rect x="225" y="245" width="50" height="155" rx="3" fill="#0f2b3f"/><circle cx="266" cy="325" r="5" fill="#d9a441"/><rect x="40" y="394" width="420" height="6" fill="#0f2b3f"/><g fill="#d9a441"><rect x="104" y="240" width="30" height="40" rx="4"/><rect x="146" y="250" width="40" height="30" rx="4"/><rect x="314" y="236" width="36" height="44" rx="4"/><rect x="360" y="246" width="36" height="34" rx="4"/></g></svg>
    </Tilt>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="tabs" role="tablist" aria-label="Jump to a business type" style={{marginBottom:'40px'}}>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#new">New businesses</A>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#franchises">Franchises</A>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#groups">Multi-entity groups</A>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#enterprise">Enterprise</A>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#municipalities">Municipalities</A>
      <A role="presentation" className="btn btn-outline" style={{padding:'11px 18px',fontSize:'.93rem'}} href="#chambers">Chambers of commerce</A>
    </div>
    <Stagger className="segments">
      <motion.div variants={item} className="segment" id="new">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#3f9e86"/><rect x="100" y="90" width="200" height="140" rx="10" fill="#fff"/><path d="M130 130h120M130 160h80M130 190h100" stroke="#d3ccbe" strokeWidth="8" strokeLinecap="round"/><rect x="120" y="50" width="160" height="50" rx="10" fill="#0f2b3f"/><text x="200" y="83" textAnchor="middle" fontFamily="Manrope" fontSize="22" fontWeight="700" fill="#fff">OPEN</text><circle cx="330" cy="200" r="30" fill="#d9a441"/><path d="M318 200l8 8 16-16" stroke="#0f2b3f" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <div className="body">
          <p className="kicker">New businesses</p>
          <H2>Open with the money side already sorted.</H2>
          <p>Starting out is exciting, but it's often where businesses make their costliest mistakes. We help you build a solid foundation from day one, taking care of payments, insurance, payroll and benefits so you don't have to figure it out as you go.</p>
          <ul className="chk"><li><b>Day-one readiness.</b> Everything operational immediately.</li><li><b>Room to grow.</b> A setup that evolves as your revenue increases.</li><li><b>Expert guidance.</b> Avoid setup traps that cost money in the long run.</li></ul>
          <A className="btn btn-primary" href="contact.html#review">Plan my launch</A>
        </div>
      </motion.div>
      <motion.div variants={item} className="segment" id="franchises">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#d9a441"/><g fill="#fff"><rect x="40" y="120" width="90" height="100" rx="6"/><rect x="155" y="120" width="90" height="100" rx="6"/><rect x="270" y="120" width="90" height="100" rx="6"/></g><g fill="#b23a3a"><path d="M34 120h102l-8-30H42zM149 120h102l-8-30h-86zM264 120h102l-8-30h-86z"/></g><g fill="#0f2b3f"><rect x="72" y="160" width="26" height="60" rx="2"/><rect x="187" y="160" width="26" height="60" rx="2"/><rect x="302" y="160" width="26" height="60" rx="2"/></g><g fill="#3f9e86"><rect x="48" y="134" width="20" height="20" rx="3"/><rect x="163" y="134" width="20" height="20" rx="3"/><rect x="278" y="134" width="20" height="20" rx="3"/></g><path d="M85 60h230" stroke="#0f2b3f" strokeWidth="4" strokeDasharray="10 8"/><circle cx="85" cy="60" r="10" fill="#0f2b3f"/><circle cx="200" cy="60" r="10" fill="#0f2b3f"/><circle cx="315" cy="60" r="10" fill="#0f2b3f"/></svg></div>
        <div className="body">
          <p className="kicker">Franchises</p>
          <H2>Every location runs the same playbook.</H2>
          <p>Consistency is the engine of a successful franchise. We provide uniform setup, pricing and reporting across every one of your locations, ensuring that each store, and each manager, is running the same efficient playbook.</p>
          <ul className="chk"><li><b>Standardized reporting.</b> Consolidated data for easier group management.</li><li><b>Unified support.</b> Every location gets the same reliable service level.</li><li><b>Scalable solutions.</b> Onboarding new locations is seamless and repeatable.</li></ul>
          <A className="btn btn-primary" href="contact.html#review">Franchise solutions</A>
        </div>
      </motion.div>
      <motion.div variants={item} className="segment" id="groups">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#215f7f"/><circle cx="200" cy="130" r="40" fill="#d9a441"/><g fill="#fbf8f2"><circle cx="90" cy="70" r="26"/><circle cx="310" cy="70" r="26"/><circle cx="90" cy="190" r="26"/><circle cx="310" cy="190" r="26"/></g><g stroke="#3f9e86" strokeWidth="4"><path d="M200 130L90 70M200 130l110-60M200 130L90 190M200 130l110 60"/></g><text x="200" y="137" textAnchor="middle" fontFamily="Fraunces" fontSize="18" fill="#0f2b3f">1 team</text></svg></div>
        <div className="body">
          <p className="kicker">Multi-entity groups</p>
          <H2>One team across the whole group.</H2>
          <p>Several entities, one relationship. Consolidated statement reviews, group-wide reporting and a single point of contact who knows every entity, so nobody has to re-explain the structure.</p>
          <ul className="chk"><li><b>Consolidated statement reviews</b> across every entity and processor.</li><li><b>Group-wide reporting</b> with entity-level detail when you need it.</li><li><b>One team</b> for payments, payroll, coverage and capital.</li></ul>
          <A className="btn btn-primary" href="contact.html#review">Request a group review</A>
        </div>
      </motion.div>
      <motion.div variants={item} className="segment" id="enterprise">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#0f2b3f"/><g fill="#215f7f"><rect x="30" y="80" width="60" height="180"/><rect x="110" y="40" width="70" height="220"/><rect x="200" y="100" width="60" height="160"/><rect x="280" y="60" width="90" height="200"/></g><g fill="#fff3c4"><rect x="42" y="96" width="12" height="12"/><rect x="66" y="130" width="12" height="12"/><rect x="124" y="60" width="12" height="12"/><rect x="150" y="100" width="12" height="12"/><rect x="124" y="150" width="12" height="12"/><rect x="214" y="120" width="12" height="12"/><rect x="236" y="170" width="12" height="12"/><rect x="296" y="80" width="12" height="12"/><rect x="330" y="120" width="12" height="12"/><rect x="296" y="170" width="12" height="12"/><rect x="340" y="200" width="12" height="12"/></g></svg></div>
        <div className="body">
          <p className="kicker">Enterprise</p>
          <H2>Scale without the runaround.</H2>
          <p>High-volume operations with complex requirements get security reviews, integration support and a dedicated account team, with pricing that stays transparent as the volume grows.</p>
          <ul className="chk"><li><b>Integrations and security reviews</b> handled with your IT and compliance teams.</li><li><b>High-volume processing</b> with interchange optimization.</li><li><b>Dedicated account team</b> with a named lead.</li></ul>
          <A className="btn btn-primary" href="contact.html#review">Talk to our enterprise team</A>
        </div>
      </motion.div>
      <motion.div variants={item} className="segment" id="municipalities">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#f3eee4"/><path d="M80 260V130h240v130" fill="#174a66"/><path d="M60 130l140-80 140 80z" fill="#0f2b3f"/><g fill="#f3eee4"><rect x="110" y="150" width="20" height="110"/><rect x="160" y="150" width="20" height="110"/><rect x="220" y="150" width="20" height="110"/><rect x="270" y="150" width="20" height="110"/></g><rect x="60" y="130" width="280" height="12" fill="#d9a441"/><circle cx="200" cy="95" r="14" fill="#d9a441"/></svg></div>
        <div className="body">
          <p className="kicker">Municipalities</p>
          <H2>Accountable payments for public services.</H2>
          <p>Public-sector payment acceptance with the transparency your community expects: clear, auditable pricing and reporting built for oversight, online and at the counter.</p>
          <ul className="chk"><li><b>Online and in-person payments</b> for permits, utilities, fees and fines.</li><li><b>Clear, auditable pricing</b> that survives a public records request.</li><li><b>Reporting for oversight</b> by department and fund.</li></ul>
          <A className="btn btn-primary" href="contact.html#review">Contact our public-sector team</A>
        </div>
      </motion.div>
      <motion.div variants={item} className="segment" id="chambers">
        <div className="pic"><svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#2c7a66"/><g fill="#f3eee4"><circle cx="120" cy="100" r="30"/><circle cx="200" cy="90" r="30"/><circle cx="280" cy="100" r="30"/></g><g fill="#3f9e86"><path d="M70 260c0-60 22-90 50-90s50 30 50 90zM150 260c0-60 22-90 50-90s50 30 50 90zM230 260c0-60 22-90 50-90s50 30 50 90z"/></g><path d="M200 20l8 16 18 3-13 12 3 18-16-8-16 8 3-18-13-12 18-3z" fill="#d9a441"/></svg></div>
        <div className="body">
          <p className="kicker">Chambers of commerce</p>
          <H2>A member benefit you can stand behind.</H2>
          <p>Real value for the businesses you represent, plus revenue for your chamber. Members get free statement reviews and preferred access to every solution; the chamber earns on the accounts that stay.</p>
          <ul className="chk"><li><b>Free statement reviews</b> for every member.</li><li><b>Preferred access</b> to payments, payroll, coverage and capital.</li><li><b>A local team that answers</b>, at your events and on the phone.</li></ul>
          <A className="btn btn-primary" href="partners.html">See association partnerships</A>
        </div>
      </motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Don't see your business?</p><H2>Most of our merchants didn't either. Call us.</H2><p style={{margin:'0'}}>Cafés, contractors, clinics, nonprofits. If you accept cards, a free review applies.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#review">Get my free review</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
