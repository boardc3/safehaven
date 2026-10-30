import { A, Section, usePageMeta } from '../ui.jsx'

export default function Privacy() {
  usePageMeta('Privacy policy | Safe Haven Payments', 'How Safe Haven Payments handles the information you share with us.')
  return (
    <Section style={{ paddingTop: 72 }}>
      <div className="wrap prose">
        <p className="kicker">Legal</p>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Privacy policy</h1>
        <p className="lead">We only use your details to reply to you and to do the work you asked for.</p>
        <div className="notice" style={{ margin: '24px 0' }}>Placeholder. The full policy text should be migrated from the current safehavenpayments.com privacy page before launch; the headings below mirror its structure.</div>
        <h2>What we collect</h2>
        <p>Contact details you give us (name, business, email, phone), anything you write in a form, and any statement you choose to attach for a review.</p>
        <h2>How we use it</h2>
        <p>To reply to your request, to prepare the review or quote you asked for, and to service your account if you become a merchant or partner. We don't sell your information.</p>
        <h2>Statements and card data</h2>
        <p>Statements are used only to prepare your review. Merchant payment data is never stored on this website.</p>
        <h2>Contact</h2>
        <p>Questions about this policy: <a href="mailto:support@safehavenpayments.com">support@safehavenpayments.com</a> or <a href="tel:+18668088183">(866) 808-8183</a>. <A href="contact.html#help">Get help</A>.</p>
      </div>
    </Section>
  )
}
