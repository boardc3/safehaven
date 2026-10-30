import { useLocation } from 'react-router-dom'
import { A, Section, usePageMeta } from '../ui.jsx'
import { LeadForm } from '../components.jsx'

export default function Contact() {
  usePageMeta('Contact | Safe Haven Payments', 'Get your free statement review, reach support, or ask about partnering or joining the team. Call (866) 808-8183, Mon–Fri 8–5, Sat 8–12.')
  const { hash } = useLocation()
  const need = { '#partner': 'partner', '#careers': 'careers', '#support': 'support', '#help': 'support' }[hash] || 'processing'
  const heading = {
    partner: ['Partner with us', 'Tell us about your network.', 'A partnerships lead follows up within one business day with the program that fits.'],
    careers: ['Join the team', 'Apply, or schedule a call.', 'Tell us where you are in your career. Someone who did the job will call you back.'],
    support: ['Get help', "Tell us what happened.", 'Having trouble with a login, a form or an application? The Safe Haven support team will get back to you. Prefer email? Write to support@safehavenpayments.com.'],
    processing: ['Get started', 'Get your free statement review.', 'Tell us a little about your business. A real person will follow up, usually by the next business day.'],
  }[need]

  return (<>
    <Section className="review" id="review" style={{ paddingTop: 72 }}>
      <div className="wrap">
        <div id="support">
          <p className="kicker">{heading[0]}</p>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>{heading[1]}</h1>
          <p className="lead">{heading[2]}</p>
          <ul className="contact-list">
            <li><span className="ic"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="#174a66" strokeWidth="1.8" fill="none" strokeLinejoin="round" /></svg></span><div><b>Call</b><a href="tel:+18668088183">(866) 808-8183</a></div></li>
            <li><span className="ic"><svg viewBox="0 0 24 24" width="22" height="22"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#174a66" strokeWidth="1.8" fill="none" /><path d="M3 8l9 6 9-6" stroke="#174a66" strokeWidth="1.8" fill="none" /></svg></span><div><b>Email</b><a href="mailto:support@safehavenpayments.com">support@safehavenpayments.com</a></div></li>
            <li><span className="ic"><svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="9" stroke="#174a66" strokeWidth="1.8" fill="none" /><path d="M12 7v5l3 2" stroke="#174a66" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg></span><div><b>Office hours</b>Mon–Fri 8am–5pm, Sat 8am–12pm, Sun closed</div></li>
            <li id="help"><span className="ic"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M10 17l5-5-5-5M15 12H3" stroke="#174a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 4h5a2 2 0 012 2v12a2 2 0 01-2 2h-5" stroke="#174a66" strokeWidth="1.8" fill="none" /></svg></span><div><b>Already a merchant?</b><A href="login.html">Merchant login</A> or pick "Existing account" in the form</div></li>
          </ul>
          <div className="person"><div className="avatar">SH</div><div><b>Your review is done by a person, not a bot.</b><span>Every statement is read line by line by someone on our team.</span></div></div>
        </div>
        <LeadForm key={need} initialNeed={need} />
      </div>
    </Section>

    <Section className="alt">
      <div className="wrap">
        <div className="sec-head"><p className="kicker">How can we help?</p><h2>One partner for payments, and everything money touches.</h2><p className="lead">Whether you're just starting out or managing a large enterprise, you deserve a partner who understands your business as well as you do. We believe in total transparency, honest reviews, and solutions that actually fit your operations. If you're ready to stop guessing at your costs and start growing with a team that has your back, we're ready to help.</p></div>
        <div className="grid4">
          <div className="feature"><h3>Business owners</h3><p>Free statement review, then payroll, coverage and capital if they fit.</p><A href="contact.html#review">Start a review</A></div>
          <div className="feature"><h3>Current merchants</h3><p>Login help, equipment, chargebacks, statements. Call, or send the form with "Existing account".</p><A href="login.html">Merchant login</A></div>
          <div className="feature"><h3>Partners</h3><p>ISOs, accountants, chambers and associations. Tell us about your network.</p><A href="contact.html#partner">Partner with us</A></div>
          <div className="feature"><h3>Reps and teams</h3><p>Seasoned or new to the industry, apply or schedule a call.</p><A href="contact.html#careers">Join the team</A></div>
        </div>
      </div>
    </Section>
  </>)
}
