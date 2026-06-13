'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────── Types ── */
type Status = 'idle' | 'sending' | 'ok' | 'err'

/* ─────────────────────────────── Icons ── */
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
)
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
  </svg>
)
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─────────────────────────────── Cursor ── */
function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current.mx = e.clientX; pos.current.my = e.clientY }
    document.addEventListener('mousemove', onMove)
    let raf: number
    const tick = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx - 18) * 0.15
      pos.current.ry += (my - pos.current.ry - 18) * 0.15
      if (cursorRef.current) { cursorRef.current.style.left = mx - 6 + 'px'; cursorRef.current.style.top = my - 6 + 'px' }
      if (ringRef.current) { ringRef.current.style.left = pos.current.rx + 'px'; ringRef.current.style.top = pos.current.ry + 'px' }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const expand = () => { cursorRef.current?.classList.add('scale-[2.5]', '!bg-[rgba(92,90,255,0.6)]'); ringRef.current?.classList.add('!opacity-0') }
    const shrink = () => { cursorRef.current?.classList.remove('scale-[2.5]', '!bg-[rgba(92,90,255,0.6)]'); ringRef.current?.classList.remove('!opacity-0') }
    const els = document.querySelectorAll('a,button,.skill-tile,.stat-block,.about-card')
    els.forEach(el => { el.addEventListener('mouseenter', expand); el.addEventListener('mouseleave', shrink) })
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor fixed w-3 h-3 bg-[#5c5aff] rounded-full pointer-events-none z-[9999] transition-transform duration-150 hidden md:block" />
      <div ref={ringRef} className="fixed w-9 h-9 border border-[#5c5aff] rounded-full pointer-events-none z-[9998] opacity-50 transition-opacity duration-200 hidden md:block" />
    </>
  )
}

/* ─────────────────────────────── Reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ─────────────────────────────── Data ── */
const MARQUEE_ITEMS = ['Next.js','React','TypeScript','MongoDB','Node.js','Tailwind CSS','REST APIs','Vercel','Docker','Full Stack Dev']

const PROJECTS = [
  {
    img: '/dp.png', alt: 'Fashion Stylized', title: 'Fashion Stylized', featured: true,
    desc: 'A full-featured e-commerce platform with product management, shopping cart, user authentication, and secure checkout with real-time inventory updates.',
    tags: ['Next.js','TypeScript','Resend','MongoDB','Zustand'],
    live: 'https://www.fashionstylized.store/', github: 'https://github.com/SaadkamalShaikhdev/fashionstylized',
  },
  {
    img: '/urlshortener.png', alt: 'MiniLink', title: 'MiniLink',
    desc: 'URL shortener with NextAuth, click analytics, and link management dashboard.',
    tags: ['Next.js','MongoDB','NextAuth'],
    live: 'https://mini-link-five.vercel.app/', github: 'https://github.com/SaadkamalShaikhdev/MiniLink',
  },
  {
    img: '/passopp.png', alt: 'PassOp', title: 'PassOp',
    desc: "Lightweight password manager with localStorage — save, view, and manage credentials right in the browser.",
    tags: ['React.js','JavaScript','LocalStorage'],
    live: 'https://pass-op-three-wine.vercel.app/', github: 'https://github.com/SaadkamalShaikhdev/PassOP',
  },
]

const SKILLS = [
  { name: 'Next.js', cat: 'Framework', featured: true },
  { name: 'React',      cat: 'Library' },
  { name: 'TypeScript', cat: 'Language' },
  { name: 'Node.js',    cat: 'Runtime' },
  { name: 'MongoDB',    cat: 'Database' },
  { name: 'Tailwind',   cat: 'Styling' },
  { name: 'REST APIs',  cat: 'Architecture' },
  { name: 'NextAuth',   cat: 'Auth' },
]

const TOOLS = ['Git','Docker','Vercel','Postman','ESLint','Express','Figma']

const STATS = [
  { num: '10+', label: 'Projects completed' },
  { num: '15+', label: 'Technologies' },
  { num: '100+', label: 'Git commits' },
  { num: '100%', label: 'Client satisfaction' },
]

const ABOUT_CARDS = [
  { icon: '⚡', title: 'Clean Code', desc: 'Clean, maintainable code that follows industry best practices and stands the test of time.' },
  { icon: '📱', title: 'Responsive Design', desc: 'Pixel-perfect interfaces that work seamlessly across every device and screen size.' },
  { icon: '🚀', title: 'Fast Performance', desc: 'Optimized web applications with fast load times and silky-smooth user experiences.' },
]

/* ─────────────────────────────── Small reusables ── */
const Tag = ({ label }: { label: string }) => (
  <span className="px-3 py-1 font-mono text-[11px] rounded-full border border-[rgba(100,100,150,0.15)] bg-[#eeedf8] text-[#2e2e40] tracking-[0.04em]">
    {label}
  </span>
)

const SectionLabel = ({ children, light }: { children: string; light?: boolean }) => (
  <div className={`s-label inline-flex items-center font-mono text-[11px] tracking-[0.14em] uppercase mb-5 ${light ? 'text-[#0cd68a]' : 'text-[#5c5aff]'}`}>
    {children}
  </div>
)

const H2 = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <h2 className={`font-[Syne] font-black tracking-tighter leading-none mb-4 text-[clamp(36px,5vw,64px)] ${light ? 'text-white' : 'text-[#0a0a0f]'}`}>
    {children}
  </h2>
)

/* ─────────────────────────────── PAGE ── */
export default function Home() {
  useReveal()

  /* contact form */
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))
  const [status, setStatus] = useState<Status>('idle')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) { alert('Please fill required fields.'); return }
    setStatus('sending')
    try {
      const res = await fetch('/api/sendmsg', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('ok'); setForm({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setStatus('idle'), 3000) }
      else throw new Error()
    } catch { setStatus('err'); setTimeout(() => setStatus('idle'), 2500) }
  }

  const btnLabel = status === 'sending' ? 'Sending…' : status === 'ok' ? '✓ Sent!' : status === 'err' ? 'Failed — try again' : 'Send Message'
  const btnBg = status === 'ok' ? 'bg-[#0cd68a]' : status === 'err' ? 'bg-[#e24b4a]' : 'bg-[#5c5aff] hover:bg-[#4442e8]'

  const inputCls = "w-full px-[18px] py-3.5 rounded-[14px] text-sm outline-none transition-all duration-200 bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-[#5c5aff] focus:bg-[rgba(92,90,255,0.05)]"

  /* ── render ── */
  return (
    <div className="font-[DM_Sans] bg-[#f8f7ff] text-[#0a0a0f] overflow-x-hidden md:cursor-none">
      <Cursor />

      {/* ══════════════════ NAV ══════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 sm:py-5 backdrop-blur-xl border-b border-[rgba(100,100,150,0.15)] bg-[rgba(248,247,255,0.7)]">
        <a href="#hero" className="font-[Syne] font-black text-lg tracking-tighter text-[#0a0a0f] no-underline">
          saad<span className="text-[#5c5aff]">.</span>dev
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {['about','projects','skills'].map(id => (
            <li key={id}>
              <a href={`#${id}`} className="text-[13px] font-medium uppercase tracking-widest text-[#6b6b85] no-underline transition-colors hover:text-[#0a0a0f]">{id}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="text-[13px] font-medium px-5 py-2.5 rounded-full bg-[#0a0a0f] text-[#f8f7ff] no-underline transition-all hover:bg-[#5c5aff] hover:scale-[1.04]">
              Get in touch
            </a>
          </li>
        </ul>

        {/* mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[rgba(100,100,150,0.15)] text-[#0a0a0f] bg-white"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 right-0 z-[99] md:hidden bg-[#f8f7ff] border-b border-[rgba(100,100,150,0.15)] px-5 py-6 flex flex-col gap-4">
          {['about','projects','skills','contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-[#0a0a0f] no-underline py-2 border-b border-[rgba(100,100,150,0.08)]"
            >
              {id}
            </a>
          ))}
        </div>
      )}

      {/* ══════════════════ HERO ══════════════════ */}
      <section id="hero" className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-20 relative overflow-hidden bg-[#f8f7ff]">
        <div className="hero-grid absolute inset-0" />

        {/* left */}
        <div className="reveal flex flex-col justify-center px-5 sm:px-8 lg:px-12 py-12 md:py-20 relative z-10">
          <div className="eyebrow inline-flex items-center font-mono text-xs tracking-widest uppercase mb-7 text-[#5c5aff]">
            Available for opportunities
          </div>
          <h1 className="font-[Syne] font-black leading-[0.95] tracking-tighter mb-6 text-[#0a0a0f]"
              style={{ fontSize: 'clamp(44px,11vw,96px)' }}>
            Saad<br />Kamal<br /><span className="grad">Builds.</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] leading-relaxed max-w-[440px] mb-11 text-[#6b6b85]">
            Full Stack Developer crafting modern, scalable web experiences.
            Open to freelance projects and remote internship opportunities.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium no-underline bg-[#0a0a0f] text-[#f8f7ff] transition-all hover:bg-[#5c5aff] hover:-translate-y-0.5">
              View my work →
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium no-underline border border-[rgba(100,100,150,0.15)] text-[#0a0a0f] transition-all hover:border-[#5c5aff] hover:text-[#5c5aff] hover:-translate-y-0.5">
              Let&apos;s talk
            </a>
          </div>
          <div className="flex gap-3 mt-11">
            {[
              { href: 'https://github.com/SaadkamalShaikhdev', icon: <GithubIcon />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/saadkamal-shaikh-887449398/', icon: <LinkedinIcon />, label: 'LinkedIn' },
              { href: 'mailto:saadkamalshaikhdev@gmail.com', icon: <MailIcon />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                 className="w-11 h-11 flex items-center justify-center rounded-xl border border-[rgba(100,100,150,0.15)] bg-white text-[#6b6b85] no-underline transition-all hover:border-[#5c5aff] hover:text-[#5c5aff] hover:-translate-y-1">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* right — photo */}
        <div className="relative flex items-center justify-center overflow-hidden py-10 md:py-0">
          <div className="anim-f1 absolute w-[300px] h-[300px] rounded-full pointer-events-none"
               style={{ background: 'radial-gradient(circle,rgba(92,90,255,0.15) 0%,transparent 70%)', top: -50, left: -80 }} />
          <div className="anim-f2 absolute w-[240px] h-[240px] rounded-full pointer-events-none"
               style={{ background: 'radial-gradient(circle,rgba(255,92,138,0.12) 0%,transparent 70%)', bottom: -40, right: -60 }} />
          <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px]">
            <div className="blob-frame absolute inset-0 overflow-hidden border-2 border-[rgba(92,90,255,0.2)]">
              <Image src="/saad2.jpg" alt="Saad Kamal" fill className="object-cover" style={{ filter: 'grayscale(15%)' }} />
            </div>
            <div className="anim-f3c absolute hidden sm:block rounded-[18px] px-5 py-4 border border-[rgba(100,100,150,0.15)] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
                 style={{ left: -30, bottom: 80 }}>
              <div className="font-[Syne] font-black text-[28px] leading-none text-[#5c5aff]">1+</div>
              <div className="text-xs mt-0.5 text-[#6b6b85]">Years experience</div>
            </div>
            <div className="anim-f3b absolute hidden sm:block rounded-[18px] px-5 py-4 border border-[rgba(100,100,150,0.15)] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
                 style={{ right: -20, top: 60 }}>
              <div className="font-[Syne] font-black text-[28px] leading-none text-[#5c5aff]">10+</div>
              <div className="text-xs mt-0.5 text-[#6b6b85]">Projects shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div className="overflow-hidden border-t border-b border-white/5 bg-[#0a0a0f]">
        <div className="anim-marquee flex w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}
                  className="inline-flex items-center gap-3 px-5 sm:px-9 py-[14px] sm:py-[18px] font-mono text-xs tracking-widest uppercase whitespace-nowrap border-r border-white/[0.08] text-white/35 transition-colors hover:text-white/80 cursor-default">
              <span className="text-[#5c5aff] text-[10px]">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[120px] bg-[#0a0a0f] relative">
        <SectionLabel>About me</SectionLabel>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* text */}
          <div className="reveal">
            <H2 light>I build things<br />for the <span className="grad">web.</span></H2>
            <p className="text-[15px] sm:text-[17px] leading-[1.75] text-white/65 mb-5">
              As a passionate full-stack developer, I transform ideas into reality through elegant code and intuitive design.
              My journey has been driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-[15px] sm:text-[17px] leading-[1.75] text-white/65">
              Through hands-on project development, I&apos;ve focused on modern web technologies and best practices.
              Each project is an opportunity to learn and push boundaries.
            </p>
            <div className="quote-card relative font-[Syne] font-bold text-[18px] sm:text-[22px] text-white leading-[1.3] p-6 sm:p-7 mt-8 rounded-[20px] border border-white/[0.08] bg-white/[0.03]">
              &ldquo;From concept to deployment — I enjoy owning the full lifecycle of a product.&rdquo;
            </div>
          </div>

          {/* cards */}
          <div className="reveal rd2 flex flex-col gap-4">
            {ABOUT_CARDS.map(({ icon, title, desc }) => (
              <div key={title}
                   className="about-card rounded-[20px] p-6 sm:p-7 border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-[rgba(92,90,255,0.4)] hover:bg-[rgba(92,90,255,0.05)] hover:translate-x-1.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3.5 bg-[rgba(92,90,255,0.15)]">{icon}</div>
                <h3 className="font-[Syne] font-bold text-[18px] text-white mb-1.5">{title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PROJECTS ══════════════════ */}
      <section id="projects" className="px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[120px] bg-[#f8f7ff]">
        <SectionLabel>Selected work</SectionLabel>
        <H2>Featured <span className="grad">Projects</span></H2>
        <p className="text-[15px] sm:text-[16px] leading-relaxed max-w-[520px] mb-12 sm:mb-16 text-[#6b6b85]">
          A curated selection of my most significant work in full-stack development.
        </p>

        {/* featured card */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 rounded-[28px] overflow-hidden border border-[rgba(100,100,150,0.15)] bg-white mb-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <div className="relative overflow-hidden bg-[#eeedf8] min-h-[220px] sm:min-h-[260px]">
            <Image src="/dp.png" alt="Fashion Stylized" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,transparent 60%,rgba(255,255,255,0.3))' }} />
          </div>
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 font-mono text-[11px] rounded-full mb-4 border border-[rgba(92,90,255,0.2)] bg-[rgba(92,90,255,0.1)] text-[#5c5aff] tracking-[0.08em] uppercase w-fit">
              ✦ Featured project
            </span>
            <h3 className="font-[Syne] font-black text-[26px] sm:text-[34px] tracking-tighter leading-[1.05] mb-3.5 text-[#0a0a0f]">Fashion Stylized</h3>
            <p className="text-[15px] leading-relaxed mb-6 text-[#6b6b85]">
              A full-featured e-commerce platform with product management, shopping cart, user authentication, and secure checkout with real-time inventory updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">{['Next.js','TypeScript','Resend','MongoDB','Zustand'].map(t => <Tag key={t} label={t} />)}</div>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.fashionstylized.store/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-medium no-underline bg-[#0a0a0f] text-white transition-all hover:bg-[#5c5aff] hover:-translate-y-0.5">
                Live demo ↗
              </a>
              <a href="https://github.com/SaadkamalShaikhdev/fashionstylized" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-medium no-underline bg-[#eeedf8] text-[#0a0a0f] border border-[rgba(100,100,150,0.15)] transition-all hover:border-[#5c5aff] hover:text-[#5c5aff] hover:-translate-y-0.5">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* 2-col grid */}
        <div className="reveal rd1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.slice(1).map(({ img, alt, title, desc, tags, live, github }) => (
            <div key={title}
                 className="rounded-[24px] overflow-hidden border border-[rgba(100,100,150,0.15)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
              <div className="relative w-full h-[200px] bg-[#eeedf8]">
                <Image src={img} alt={alt} fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-[Syne] font-black text-[20px] sm:text-[22px] tracking-tight mb-2.5 text-[#0a0a0f]">{title}</h3>
                <p className="text-sm leading-relaxed mb-5 text-[#6b6b85]">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">{tags.map(t => <Tag key={t} label={t} />)}</div>
                <div className="flex gap-3 flex-wrap">
                  <a href={live} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-medium no-underline bg-[#0a0a0f] text-white transition-all hover:bg-[#5c5aff] hover:-translate-y-0.5">
                    Live ↗
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-medium no-underline bg-[#eeedf8] text-[#0a0a0f] border border-[rgba(100,100,150,0.15)] transition-all hover:border-[#5c5aff] hover:text-[#5c5aff] hover:-translate-y-0.5">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="reveal rd2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {STATS.map(({ num, label }) => (
            <div key={label}
                 className="stat-block text-center rounded-[24px] py-6 sm:py-8 px-4 sm:px-5 border border-[rgba(100,100,150,0.15)] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#5c5aff]">
              <div className="grad-num font-[Syne] font-black text-[32px] sm:text-[44px] tracking-[-0.04em] leading-none mb-1.5">{num}</div>
              <div className="text-[12px] sm:text-[13px] text-[#6b6b85]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SKILLS ══════════════════ */}
      <section id="skills" className="px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[120px] bg-[#eeedf8]">
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-16 items-start">

          {/* left */}
          <div className="reveal">
            <SectionLabel>Toolkit</SectionLabel>
            <H2>Skills &<br /><span className="grad">Tech</span></H2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#6b6b85]">
              A modern toolkit for building scalable, production-ready web applications from front to back.
            </p>
          </div>

          {/* bento */}
          <div className="reveal rd1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ gridAutoRows: '90px' }}>
              {SKILLS.map(({ name, cat, featured }) => (
                <div key={name}
                     className={`skill-tile relative rounded-[20px] border flex flex-col items-center justify-center gap-1.5 p-4 sm:p-5 overflow-hidden transition-all duration-300 cursor-pointer
                       ${featured ? 'col-span-2 bg-[#0a0a0f] border-transparent skill-feat' : 'bg-white border-[rgba(100,100,150,0.15)]'}
                       hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(92,90,255,0.15)]`}>
                  <span className={`s-name font-[Syne] font-bold relative z-10 text-center transition-colors duration-300 ${featured ? 'text-white text-[20px] sm:text-[24px]' : 'text-[#0a0a0f] text-[14px] sm:text-[15px]'}`}>
                    {name}
                  </span>
                  <span className={`s-cat font-mono text-[10px] tracking-[0.08em] uppercase relative z-10 transition-colors duration-300 ${featured ? 'text-white/40' : 'text-[#6b6b85]'}`}>
                    {cat}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5 p-5 sm:p-6 mt-3 rounded-[20px] border border-[rgba(100,100,150,0.15)] bg-white">
              {TOOLS.map(tool => (
                <span key={tool}
                      className="px-[18px] py-2 rounded-full text-[13px] font-medium border border-[rgba(100,100,150,0.15)] bg-[#f8f7ff] text-[#2e2e40] cursor-default transition-all hover:-translate-y-0.5 hover:border-[#5c5aff] hover:text-[#5c5aff]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-[120px] bg-[#0a0a0f]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">

          {/* left */}
          <div className="reveal">
            <SectionLabel light>Contact</SectionLabel>
            <H2 light>Let&apos;s<br /><span className="grad">Connect.</span></H2>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] text-white/45 mb-10">
              Have a project in mind or just want to say hi? I&apos;m always open to new opportunities and conversations.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: 'mailto:saadkamaldev@gmail.com', icon: '✉', label: 'Email', value: 'saadkamaldev@gmail.com', link: true },
                { href: 'tel:+923212563790', icon: '📞', label: 'Phone', value: '+92 321 256 3790', link: true },
                { href: null, icon: '📍', label: 'Location', value: 'Orangi Town, Karachi', link: false },
              ].map(({ href, icon, label, value, link }) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[17px] flex-shrink-0 bg-[rgba(92,90,255,0.15)]">{icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/30">{label}</div>
                      <div className="text-sm mt-0.5 text-white/80 truncate">{value}</div>
                    </div>
                    {link && <span className="text-white/25 text-lg">↗</span>}
                  </>
                )
                return href ? (
                  <a key={label} href={href}
                     className="flex items-center gap-4 px-5 py-4 rounded-[16px] border border-white/[0.07] bg-white/[0.02] no-underline transition-all duration-200 hover:border-[rgba(92,90,255,0.4)] hover:bg-[rgba(92,90,255,0.06)] hover:translate-x-1">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 px-5 py-4 rounded-[16px] border border-white/[0.07] bg-white/[0.02]">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>

          {/* form */}
          <div className="reveal rd2 rounded-[28px] p-6 sm:p-10 border border-white/[0.07] bg-white/[0.03]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {(['name','email'] as const).map(k => (
                <div key={k} className="flex flex-col gap-2">
                  <label className="font-mono text-[12px] font-medium tracking-[0.06em] uppercase text-white/40">{k}</label>
                  <input type={k === 'email' ? 'email' : 'text'} value={form[k]} onChange={set(k)}
                         placeholder={k === 'email' ? 'your@email.com' : 'Your name'}
                         className={inputCls} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-mono text-[12px] font-medium tracking-[0.06em] uppercase text-white/40">subject</label>
              <input type="text" value={form.subject} onChange={set('subject')} placeholder="How can I help?" className={inputCls} />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-mono text-[12px] font-medium tracking-[0.06em] uppercase text-white/40">message</label>
              <textarea rows={5} value={form.message} onChange={set('message')} placeholder="Tell me about your project..." className={inputCls} style={{ resize: 'none' }} />
            </div>
            <button onClick={handleSend} disabled={status === 'sending'}
                    className={`w-full py-4 rounded-[14px] font-[Syne] font-bold text-[15px] text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-60 ${btnBg}`}>
              <SendIcon />
              {btnLabel}
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}