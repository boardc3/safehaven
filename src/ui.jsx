import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

/** Maps the static-site hrefs (page.html#hash) onto router paths. */
export function toRoute(href = '') {
  if (/^(https?:|tel:|mailto:)/.test(href)) return null
  let [page, hash] = href.split('#')
  if (page === '' && hash) return '#' + hash           // same-page anchor
  page = page.replace(/\.html$/, '')
  if (page === 'index') page = ''
  return '/' + page + (hash ? '#' + hash : '')
}

/** Anchor that becomes a router Link for internal targets. */
export function A({ href, children, ...rest }) {
  const route = toRoute(href)
  const loc = useLocation()
  if (route === null) return <a href={href} {...rest}>{children}</a>
  if (route.startsWith('#')) {
    const onClick = e => { e.preventDefault(); scrollToHash(route) ; history.replaceState(null, '', route) }
    return <a href={route} onClick={onClick} {...rest}>{children}</a>
  }
  return <Link to={route} {...rest}>{children}</Link>
}

export function scrollToHash(hash, behavior = 'smooth') {
  const el = document.getElementById(hash.slice(1))
  if (!el) return false
  const top = el.getBoundingClientRect().top + window.scrollY - 92
  window.scrollTo({ top, behavior })
  return true
}

/** Fade-and-rise once as it enters the viewport. Used for every <section>. */
export function Section({ children, className, ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.section
      className={className}
      initial={reduce ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >{children}</motion.section>
  )
}

/** Children stagger in when the group scrolls into view. */
export function Stagger({ children, className, delay = 0.11, ...rest }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className}
      initial={reduce ? false : 'hidden'} whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: delay } } }} {...rest}>
      {children}
    </motion.div>
  )
}
export const item = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}

/** Animated number: eases to the target whenever it changes. */
export function Counter({ value, format = n => n, className }) {
  const reduce = useReducedMotion()
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 120, damping: 22, mass: 0.6 })
  const text = useTransform(spring, v => format(v))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' })
  const firstValue = useRef(value)
  // count up from 0 the first time it is seen; after that (or if the value changes before it is seen) follow the value immediately
  useEffect(() => {
    if (reduce) { spring.jump(value); return }
    if (inView || value !== firstValue.current) mv.set(value)
  }, [value, inView, reduce])
  const scale = useTransform(spring, v => 1 + Math.min(0.08, Math.abs(v - value) / Math.max(1, Math.abs(value)) * 0.3))
  return <motion.span ref={ref} className={className} style={{ display: 'inline-block', scale: reduce ? 1 : scale }}>{text}</motion.span>
}

export function usePageMeta(title, desc) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name=description]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = desc
  }, [title, desc])
}

/** true one frame after mount: use as the `animate` trigger for load animations so they always play. */
export function useMounted() {
  const [m, setM] = useState(false)
  useEffect(() => { const id = requestAnimationFrame(() => setM(true)); return () => cancelAnimationFrame(id) }, [])
  return m
}

export const usd = n => '$' + Math.round(n).toLocaleString('en-US')
export const num = v => parseFloat(String(v).replace(/[^0-9.]/g, '')) || 0

/* ===================== bigger motion ===================== */

/** Heading whose words rise out of a clipping mask when it scrolls into view. */
export function H2({ children, className, as: Tag = 'h2', ...rest }) {
  const reduce = useReducedMotion()
  const text = typeof children === 'string' ? children : null
  if (!text || reduce) return <Tag className={className} {...rest}>{children}</Tag>
  const words = text.split(' ')
  const MTag = motion[Tag]
  return (
    <MTag className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }} aria-label={text} {...rest}>
      {words.map((w, i) => (
        <span key={i}><span className="mask" aria-hidden="true">
          <motion.span className="w" variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } } }}>{w}</motion.span>
        </span>{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </MTag>
  )
}

/** Cursor tilt + idle float for hero artwork. */
export function Tilt({ children, className, strength = 10, ...rest }) {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 120, damping: 18 }), sry = useSpring(ry, { stiffness: 120, damping: 18 })
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5
    rx.set(-py * strength); ry.set(px * strength)
  }
  const onLeave = () => { rx.set(0); ry.set(0) }
  if (reduce) return <div className={className} {...rest}>{children}</div>
  return (
    <motion.div className={className} style={{ rotateX: srx, rotateY: sry, transformPerspective: 1100, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }} {...rest}>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} style={{ height: '100%' }}>{children}</motion.div>
    </motion.div>
  )
}

/** Moves its child vertically at a fraction of scroll speed. */
export function Parallax({ children, speed = 0.2, className, style, ...rest }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [speed * -120, speed * 120])
  return <motion.div ref={ref} className={className} style={{ ...style, y: reduce ? 0 : y }} {...rest}>{children}</motion.div>
}

/** Marquee strip. */
export function Marquee({ items, speed = 38 }) {
  const reduce = useReducedMotion()
  const row = items.map((t, i) => <span key={i}>{t}<i aria-hidden="true" /></span>)
  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <motion.div className="track" animate={reduce ? undefined : { x: ['0%', '-50%'] }} transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
        {row}{row}
      </motion.div>
    </div>
  )
}
