'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Package, Rocket, ShieldCheck, Sparkles ,  ShoppingBag, PanelsTopLeft, Link2, Zap, Mail, BriefcaseBusiness, FolderGit2 } from 'lucide-react'

type Status = 'idle' | 'sending' | 'ok' | 'err'

/* ── Icons ── */
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
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
const ArrowIcon = () => <ArrowUpRight size={13} strokeWidth={2.5} />
const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

/* ── Cursor ── */
function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  useEffect(() => {
    const mv = (e: MouseEvent) => { pos.current.mx = e.clientX; pos.current.my = e.clientY }
    document.addEventListener('mousemove', mv)
    let raf: number
    const tick = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx - 18) * 0.12
      pos.current.ry += (pos.current.my - pos.current.ry - 18) * 0.12
      if (dotRef.current) { dotRef.current.style.left = pos.current.mx - 5 + 'px'; dotRef.current.style.top = pos.current.my - 5 + 'px' }
      if (ringRef.current) { ringRef.current.style.left = pos.current.rx + 'px'; ringRef.current.style.top = pos.current.ry + 'px' }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const on = () => { dotRef.current?.classList.add('scale-[3]', '!bg-[rgba(59,130,246,0.5)]'); ringRef.current?.classList.add('!opacity-0') }
    const off = () => { dotRef.current?.classList.remove('scale-[3]', '!bg-[rgba(59,130,246,0.5)]'); ringRef.current?.classList.remove('!opacity-0') }
    document.querySelectorAll('a,button,.hoverable').forEach(el => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    return () => { document.removeEventListener('mousemove', mv); cancelAnimationFrame(raf) }
  }, [])
  return (
    <>
      <div ref={dotRef} className="fixed w-2.5 h-2.5 bg-[#3B82F6] rounded-full pointer-events-none z-[9999] transition-transform duration-100 hidden md:block" />
      <div ref={ringRef} className="fixed w-8 h-8 border border-[#3B82F6]/40 rounded-full pointer-events-none z-[9998] hidden md:block transition-opacity duration-150" />
    </>
  )
}

/* ── Reveal ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll<HTMLElement>('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Data ── */
const MARQUEE = ['Next.js','TypeScript','React','MongoDB','Node.js','Tailwind CSS','REST APIs','NextAuth','Zustand','Zod','Vercel','Express']

const PROJECTS = [
  {
    img: '/dp.png', title: 'Fashion Stylized', year: '2026', type: 'E-Commerce Platform',
    desc: 'Full e-commerce platform with role-based auth (NextAuth), protected admin dashboard for product & order management, real-time inventory sync, transactional email via Resend, and end-to-end Zod validation.',
    highlights: [
      'Role-based access — only admins can modify products and orders',
      'Real-time inventory updates on every purchase',
      'Full admin CRUD on products, orders, and users',
    ],
    tags: ['Next.js','TypeScript','MongoDB','NextAuth','Zustand','Resend','Zod'],
    live: 'https://www.fashionstylized.store/',
    github: 'https://github.com/The-Saadhere/Fashion-Stylized',
  },
  {
  img: "/vido-project.png", title: "Vido", year: '2026', type: "Video Streaming",
  desc: "Vido is a modern video-sharing platform inspired by YouTube, built with Next.js, TypeScript, and ImageKit. It allows users to upload, stream, and share videos seamlessly, with a fast and responsive interface.",
  highlights: [
    'Video upload and streaming powered by ImageKit',
    'JWT-based authentication with NextAuth.js',
    'MongoDB + Mongoose data layer for users, videos, and metadata',
  ],
  tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'MongoDB', 'Mongoose', 'NextAuth'],
  live: "https://vido-flax.vercel.app/",
  github: "https://github.com/The-Saadhere/Vido",
},
 
  {
    img: '/urlshortener.png', title: 'MiniLink', year: '2025', type: 'SaaS Tool',
    desc: 'URL shortener with authenticated link management, per-link click analytics, and a dashboard to track all your short links in one place.',
    highlights: [],
    tags: ['Next.js','MongoDB','NextAuth'],
    live: 'https://mini-link-five.vercel.app/',
    github: 'https://github.com/The-Saadhere/MiniLink',
  },
  {
    img: '/passopp.png', title: 'PassOp', year: '2025', type: 'Browser Tool',
    desc: 'Lightweight password manager that saves, views, and manages credentials in the browser — no backend, no signup, instant access.',
    highlights: [],
    tags: ['React.js','JavaScript','LocalStorage'],
    live: 'https://pass-op-three-wine.vercel.app/',
    github: 'https://github.com/The-Saadhere/PassOP',
  },
]

const SERVICES = [
  {
    icon: <ShoppingBag size={22} strokeWidth={2} />,
    title: 'E-Commerce Stores',
    desc: 'Full online stores with product management, cart, secure checkout, order tracking, and an admin dashboard to run everything.',
    items: ['Product & inventory management','User auth + order history','Admin dashboard & analytics'],
  },
  {
    icon: <PanelsTopLeft size={22} strokeWidth={2} />,
    title: 'Web Apps & Dashboards',
    desc: 'Custom web applications with real data, role-based access, and clean UIs — built to scale from day one.',
    items: ['Role-based auth & permissions','REST API design & integration','Responsive, accessible UI'],
  },
  {
    icon: <Link2 size={22} strokeWidth={2} />,
    title: 'API & Backend Dev',
    desc: 'Fast, well-structured backends with clean endpoints, database design, validation, and email integrations.',
    items: ['MongoDB schema design','Zod validation & error handling','Transactional email via Resend'],
  },
  {
    icon: <Zap size={22} strokeWidth={2} />,
    title: 'SaaS Product Development',
    desc: 'End-to-end SaaS tools — from auth and subscriptions to usage dashboards — built to launch fast and scale with real users.',
    items: ['Authenticated multi-user dashboards','Usage/analytics tracking per user','Built to launch fast, iterate faster'],
  },
]

const SKILLS = [
  { name: 'Next.js', cat: 'Framework', wide: true },
  { name: 'TypeScript', cat: 'Language' },
  { name: 'React', cat: 'Library' },
  { name: 'Node.js', cat: 'Runtime' },
  { name: 'MongoDB', cat: 'Database' },
  { name: 'Tailwind', cat: 'Styling' },
  { name: 'NextAuth', cat: 'Auth' },
  { name: 'REST APIs', cat: 'Architecture' },
]

const TOOLS = ['Git','Vercel','Docker','Postman','ESLint','Express','Figma','Zod','Zustand']

/* ── Reusables ── */
const Tag = ({ label }: { label: string }) => (
  <span className="px-3 py-[5px] font-ibm text-[10.5px] rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 tracking-[0.04em]">
    {label}
  </span>
)

const Eyebrow = ({ children, light }: { children: string; light?: boolean }) => (
  <p className={`font-ibm text-[10.5px] tracking-[0.2em] uppercase mb-4 ${light ? 'text-[#3B82F6]' : 'text-zinc-400'}`}>
    {children}
  </p>
)

/* ══════════════ PAGE ══════════════ */
export default function Home() {
  useReveal()

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
  const btnBg = status === 'ok' ? 'bg-emerald-500 text-white' : status === 'err' ? 'bg-red-500 text-white' : 'bg-[#3B82F6] text-white hover:brightness-110'

  const inputCls = "w-full px-4 py-3.5 rounded-xl text-[14px] outline-none transition-all bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 focus:border-[#3B82F6]/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)]"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #fff; }

        /* Font classes */
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter    { font-family: 'Inter', sans-serif; }
        .font-ibm      { font-family: 'IBM Plex Mono', monospace; }

        /* Subtle page grid */
        .page-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        /* Marquee */
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .mq { animation: marquee 28s linear infinite; }
        .mq:hover { animation-play-state: paused; }

        /* Reveal */
        .reveal { opacity:0; transform:translateY(22px); transition:opacity 0.65s ease,transform 0.65s ease; }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .reveal.d1 { transition-delay:.1s }
        .reveal.d2 { transition-delay:.2s }
        .reveal.d3 { transition-delay:.3s }

        /* Photo — chamfered corner editorial feel */
        .photo-frame {
          clip-path: polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%);
          overflow: hidden;
        }

        /* Thin rule accent */
        .rule { border-top: 1px solid rgba(0,0,0,0.08); }
        .rule-light { border-top: 1px solid rgba(255,255,255,0.07); }

        /* Project card */
        .proj-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .proj-card:hover { transform: translateY(-5px); box-shadow: 0 28px 56px rgba(0,0,0,0.08); }

        /* Service card hover */
        .svc-card { transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease; }
        .svc-card:hover { border-color: #3B82F6 !important; transform: translateY(-3px); }

        /* Skill tile */
        .skill-tile { transition: transform 0.18s ease, border-color 0.18s ease; }
        .skill-tile:hover { transform: translateY(-3px); border-color: rgba(59,130,246,0.45) !important; }

        /* Accent text + line */
        .accent { color: #3B82F6; }
        .border-accent { border-color: #3B82F6; }

        /* Hero — fits within short/small laptop viewports without scrolling.
           Tailwind's clamp() above is width-driven only; these rules key off
           viewport HEIGHT so a wide-but-short screen (e.g. 1366×768 with
           browser chrome) still fits the whole hero without a scroll. */
        #hero { padding-top: clamp(72px, 14svh, 112px) !important; min-height: 100svh; }
        .hero-status { margin-bottom: clamp(10px, 2svh, 24px) !important; }
        .hero-title {
          font-size: clamp(34px, min(9vw, 9svh), 108px) !important;
          margin-bottom: clamp(0px, 0.6svh, 8px) !important;
        }
        .hero-title.hero-title-last { margin-bottom: clamp(12px, 2.4svh, 32px) !important; }
        .hero-sub { margin-bottom: clamp(14px, 2.6svh, 36px) !important; }
        .hero-cta-row { margin-bottom: clamp(10px, 1.6svh, 16px) !important; }
        .hero-cv-link { margin-bottom: clamp(12px, 2svh, 40px) !important; }
        .hero-photo-wrap {
          width: clamp(180px, 30svh, 350px) !important;
          height: clamp(230px, 39svh, 455px) !important;
        }
        @media (max-height: 760px) {
          .hero-cv-link { display: none !important; }
        }

        /* Primary CTA — distinct shape/weight from all other pill buttons */
        .cta-primary {
          border-radius: 14px;
          font-weight: 700;
          letter-spacing: 0.01em;
          box-shadow: 0 10px 26px rgba(59,130,246,0.32);
        }
        .cta-primary:hover { box-shadow: 0 14px 32px rgba(59,130,246,0.42); }
      `}</style>

      <div className="font-inter bg-white text-zinc-950 overflow-x-hidden md:cursor-none">
        <Cursor />

        {/* ══ NAV ══ */}
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 lg:px-14 py-[18px] backdrop-blur-2xl border-b border-zinc-100 bg-white/88">
          <a href="#hero" className="font-playfair font-bold text-[20px] tracking-tight text-zinc-950 no-underline italic">
            SK<span className="accent not-italic">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
            {['about','projects','services','skills'].map(id => (
              <li key={id}>
                <a href={`#${id}`} className="font-ibm text-[11px] uppercase tracking-[0.14em] text-zinc-400 no-underline transition-colors hover:text-zinc-950">{id}</a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2">
            <a href="mailto:saadkamaldev@gmail.com"
              className="hoverable font-inter text-[13px] font-medium px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-700 no-underline transition-all hover:border-zinc-950 hover:text-zinc-950">
              Email me
            </a>
            <a href="#contact"
              className="cta-primary hoverable font-inter text-[13px] px-6 py-2.5 no-underline bg-[#3B82F6] text-white transition-all hover:brightness-110 hover:-translate-y-0.5">
              Hire me
            </a>
          </div>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 text-zinc-950 bg-white">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {menuOpen && (
          <div className="fixed top-[65px] left-0 right-0 z-[99] md:hidden bg-white border-b border-zinc-100 px-5 py-5 flex flex-col gap-1">
            {['about','projects','services','skills','contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                className="font-ibm text-[11px] uppercase tracking-[0.14em] text-zinc-800 no-underline py-3 border-b border-zinc-50 last:border-0">
                {id}
              </a>
            ))}
            <a href="mailto:saadkamaldev@gmail.com"
              className="cta-primary mt-3 text-center text-[13px] py-3.5 bg-[#3B82F6] text-white no-underline">
              Email me directly
            </a>
          </div>
        )}

        {/* ══ HERO ══ */}
        <section id="hero" className="page-grid grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">

          {/* Left */}
          <div className="reveal flex flex-col justify-center px-5 sm:px-8 lg:px-14 py-10 md:py-0 relative z-10">

            {/* Status */}
            <p className="hero-status font-ibm text-[11px] tracking-[0.1em] text-zinc-400">
              Taking on freelance projects — reply within a day
            </p>

            {/* Headline — Playfair editorial style */}
            <h1 className="hero-title font-playfair font-black leading-[0.9] tracking-[-0.02em] text-zinc-950"
                style={{ fontSize: 'clamp(54px,11vw,108px)' }}>
              Saad
            </h1>
            <h1 className="hero-title font-playfair font-black leading-[0.9] tracking-[-0.02em] text-zinc-950 italic"
                style={{ fontSize: 'clamp(54px,11vw,108px)' }}>
              Kamal
            </h1>
            <h1 className="hero-title hero-title-last font-playfair font-black leading-[0.9] tracking-[-0.02em] text-zinc-950"
                style={{ fontSize: 'clamp(54px,11vw,108px)' }}>
              <span className="relative inline-block">
                Develops.
                <span className="absolute -bottom-1 left-0 right-0 h-[4px] rounded-full bg-[#3B82F6]" />
              </span>
            </h1>

            <p className="hero-sub font-inter text-[15px] sm:text-[17px] leading-[1.75] max-w-[400px] text-zinc-500">
              I&apos;d rather spend an extra day on the auth flow than ship something that looks
              fine and falls over the first time two people log in at once. Four of my projects
              are live right now, handling real signups — not just localhost demos.
            </p>

            {/* CTAs */}
            <div className="hero-cta-row flex gap-3 flex-wrap">
              <a href="#projects"
                className="hoverable inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold no-underline bg-zinc-950 text-white transition-all hover:bg-zinc-800 hover:-translate-y-0.5">
                See my work <ArrowIcon />
              </a>
              <a href="#contact"
                className="hoverable inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold no-underline border border-zinc-200 text-zinc-700 transition-all hover:border-zinc-950 hover:text-zinc-950 hover:-translate-y-0.5">
                Let&apos;s talk
              </a>
            </div>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="hero-cv-link hoverable inline-flex items-center gap-2 w-fit font-ibm text-[11px] text-zinc-400 no-underline transition-colors hover:text-zinc-950 underline underline-offset-4">
              <DownloadIcon /> Download CV
            </a>

            <div className="flex gap-2.5 mt-6">
              {[
                { href: 'https://github.com/The-Saadhere', icon: <GithubIcon />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/the-saadhere', icon: <LinkedinIcon />, label: 'LinkedIn' },
                { href: 'mailto:saadkamaldev@gmail.com', icon: <MailIcon />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  className="hoverable w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 text-zinc-400 no-underline transition-all hover:border-zinc-950 hover:text-zinc-950 hover:-translate-y-1">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative flex items-center justify-center py-8 md:py-0 overflow-hidden">
            <div className="absolute w-80 h-80 rounded-full bg-[#3B82F6]/[0.07] blur-3xl" />

            <div className="hero-photo-wrap relative">
              <div className="photo-frame absolute inset-0 border border-zinc-200">
                <Image src="/saad2.jpg" alt="Saad Kamal" fill className="object-cover" />
              </div>

              {/* Available tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-zinc-950 text-white font-ibm text-[10px] tracking-widest whitespace-nowrap shadow-lg flex items-center gap-1.5">
                Available now <Sparkles className="w-3 h-3" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ MARQUEE ══ */}
        <div className="overflow-hidden border-y border-zinc-900 bg-zinc-950">
          <div className="mq flex w-max py-[14px]">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-8 sm:px-11 font-ibm text-[10px] tracking-[0.16em] uppercase whitespace-nowrap border-r border-white/[0.06] text-white/25 hover:text-white/65 transition-colors cursor-default">
                <span className="accent text-[9px]">✦</span>{item}
              </span>
            ))}
          </div>
        </div>

        {/* ══ FREELANCE STRIP ══ */}
        <div className="bg-zinc-950 px-5 sm:px-8 lg:px-14 py-8 border-b border-white/[0.05]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="font-playfair font-bold text-white text-[20px] sm:text-[24px] italic mb-0.5">
                Need a full-stack developer for your project?
              </p>
              <p className="font-inter text-zinc-400 text-[13px]">Available for freelance and remote contracts. Fast replies guaranteed.</p>
            </div>
            <div className="flex gap-3 shrink-0 flex-wrap">
              <a href="mailto:saadkamaldev@gmail.com"
                className="cta-primary hoverable inline-flex items-center gap-2 px-6 py-3 text-[13px] no-underline bg-[#3B82F6] text-white transition-all hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap">
                Email me now <ArrowIcon />
              </a>
              <a href="https://www.linkedin.com/in/the-saadhere" target="_blank" rel="noopener noreferrer"
                className="hoverable inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold no-underline border border-white/10 text-white transition-all hover:border-[#3B82F6]/50 hover:text-[#3B82F6] hover:-translate-y-0.5 whitespace-nowrap">
                <LinkedinIcon /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* ══ ABOUT ══ */}
        <section id="about" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-32 bg-zinc-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <div className="reveal">
              <Eyebrow light>About me</Eyebrow>
              <h2 className="font-playfair font-black tracking-tight leading-[0.95] mb-6 text-white"
                  style={{ fontSize: 'clamp(36px,5vw,60px)' }}>
                I build things<br />for the <span className="accent italic">web.</span>
              </h2>
              <p className="font-inter text-[15px] sm:text-[16px] leading-[1.8] text-white/50 mb-5">
                I&apos;m based in Karachi, and I taught myself most of this by breaking things in
                production — my own projects, on my own dime, not a bootcamp sandbox. That&apos;s
                probably why I care more about the boring parts — auth, validation, error states —
                than the parts that look good in a screenshot.
              </p>
              <p className="font-inter text-[15px] sm:text-[16px] leading-[1.8] text-white/50 mb-8">
                Four of the projects below are live right now — real signups, real orders, real
                edge cases nobody warned me about. I own every layer myself, which means when
                something breaks at 2am, I&apos;m the one who gets the alert and fixes it.
              </p>
              <blockquote className="border-l-2 border-accent pl-5 font-playfair font-bold text-[18px] sm:text-[22px] text-white leading-[1.4] italic">
                &ldquo;A project isn&apos;t done when the demo works — it&apos;s done when it survives real users.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: <ShieldCheck size={18} strokeWidth={2.2} />, title: 'Auth & Security First', desc: 'Role-based access control, protected routes, secure sessions — not just a login page.' },
                { icon: <Package size={18} strokeWidth={2.2} />, title: 'Full Ownership', desc: 'DB schema, API design, frontend state, CI/CD — I own the full stack so nothing falls through.' },
                { icon: <Rocket size={18} strokeWidth={2.2} />, title: 'Ships on Time', desc: 'I build iteratively and deploy early. You always know where things stand.' },
              ].map(({ icon, title, desc }, i) => (
                <div key={title} className={`reveal d${i+1} hoverable group rounded-2xl p-6 border border-white/[0.07] bg-white/[0.03] transition-all hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/[0.04] hover:translate-x-1.5`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 bg-white/[0.06] text-white">{icon}</div>
                  <h3 className="font-playfair font-bold text-[17px] text-white mb-1.5">{title}</h3>
                  <p className="font-inter text-[13px] leading-relaxed text-white/40">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section id="projects" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-playfair font-black tracking-tight leading-[0.93] mb-3 text-zinc-950"
                style={{ fontSize: 'clamp(36px,5vw,62px)' }}>
              Featured <span className="italic accent">Projects</span>
            </h2>
            <p className="font-inter text-[15px] text-zinc-400 max-w-[440px] mb-14">
              Production apps, not experiments. Each one is live, full-stack, and built end-to-end.
            </p>

            {/* Featured card */}
            <div className="reveal proj-card mb-6 rounded-3xl overflow-hidden border border-zinc-200 bg-white grid grid-cols-1 md:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-[240px] md:min-h-0 bg-zinc-100 overflow-hidden">
                <Image src="/dp.png" alt="Fashion Stylized" fill className="object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm font-ibm text-[10px] text-zinc-400 border border-zinc-200">
                  {PROJECTS[0].year}
                </div>
              </div>
              <div className="p-7 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="font-ibm text-[10px] tracking-[0.1em] uppercase accent border border-[#3B82F6]/25 bg-[#3B82F6]/[0.07] rounded-full px-3 py-1">✦ Featured</span>
                  <span className="font-ibm text-[10px] tracking-[0.08em] uppercase text-zinc-400">E-Commerce</span>
                </div>
                <h3 className="font-playfair font-bold text-[26px] sm:text-[34px] tracking-tight leading-[1.05] mb-3 text-zinc-950">
                  Fashion Stylized
                </h3>
                <p className="font-inter text-[14px] leading-relaxed text-zinc-500 mb-5">{PROJECTS[0].desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {PROJECTS[0].highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5 text-[13px] text-zinc-700 font-inter">
                      <span className="accent mt-[2px] shrink-0">→</span>{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-7">{PROJECTS[0].tags.map(t => <Tag key={t} label={t} />)}</div>
                <div className="flex gap-3 flex-wrap">
                  <a href={PROJECTS[0].live} target="_blank" rel="noopener noreferrer"
                    className="hoverable inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold no-underline bg-zinc-950 text-white transition-all hover:bg-zinc-800 hover:-translate-y-0.5">
                    Live demo <ArrowIcon />
                  </a>
                  <a href={PROJECTS[0].github} target="_blank" rel="noopener noreferrer"
                    className="hoverable inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold no-underline bg-zinc-50 text-zinc-700 border border-zinc-200 transition-all hover:border-zinc-950 hover:text-zinc-950 hover:-translate-y-0.5">
                    <GithubIcon /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* 2-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
              {PROJECTS.slice(1).map((p, i) => (
                <div key={p.title} className={`reveal d${i+1} proj-card rounded-2xl overflow-hidden border border-zinc-200 bg-white`}>
                  <div className="relative w-full h-[200px] bg-zinc-100 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm font-ibm text-[10px] text-zinc-400 border border-zinc-200">
                      {p.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-[21px] tracking-tight mb-2 text-zinc-950">{p.title}</h3>
                    <p className="font-inter text-[13px] leading-relaxed mb-4 text-zinc-500">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">{p.tags.map(t => <Tag key={t} label={t} />)}</div>
                    <div className="flex gap-2.5 flex-wrap">
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="hoverable inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold no-underline bg-zinc-950 text-white transition-all hover:bg-zinc-800 hover:-translate-y-0.5">
                        Live <ArrowIcon />
                      </a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="hoverable inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold no-underline bg-zinc-50 text-zinc-600 border border-zinc-200 transition-all hover:border-zinc-950 hover:-translate-y-0.5">
                        <GithubIcon /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className="reveal rounded-2xl bg-zinc-950 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <p className="font-playfair font-bold text-white text-[20px] sm:text-[26px] italic mb-1">Like what you see?</p>
                <p className="font-inter text-zinc-400 text-[13px]">I&apos;m available for new projects right now. Let&apos;s build something together.</p>
              </div>
              <div className="flex gap-3 shrink-0 flex-wrap">
                <a href="#contact"
                  className="cta-primary hoverable inline-flex items-center gap-2 px-6 py-3 text-[13px] no-underline bg-[#3B82F6] text-white transition-all hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap">
                  Start a project <ArrowIcon />
                </a>
                <a href="https://github.com/The-Saadhere" target="_blank" rel="noopener noreferrer"
                  className="hoverable inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold no-underline border border-white/10 text-white transition-all hover:border-[#3B82F6]/50 hover:text-[#3B82F6] hover:-translate-y-0.5 whitespace-nowrap">
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-32 bg-zinc-50">
          <div className="max-w-6xl mx-auto">
            <Eyebrow>What I build</Eyebrow>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <h2 className="font-playfair font-black tracking-tight leading-[0.93] text-zinc-950"
                  style={{ fontSize: 'clamp(36px,5vw,62px)' }}>
                Services I <span className="italic accent">Offer</span>
              </h2>
              <a href="#contact"
                className="hoverable inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold no-underline bg-zinc-950 text-white self-start md:self-auto transition-all hover:bg-zinc-800 hover:-translate-y-0.5 shrink-0">
                Discuss your project <ArrowIcon />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map(({ icon, title, desc, items }, i) => (
                <div key={title} className={`reveal d${i % 2} svc-card rounded-2xl p-7 border border-zinc-200 bg-white`}>
                  <div className="text-[28px] mb-4">{icon}</div>
                  <h3 className="font-playfair font-bold text-[20px] text-zinc-950 mb-2">{title}</h3>
                  <p className="font-inter text-[13px] leading-relaxed text-zinc-500 mb-5">{desc}</p>
                  <ul className="flex flex-col gap-2">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-[12.5px] font-inter text-zinc-600">
                        <span className="w-4 h-4 rounded-full bg-[#3B82F6]/15 flex items-center justify-center accent shrink-0">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SKILLS ══ */}
        <section id="skills" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-32 bg-zinc-950">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[290px_1fr] gap-12 md:gap-16 items-start">

            <div className="reveal">
              <Eyebrow light>Toolkit</Eyebrow>
              <h2 className="font-playfair font-black tracking-tight leading-[0.93] mb-4 text-white"
                  style={{ fontSize: 'clamp(34px,4.5vw,54px)' }}>
                Skills &<br /><span className="accent italic">Tech</span>
              </h2>
              <p className="font-inter text-[14px] leading-[1.75] text-white/45 mb-7">
                A modern stack for building secure, scalable, production-ready web apps — front to back.
              </p>
              <a href="https://www.linkedin.com/in/the-saadhere" target="_blank" rel="noopener noreferrer"
                className="cta-primary hoverable inline-flex items-center gap-2 px-5 py-3 text-[13px] no-underline bg-[#3B82F6] text-white transition-all hover:brightness-110 hover:-translate-y-0.5">
                View LinkedIn <ArrowIcon />
              </a>
            </div>

            <div className="reveal d1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3" style={{ gridAutoRows: '86px' }}>
                {SKILLS.map(({ name, cat, wide }) => (
                  <div key={name}
                    className={`hoverable skill-tile rounded-2xl border flex flex-col items-center justify-center gap-1.5 p-4 cursor-default
                      ${wide ? 'col-span-2 bg-white/[0.07] border-white/[0.09]' : 'bg-white/[0.03] border-white/[0.06]'}`}>
                    <span className={`font-playfair font-bold text-center ${wide ? 'text-white text-[20px] sm:text-[24px]' : 'text-white/80 text-[13px] sm:text-[15px]'}`}>{name}</span>
                    <span className="font-ibm text-[9px] tracking-[0.1em] uppercase text-white/25">{cat}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                {TOOLS.map(tool => (
                  <span key={tool}
                    className="hoverable px-4 py-1.5 rounded-full font-inter text-[12px] font-medium border border-white/[0.07] bg-white/[0.03] text-white/45 cursor-default transition-all hover:-translate-y-0.5 hover:border-[#3B82F6]/40 hover:text-[#3B82F6]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-32 bg-zinc-950">
          <div className="max-w-6xl mx-auto">

            <div className="reveal mb-12 text-center">
              <Eyebrow light>Contact</Eyebrow>
              <h2 className="font-playfair font-black tracking-tight leading-[0.93] mb-4 text-white"
                  style={{ fontSize: 'clamp(36px,5vw,68px)' }}>
                Ready to work <span className="accent italic">together?</span>
              </h2>
              <p className="font-inter text-[15px] text-white/40 max-w-[460px] mx-auto">
                Have a project in mind? I&apos;m open, available, and I reply fast.
              </p>
            </div>

            {/* 3-way CTA cards */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Mail size={18} strokeWidth={2} />, label: 'Send an email', sub: 'saadkamaldev@gmail.com', href: 'mailto:saadkamaldev@gmail.com', cta: 'Email now' },
                { icon: <BriefcaseBusiness size={18} strokeWidth={2} />, label: 'Connect on LinkedIn', sub: 'For freelance inquiries', href: 'https://www.linkedin.com/in/the-saadhere', cta: 'Open LinkedIn' },
                { icon: <FolderGit2 size={18} strokeWidth={2} />, label: 'Browse my code', sub: 'github.com/The-Saadhere', href: 'https://github.com/The-Saadhere', cta: 'View GitHub' },
              ].map(({ icon, label, sub, href, cta }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="hoverable group flex flex-col gap-4 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] no-underline transition-all hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/[0.04] hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-white/[0.06] text-white">
                    {icon}
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-[16px] text-white mb-0.5">{label}</p>
                    <p className="font-ibm text-[10.5px] text-white/25 truncate">{sub}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-inter text-[12px] font-semibold accent mt-auto">
                    {cta} <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="reveal flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-white/[0.06]" />
              <span className="font-ibm text-[10px] text-white/20 tracking-widest uppercase">or fill the form</span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* Form */}
            <div className="reveal max-w-2xl mx-auto rounded-2xl p-6 sm:p-9 border border-white/[0.07] bg-white/[0.03]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {(['name','email'] as const).map(k => (
                  <div key={k} className="flex flex-col gap-1.5">
                    <label className="font-ibm text-[10.5px] tracking-[0.1em] uppercase text-white/25">
                      {k} <span className="accent">*</span>
                    </label>
                    <input type={k === 'email' ? 'email' : 'text'} value={form[k]} onChange={set(k)}
                      placeholder={k === 'email' ? 'your@email.com' : 'Your name'}
                      className={inputCls} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-ibm text-[10.5px] tracking-[0.1em] uppercase text-white/25">subject</label>
                <input type="text" value={form.subject} onChange={set('subject')} placeholder="What's this about?" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 mb-5">
                <label className="font-ibm text-[10.5px] tracking-[0.1em] uppercase text-white/25">
                  message <span className="accent">*</span>
                </label>
                <textarea rows={5} value={form.message} onChange={set('message')}
                  placeholder="Tell me about your project or opportunity…" className={inputCls} style={{ resize: 'none' }} />
              </div>
              <button onClick={handleSend} disabled={status === 'sending'}
                className={`cta-primary w-full py-4 font-playfair text-[15px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 disabled:opacity-50 ${btnBg}`}>
                <SendIcon />{btnLabel}
              </button>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="bg-zinc-950 border-t border-white/[0.05] px-5 sm:px-8 lg:px-14 py-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-playfair font-bold text-[18px] text-white italic tracking-tight">
              SK<span className="accent not-italic">.</span>
            </span>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/The-Saadhere', icon: <GithubIcon />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/the-saadhere', icon: <LinkedinIcon />, label: 'LinkedIn' },
                { href: 'mailto:saadkamaldev@gmail.com', icon: <MailIcon />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  className="hoverable w-9 h-9 flex items-center justify-center rounded-xl border border-white/[0.07] text-white/30 no-underline transition-all hover:border-[#3B82F6]/40 hover:text-[#3B82F6]">
                  {icon}
                </a>
              ))}
            </div>
            <span className="font-ibm text-[10px] text-white/20 tracking-[0.08em]">
              Built with Next.js · Tailwind
            </span>
          </div>
        </footer>

      </div>
    </>
  )
}