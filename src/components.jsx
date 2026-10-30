import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { A, Counter, usd, num, useMounted } from './ui.jsx'

const ease = [0.2, 0.7, 0.2, 1]

/* ---------- Hero statement that tallies itself ---------- */
export function Receipt() {
  const reduce = useReducedMotion()
  const lines = [
    ['Interchange & assessments', '$812.40'],
    ['Processor markup', '$196.00'],
    ['PCI non-compliance', '$49.95', true],
    ['Statement & batch fees', '$38.70', true],
    ['"Regulatory" surcharge', '$183.15', true],
  ]
  const row = { hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }
  const go = useMounted() || reduce
  return (
    <motion.div className="receipt-wrap" initial={reduce ? false : { opacity: 0, y: 60, rotate: -6 }} animate={go ? { opacity: 1, y: 0, rotate: -2 } : { opacity: 0, y: 60, rotate: -6 }} transition={{ duration: 0.9, ease, delay: 0.35 }}>
      <motion.div animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, 0.6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}>
        <motion.div className="receipt" initial={reduce ? false : 'hidden'} animate={go ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.26, delayChildren: 1 } } }}>
          <div className="head"><b>Monthly statement</b><span>Oct 2026</span></div>
          {lines.map(([k, v, hid]) => (
            <motion.div key={k} className={'line' + (hid ? ' hidden-fee' : '')} variants={row}>
              {hid && <motion.span className="sweep" aria-hidden="true" variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.5, ease, delay: 0.25 } } }} />}
              <span className="k">{k}</span><span>{v}</span>
            </motion.div>
          ))}
          <motion.div className="total" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}><b>What you really paid</b><span className="amt">$1,280.20</span></motion.div>
          <motion.div className="stamp" variants={{ hidden: { opacity: 0, scale: 2.4, rotate: 8 }, show: { opacity: 1, scale: [2.4, 0.92, 1.04, 1], rotate: [8, 8, 6, 8], transition: { duration: 0.55, ease: 'easeOut', times: [0, 0.5, 0.75, 1] } } }}>3.20% effective</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

/* ---------- Fee check ---------- */
export function FeeCheck() {
  const [vol, setVol] = useState('500,000')
  const [fees, setFees] = useState('16,000')
  const [cut, setCut] = useState(0.5)
  const v = num(vol), f = num(fees)
  const rate = v > 0 ? f / v * 100 : 0
  const pct = Math.max(0, Math.min(100, (rate - 1.5) / 3 * 100))
  let verdict
  if (v <= 0) verdict = <>Enter your monthly card sales to see your rate.</>
  else if (rate < 2.2) verdict = <><strong>Looks healthy.</strong> About {usd(f * 12)} a year. We'd confirm it and send you on your way.</>
  else if (rate < 3) verdict = <><strong>Worth a closer look.</strong> That's about {usd(f * 12)} a year in processing costs.</>
  else verdict = <><strong>Likely overpaying.</strong> That's about {usd(f * 12)} a year in processing costs.</>
  return (
    <div className="card" aria-labelledby="calcTitle">
      <h3 id="calcTitle" style={{ marginBottom: 4 }}>Quick fee check</h3>
      <p style={{ color: 'var(--muted)', fontSize: '.93rem', marginBottom: 22 }}>Illustration only. Your free review gives you the real figure.</p>
      <div className="field"><label htmlFor="vol">Total card sales last month</label><div className="money"><span>$</span><input id="vol" type="text" inputMode="decimal" value={vol} onChange={e => setVol(e.target.value)} autoComplete="off" /></div></div>
      <div className="field"><label htmlFor="fees">Total fees charged that month</label><div className="money"><span>$</span><input id="fees" type="text" inputMode="decimal" value={fees} onChange={e => setFees(e.target.value)} autoComplete="off" /></div></div>
      <div className="gauge">
        <div className="bar">
          <motion.div className="pin" animate={{ left: pct + '%' }} transition={{ type: 'spring', stiffness: 140, damping: 20 }} aria-hidden="true" />
          <input className="slider" type="range" min="1.5" max="4.5" step="0.01" value={Math.max(1.5, Math.min(4.5, rate || 1.5))}
            aria-label="Effective rate" onChange={e => { const r = +e.target.value; const base = v > 0 ? v : 500000; if (v <= 0) setVol('500,000'); setFees(Math.round(base * r / 100).toLocaleString('en-US')) }} />
        </div>
        <div className="ticks"><span>1.5%</span><span>2.5%</span><span>3.5%</span><span>4.5%+</span></div>
        <p className="fine" style={{ margin: '6px 0 0' }}>Drag the dial to try a rate, or type your real numbers above.</p>
      </div>
      <div className="verdict" aria-live="polite">
        <div className="big"><Counter value={rate} format={n => n.toFixed(2)} /><small>%</small></div>
        <p>{verdict}</p>
      </div>
      <div className="seg" role="group" aria-label="Rate reduction to illustrate">
        {[0.25, 0.5, 0.75].map(c => <button key={c} type="button" aria-pressed={cut === c} onClick={() => setCut(c)}>−{c.toFixed(2)}%</button>)}
      </div>
      <p className="savings">Every {cut.toFixed(2)}% you shave off is worth <strong><Counter value={v * 12 * cut / 100} format={usd} /></strong> a year.</p>
      <A className="btn btn-glass" style={{ width: '100%' }} href="contact.html#review">See my real number</A>
    </div>
  )
}

/* ---------- Partner residual calculator ---------- */
export function PartnerCalc() {
  const [refs, setRefs] = useState(2)
  const [resid, setResid] = useState('40')
  const [months, setMonths] = useState(12)
  const m = Math.min(60, Math.max(1, num(months) || 1))
  const monthly = num(refs) * m * num(resid)
  const W = 400, H = 140, pad = 8
  const line = `M${pad} ${H - pad} L${W - pad} ${pad}`
  const area = `${line} L${W - pad} ${H - pad} L${pad} ${H - pad} Z`
  return (
    <div className="card" aria-labelledby="pTitle">
      <h3 id="pTitle" style={{ marginBottom: 4 }}>What could your referrals be worth?</h3>
      <p style={{ color: 'var(--muted)', fontSize: '.93rem', marginBottom: 20 }}>Use your own numbers. Residuals stack month over month.</p>
      <div className="field"><label htmlFor="refs">Businesses you refer per month</label><input id="refs" type="number" min="0" value={refs} onChange={e => setRefs(e.target.value)} /></div>
      <div className="field"><label htmlFor="resid">Average monthly residual per account</label><div className="money"><span>$</span><input id="resid" type="text" inputMode="decimal" value={resid} onChange={e => setResid(e.target.value)} /></div></div>
      <div className="field"><label htmlFor="months">Months of referring</label><input id="months" type="number" min="1" max="60" value={months} onChange={e => setMonths(e.target.value)} /></div>
      <div className="growth" aria-hidden="true">
        <svg viewBox="0 0 400 140">
          <defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3f9e86" stopOpacity=".35" /><stop offset="1" stopColor="#3f9e86" stopOpacity="0" /></linearGradient></defs>
          <motion.path d={area} fill="url(#gg)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6 }} />
          <motion.path d={line} fill="none" stroke="#2c7a66" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease }} />
          <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 14 }} style={{ transformOrigin: `${W - pad}px ${pad}px` }}>
            <circle cx={W - pad} cy={pad} r="11" fill="#2c7a66" opacity=".2" /><circle cx={W - pad} cy={pad} r="6" fill="#2c7a66" />
          </motion.g>
          <text x={pad} y={H + 4} fontFamily="Manrope" fontSize="11" fill="#6b7682" fontWeight="600">Month 1</text>
          <text x={W - pad} y={H + 4} textAnchor="end" fontFamily="Manrope" fontSize="11" fill="#6b7682" fontWeight="600">Month {m}</text>
        </svg>
      </div>
      <div className="verdict" aria-live="polite" style={{ marginBottom: 0 }}>
        <div className="big"><Counter value={monthly} format={usd} /></div>
        <p><strong>per month</strong> after {m} months, about {usd(monthly * 12)} a year if those accounts stay active.</p>
      </div>
      <p className="fine">Example only. Your residual depends on your partner agreement and each account's volume.</p>
    </div>
  )
}

/* ---------- Payroll time estimate ---------- */
export function PayrollEstimate() {
  const [emp, setEmp] = useState(8)
  const [runs, setRuns] = useState(26)
  const hours = Math.max(0, num(emp)) * runs * 0.75
  const filings = 12 + num(emp) * 2
  return (
    <div className="card">
      <div className="field"><label htmlFor="emp">Employees and contractors</label><input id="emp" type="number" min="1" value={emp} onChange={e => setEmp(e.target.value)} /></div>
      <div className="field"><label htmlFor="runs">Pay runs per year</label>
        <select id="runs" value={runs} onChange={e => setRuns(+e.target.value)}>
          <option value="12">Monthly (12)</option><option value="24">Semi-monthly (24)</option><option value="26">Biweekly (26)</option><option value="52">Weekly (52)</option>
        </select></div>
      <div className="verdict"><div className="big"><Counter value={hours} format={n => Math.round(n).toLocaleString('en-US')} /></div><p><strong>hours a year</strong> spent running payroll by hand, plus around {filings} separate tax filings and forms to get right.</p></div>
      <A className="btn btn-glass" style={{ width: '100%' }} href="contact.html#review">Get a payroll quote</A>
      <p className="fine">Rough estimate based on typical time per run. Your free quote shows real pricing for your headcount.</p>
    </div>
  )
}

/* ---------- Tabs with a sliding pill ---------- */
export function Tabs({ items, id = 'tabs' }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  const onKey = e => {
    if (e.key === 'ArrowRight') setI((i + 1) % items.length)
    if (e.key === 'ArrowLeft') setI((i - 1 + items.length) % items.length)
  }
  return (<>
    <div className="tabs" role="tablist" aria-label="Business types" onKeyDown={onKey}>
      {items.map((t, k) => (
        <button key={t.label} role="tab" id={`${id}-t${k}`} aria-selected={i === k} aria-controls={`${id}-p${k}`} tabIndex={i === k ? 0 : -1} onClick={() => setI(k)} style={{ position: 'relative' }}>
          {i === k && <motion.span layoutId={id + '-pill'} className="pill-bg" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }} />}
          <span style={{ position: 'relative' }}>{t.label}</span>
        </button>
      ))}
    </div>
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={i} className="panel" role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`}
        initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.28, ease }}>
        {items[i].panel}
      </motion.div>
    </AnimatePresence>
  </>)
}

/* ---------- FAQ with animated height ---------- */
export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()
  return (
    <div className="faq">
      {items.map(([q, a], k) => (
        <div className={'qa' + (open === k ? ' open' : '')} key={q}>
          <button className="q" aria-expanded={open === k} onClick={() => setOpen(open === k ? -1 : k)}>{q}<span className="plus" aria-hidden="true" /></button>
          <AnimatePresence initial={false}>
            {open === k && (
              <motion.div key="a" initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} style={{ overflow: 'hidden' }}>
                <p>{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

/* ---------- Lead / contact form (prototype) ---------- */
export function LeadForm({ initialNeed = 'processing', kind = 'review' }) {
  const [done, setDone] = useState(false)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const submit = e => {
    e.preventDefault()
    const fd = new FormData(e.target); const err = {}
    if (!String(fd.get('name') || '').trim()) err.name = true
    if (!/^\S+@\S+\.\S+$/.test(String(fd.get('email') || ''))) err.email = true
    setErrors(err)
    if (Object.keys(err).length) { e.target.querySelector(err.name ? '#f-name' : '#f-email').focus(); return }
    setDone(true)
  }
  const needs = [['processing', 'Card processing'], ['square', 'Square'], ['insurance', 'Insurance'], ['payroll', 'Payroll & benefits'], ['capital', 'Capital'], ['support', 'Existing account'], ['partner', 'Partnering'], ['careers', 'Joining the team']]
  return (
    <div className="card">
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.form key="f" data-kind={kind} onSubmit={submit} noValidate exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <div className="form-grid">
              <div className="field"><label htmlFor="f-name">Your name <span className="req">*</span></label><input id="f-name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} style={errors.name ? { borderColor: '#b23a3a' } : undefined} /></div>
              <div className="field"><label htmlFor="f-biz">Business name</label><input id="f-biz" name="business" type="text" autoComplete="organization" /></div>
              <div className="field"><label htmlFor="f-email">Email <span className="req">*</span></label><input id="f-email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} style={errors.email ? { borderColor: '#b23a3a' } : undefined} /></div>
              <div className="field"><label htmlFor="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autoComplete="tel" /></div>
              <fieldset className="field full"><legend>What can we help with?</legend>
                <div className="pills">
                  {needs.map(([v, l]) => <label key={v}><input type="checkbox" name="need" value={v} defaultChecked={v === initialNeed} /> {l}</label>)}
                </div>
              </fieldset>
              <div className="field full"><label className="drop" htmlFor="f-file"><input id="f-file" name="statement" type="file" accept=".pdf,image/*" onChange={e => setFile(e.target.files[0] || null)} />
                <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 16V5M8 9l4-4 4 4" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="#2c7a66" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
                <span>{file ? <><strong>Attached:</strong> {file.name}</> : <><strong>Attach a statement</strong> (optional), as a PDF or photo</>}</span></label></div>
              <div className="field full"><label htmlFor="f-msg">Anything we should know?</label><textarea id="f-msg" name="message" rows="3" placeholder="Number of locations, current processor, best time to call…" /></div>
              <input className="hp" type="text" name="hp_url" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            </div>
            <button className="btn btn-glass" type="submit" style={{ width: '100%', marginTop: 8 }}>Request my free review</button>
            <p className="form-note">No obligation. We only use your details to reply. <A href="privacy.html">Privacy policy</A></p>
          </motion.form>
        ) : (
          <motion.div key="s" className="success" role="status" style={{ display: 'block' }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, ease }}>
            <motion.div className="big" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 16 }}>
              <svg viewBox="0 0 24 24" width="34" height="34"><motion.path d="M5 12.5l4.5 4.5L19 8" stroke="#2c7a66" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35, duration: 0.4 }} /></svg>
            </motion.div>
            <h3>Thanks, we've got it.</h3>
            <p style={{ color: 'var(--ink-2)' }}>A member of our team will reach out shortly. Need us sooner? Call <a href="tel:+18668088183">(866) 808-8183</a>.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PageHero() { return null }
