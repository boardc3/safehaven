import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'
import { motion, useReducedMotion } from 'framer-motion'

export default function Careers() {
  usePageMeta('Join the Team | Safe Haven Payments', 'People over quotas. Residual protection and succession planning for seasoned payments professionals, mentorship and financial bridge support for people new to the industry.')
  return (<>
<Section className="page-hero">
  <div className="wrap">
    <div>
      <p className="crumbs"><A href="about.html">About</A> / Careers</p>
      <h1>People over quotas.</h1>
      <p className="lead">Whether you're a seasoned payments professional seeking true residual protection and succession planning, or new to the industry looking for dedicated mentorship and financial bridge support, you've found the right home.</p>
      <div className="hero-ctas"><A className="btn btn-glass" href="contact.html#careers">Apply or schedule a call</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
    </div>
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 500 400">
        <rect width="500" height="400" fill="#174a66"/>
        <path d="M0 400C100 300 160 320 250 240s150-120 250-170V400z" fill="#215f7f"/>
        <path d="M30 380C120 300 170 310 250 230s150-110 230-150" stroke="#d9a441" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="1 18"/>
        <g><circle cx="60" cy="360" r="24" fill="#fbf8f2"/><circle cx="60" cy="352" r="9" fill="#174a66"/><path d="M44 376c2-10 8-14 16-14s14 4 16 14z" fill="#174a66"/></g>
        <g><circle cx="250" cy="232" r="24" fill="#fbf8f2"/><circle cx="250" cy="224" r="9" fill="#174a66"/><path d="M234 248c2-10 8-14 16-14s14 4 16 14z" fill="#174a66"/></g>
        <g><circle cx="440" cy="90" r="30" fill="#d9a441"/><circle cx="440" cy="80" r="11" fill="#0f2b3f"/><path d="M420 110c2-12 10-17 20-17s18 5 20 17z" fill="#0f2b3f"/></g>
        <path d="M440 44l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="#fbf8f2"/>
      </svg>
    </div>
  </div>
</Section>

<Section>
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Why reps stay</p><h2>We are former sales reps and industry leaders.</h2><p className="lead">We understand the real ups and downs of growth, and we're here to support your long-term success from your first deal through retirement.</p></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinejoin="round"/></svg></div><h3>Protection through retirement</h3><p>Retire with a succession plan. A dedicated retirement team to protect what you built, local boots approved by you, and true generational beneficiary protections, not a book purchase.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 18l6-6 4 4 6-8" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></div><h3>Career growth coaching</h3><p>We understand what growth looks like, the true ups and downs through the process, because we did it as reps. Career coaches, not quota managers. People, not PIPs.</p></motion.div>
      <motion.div variants={item} className="feature"><div className="ic"><svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="9" stroke="#2c7a66" strokeWidth="1.8" fill="none"/><path d="M12 7v10M9.5 9.5h3.5a2 2 0 010 4h-2a2 2 0 000 4h3.5" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg></div><h3>New to the industry? We invest in people</h3><p>The industry needs new talent. Learn how we manage the financial pay gap between your first client and your hundredth: retroactive schedules, not milestones.</p></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="alt">
  <div className="wrap">
    <div className="sec-head"><p className="kicker">Partners</p><h2>Bringing a team, partnering, or just needing more?</h2></div>
    <Stagger className="grid3">
      <motion.div variants={item} className="feature"><h3>Becoming a partner</h3><p>ISOs, agents and referral partners with their own book. See the programs on the partners page.</p><A href="partners.html">Partner programs</A></motion.div>
      <motion.div variants={item} className="feature"><h3>Team transitions</h3><p>Moving a whole operation? We handle merchant migration, residual mapping and the paperwork, with your merchants kept whole.</p><A href="contact.html#careers">Talk about a transition</A></motion.div>
      <motion.div variants={item} className="feature"><h3>Growth guidance</h3><p>Already placed but stuck? A conversation with people who've been there costs nothing.</p><A href="contact.html#careers">Schedule a call</A></motion.div>
    </Stagger>
  </div>
</Section>

<Section className="cta-band">
  <div className="wrap">
    <div><p className="kicker" style={{color:'#8fd4bf'}}>Join us</p><h2>Seasoned payments professional or just starting out.</h2><p style={{margin:'0'}}>Discover what we can do for you. Apply, or schedule a call with someone who did the job.</p></div>
    <div className="acts"><A className="btn btn-glass" href="contact.html#careers">Get started</A><A className="btn btn-outline" href="tel:+18668088183">Call (866) 808-8183</A></div>
  </div>
</Section>
  </>)
}
