import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { A, Section, usePageMeta } from '../ui.jsx'

export default function Login() {
  usePageMeta('Log in | Safe Haven Payments', 'Merchant and partner sign-in for Safe Haven Payments.')
  const { hash } = useLocation()
  const [kind, setKind] = useState(hash === '#partner' ? 'partner' : 'merchant')
  useEffect(() => { setKind(hash === '#partner' ? 'partner' : 'merchant') }, [hash])
  const [sent, setSent] = useState(false)
  const copy = kind === 'merchant'
    ? ['Merchant login', 'Statements, deposits, equipment and support for your account.']
    : ['Partner login', 'Sign in to reach your applications, forms and partner resources.']

  return (
    <Section style={{ paddingTop: 72, minHeight: '70vh' }}>
      <div className="wrap">
        <div className="login-wrap">
          <div style={{ textAlign: 'center', marginBottom: 26 }}>
            <p className="kicker">Safe Haven knowledge hub</p>
            <h1 style={{ fontSize: '2.2rem' }}>{copy[0]}</h1>
            <p className="lead" style={{ margin: '0 auto' }}>{copy[1]}</p>
          </div>
          <div className="card">
            <div className="login-tabs" role="tablist">
              {['merchant', 'partner'].map(k => (
                <button key={k} role="tab" aria-selected={kind === k} onClick={() => { setKind(k); history.replaceState(null, '', k === 'partner' ? '#partner' : ' ') }} style={{ position: 'relative' }}>
                  {kind === k && <motion.span layoutId="login-pill" style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 999, boxShadow: '0 2px 8px rgba(15,43,63,.12)' }} transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  <span style={{ position: 'relative' }}>{k === 'merchant' ? 'Merchant' : 'Partner / rep'}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key={kind} onSubmit={e => { e.preventDefault(); setSent(true) }} initial={{ opacity: 0, x: kind === 'merchant' ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                  <div className="field"><label htmlFor="l-user">Email or username</label><input id="l-user" type="text" autoComplete="username" required /></div>
                  <div className="field"><label htmlFor="l-pass">Password</label><input id="l-pass" type="password" autoComplete="current-password" required /></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0 18px' }}>
                    <label className="check"><input type="checkbox" /> Keep me signed in</label>
                    <a href="#" onClick={e => e.preventDefault()} style={{ fontSize: '.9rem', fontWeight: 600 }}>Forgot password?</a>
                  </div>
                  <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Sign in</button>
                  <p className="note">{kind === 'merchant' ? <>Not a merchant yet? <A href="contact.html#review">Get a free statement review</A></> : <>Not a rep yet? <A href="careers.html">Join the team</A></>}</p>
                </motion.form>
              ) : (
                <motion.div key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="notice">
                  This is a design prototype. Sign-in is handled by the existing Safe Haven portal and will be connected at launch. <a href="#" onClick={e => { e.preventDefault(); setSent(false) }}>Back</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="note">Secure sign in. Merchant payment data is never stored on this website. Trouble signing in? <A href="contact.html#help">Get help</A></p>
        </div>
      </div>
    </Section>
  )
}
