#!/usr/bin/env python3
"""Post-processes converted page JSX: swaps interactive blocks for components and
wraps grid children in staggered motion elements. Uses a tiny tag walker, not regex soup."""
import re, pathlib
P = pathlib.Path(__file__).resolve().parent.parent / 'src' / 'pages'
TAG = re.compile(r'<(/?)([a-zA-Z][\w.]*)((?:[^>"{]|"[^"]*"|\{\{[^}]*\}\}|\{[^}]*\})*?)(/?)>')

def element_end(s, start):
    """Given index of an element's opening '<', return index just past its closing tag."""
    depth = 0
    for m in TAG.finditer(s, start):
        if m.group(4) == '/':
            if depth == 0: return m.end()
            continue
        if m.group(1) == '/':
            depth -= 1
            if depth == 0: return m.end()
        else:
            depth += 1
    raise ValueError('unbalanced')

def direct_children(s, open_start):
    """Yields (start,end) spans of the direct child elements of the element opening at open_start."""
    m = TAG.match(s, open_start); pos = m.end(); end = element_end(s, open_start)
    out = []
    while True:
        m2 = TAG.search(s, pos)
        if not m2 or m2.start() >= end - 1: break
        if m2.group(1) == '/': pos = m2.end(); continue
        ce = element_end(s, m2.start())
        out.append((m2.start(), ce)); pos = ce
    return out

def motionize(s, elem_span, tag_override=None):
    a, b = elem_span
    m = TAG.match(s, a); tag = m.group(2)
    mt = 'motion.' + tag
    body = s[a:b]
    body = body.replace('<' + tag, '<' + mt + ' variants={item}', 1)
    if body.rstrip().endswith('</' + tag + '>'):
        body = body[:body.rfind('</' + tag + '>')] + '</' + mt + '>'
    return s[:a] + body + s[b:]

def stagger(s, selector_re):
    """For every element whose opening tag matches selector_re, make it <Stagger> and motion-ize its children."""
    while True:
        m = re.search(selector_re, s)
        if not m: break
        a = m.start(); b = element_end(s, a)
        kids = direct_children(s, a)
        for ka, kb in reversed(kids):
            s = motionize(s, (ka, kb))
        b = element_end(s, a)
        open_tag = TAG.match(s, a)
        tag = open_tag.group(2)
        new_open = '<Stagger' + open_tag.group(3) + '>'
        s = s[:a] + new_open + s[open_tag.end():b - len('</' + tag + '>')] + '</Stagger>' + s[b:]
    return s

def cut(s, start, end, repl):
    i = s.index(start); j = s.index(end, i) + len(end)
    return s[:i] + repl + s[j:]

def ensure_imports(s, names, comp=None):
    s = s.replace("import { A, Section, usePageMeta } from '../ui.jsx'",
                  "import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'\nimport { motion, useReducedMotion } from 'framer-motion'")
    if comp: s = s.replace("from 'framer-motion'\n", "from 'framer-motion'\nimport { " + comp + " } from '../components.jsx'\n", 1)
    return s


EXTRA = r"""
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
"""

GRIDS = r'<div className="(steps|sol-grid|quotes|grid[234]|timeline|values|team|stats|ptypes|segments)"'

for f in sorted(P.glob('*.jsx')):
    if f.name in ('Contact.jsx', 'Login.jsx', 'Privacy.jsx'): continue
    s = f.read_text()
    if 'Stagger' in s: continue  # already processed
    comp = None
    if f.name == 'Index.jsx':
        s = cut(s, '<div className="receipt">', '<div className="stamp">3.20% effective</div>\n      </div>', '<Receipt />')
        s = cut(s, '<div className="card" aria-labelledby="calcTitle">', "See my real number</A>\n    </div>", '<FeeCheck />')
        i = s.index('<div className="tabs" role="tablist"'); j = s.index('</div>\n  </div>\n</Section>', i)
        s = s[:i] + '<Tabs id="serve" items={SERVE} />\n' + s[j+len('</div>\n'):]
        i = s.index('<div className="faq">'); j = s.index('</div>\n  </div>\n</Section>', i)
        s = s[:i] + '<Faq items={FAQ} />\n' + s[j+len('</div>\n'):]
        s = s.replace("<h1>Find out what you're <em>really</em> paying to accept cards.</h1>", "<HeroTitle />")
        s = stagger(s, r'<div className="mosaic" aria-hidden="true">')
        s = stagger(s, r'<div className="trust" aria-label="Why owners trust us">\n  <div className="wrap">'.replace('\n  <div className="wrap">', '')) if False else s
        # trust strip: stagger the inner .wrap
        i = s.index('<div className="trust" aria-label="Why owners trust us">')
        k = s.index('<div className="wrap">', i)
        s = s[:k] + s[k:].replace('<div className="wrap">', '<div className="wrap" data-stagger>', 1)
        s = stagger(s, r'<div className="wrap" data-stagger>').replace('<Stagger data-stagger>', '<Stagger className="wrap">')
        s = s.replace('\nexport default function Index()', EXTRA + '\nexport default function Index()')
        comp = 'Receipt, FeeCheck, Tabs, Faq'
    if f.name == 'Partners.jsx':
        s = cut(s, '<div className="card" aria-labelledby="pTitle">', "each account's volume.</p>\n    </div>", '<PartnerCalc />')
        comp = 'PartnerCalc'
    if f.name == 'Payroll.jsx':
        s = cut(s, '<div className="card">', "for your headcount.</p>\n    </div>", '<PayrollEstimate />')
        comp = 'PayrollEstimate'
    s = stagger(s, GRIDS)
    s = ensure_imports(s, None, comp)
    f.write_text(s)
    print('animated', f.name)
