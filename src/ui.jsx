import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

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
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >{children}</motion.section>
  )
}

/** Children stagger in when the group scrolls into view. */
export function Stagger({ children, className, delay = 0.08, ...rest }) {
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
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] } },
}

/** Animated number: eases to the target whenever it changes. */
export function Counter({ value, format = n => n, className }) {
  const reduce = useReducedMotion()
  const mv = useMotionValue(value)
  const spring = useSpring(mv, { stiffness: 120, damping: 22, mass: 0.6 })
  const text = useTransform(spring, v => format(v))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  useEffect(() => { if (reduce) { spring.jump(value); return } ; if (inView) mv.set(value) }, [value, inView, reduce])
  useEffect(() => { if (!inView && !reduce) { mv.jump(0); spring.jump(0) } }, [])
  return <motion.span ref={ref} className={className}>{text}</motion.span>
}

export function usePageMeta(title, desc) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name=description]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = desc
  }, [title, desc])
}

export const usd = n => '$' + Math.round(n).toLocaleString('en-US')
export const num = v => parseFloat(String(v).replace(/[^0-9.]/g, '')) || 0
