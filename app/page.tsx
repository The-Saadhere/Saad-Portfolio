'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

type Status = 'idle' | 'sending' | 'ok' | 'err'

const EMAIL = 'saadkamaldev@gmail.com'
const GITHUB = 'https://github.com/The-Saadhere'
const LINKEDIN = 'https://www.linkedin.com/in/the-saadhere'

const PROJECTS = [
  {
    img: '/dp.png', title: 'Fashion Stylized', year: '2026',
    desc: 'A full online store. Customers browse, check out and track orders; admins manage products, orders and users from a protected dashboard. Inventory updates on every purchase, and order emails go out through Resend.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'NextAuth', 'Zustand', 'Resend', 'Zod'],
    live: 'https://www.fashionstylized.store/',
    github: 'https://github.com/The-Saadhere/Fashion-Stylized',
  },
  {
    img: '/vido-project.png', title: 'Vido', year: '2026',
    desc: 'A video-sharing site in the spirit of YouTube. Users upload and stream videos through ImageKit, sign in with NextAuth, and everything is stored in MongoDB.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth'],
    live: 'https://vido-flax.vercel.app/',
    github: 'https://github.com/The-Saadhere/Vido',
  },
  {
    img: '/urlshortener.png', title: 'MiniLink', year: '2025',
    desc: 'A URL shortener with a login, a dashboard for your links, and click counts for each one.',
    tags: ['Next.js', 'MongoDB', 'NextAuth'],
    live: 'https://mini-link-five.vercel.app/',
    github: 'https://github.com/The-Saadhere/MiniLink',
  },
  {
    img: '/passopp.png', title: 'PassOp', year: '2025',
    desc: 'A small password manager that runs entirely in the browser. No backend, no signup.',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    live: 'https://pass-op-three-wine.vercel.app/',
    github: 'https://github.com/The-Saadhere/PassOP',
  },
]

const SERVICES = [
  ['Online stores', 'Products, cart, checkout, order tracking, and an admin dashboard to run it all.'],
  ['Web apps and dashboards', 'Custom apps with real data, user roles and permissions, and interfaces that work on a phone.'],
  ['APIs and backends', 'MongoDB schemas, validated endpoints, sensible error handling, and email sending.'],
  ['SaaS products', 'Multi-user tools with accounts and per-user usage tracking, built to launch quickly.'],
]

const STACK = [
  ['Frontend', 'Next.js, React, TypeScript, Tailwind CSS, Zustand'],
  ['Backend', 'Node.js, Express, REST APIs, MongoDB, Zod, NextAuth'],
  ['Tooling', 'Git, Vercel, Docker, Postman, ESLint, Figma'],
]

const PRINCIPLES = [
  ['Access control', 'Roles, protected routes and secure sessions, not just a login page.'],
  ['One owner', 'Database, API, frontend state and deployment all go through me, so nothing falls between people.'],
  ['Early and often', 'I deploy early and in small steps, so you can always see where things stand.'],
]

const Arrow = () => <ArrowUpRight size={14} strokeWidth={2.2} />

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))
  const [status, setStatus] = useState<Status>('idle')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSend = async () => {
    if (!form.name || !form.email || !form.message) { alert('Please fill in your name, email and message.'); return }
    setStatus('sending')
    try {
      const res = await fetch('/api/sendmsg', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setStatus('ok'); setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch { setStatus('err'); setTimeout(() => setStatus('idle'), 2500) }
  }

  const btnLabel = status === 'sending' ? 'Sending…' : status === 'ok' ? 'Message sent' : status === 'err' ? 'Failed. Try again' : 'Send message'
  const btnBg = status === 'ok' ? 'bg-emerald-500' : status === 'err' ? 'bg-red-500' : 'bg-[#3B82F6] hover:brightness-110'
  const inputCls = 'w-full px-4 py-3 rounded-lg text-[15px] outline-none bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:border-[#3B82F6] focus-visible:ring-2 focus-visible:ring-[#3B82F6]/40'
  const labelCls = 'text-[13px] text-white/60'
  const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,800&family=Instrument+Sans:wght@400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; }
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Instrument Sans', sans-serif; }
        @keyframes rise { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .rise { animation: rise .7s ease both; }
        .rise-2 { animation-delay: .12s; }
        .rise-3 { animation-delay: .24s; }
        @media (prefers-reduced-motion: reduce) { .rise { animation: none; } html { scroll-behavior: auto; } }
      `}</style>

      <div className="font-body bg-white text-zinc-950 overflow-x-hidden">
        {/* NAV */}
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-14 py-4 bg-white/90 backdrop-blur border-b border-zinc-100">
          <a href="#top" className={`font-display font-bold text-[20px] no-underline text-zinc-950 ${focus}`}>
            Saad Kamal<span className="text-[#3B82F6]">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none text-[14px]">
            {['projects', 'services', 'about', 'contact'].map(id => (
              <li key={id}><a href={`#${id}`} className={`capitalize no-underline text-zinc-500 hover:text-zinc-950 ${focus}`}>{id}</a></li>
            ))}
          </ul>
          <a href="#contact" className={`hidden md:inline-block text-[14px] font-semibold px-5 py-2.5 rounded-lg no-underline bg-[#3B82F6] text-white hover:brightness-110 ${focus}`}>
            Hire me
          </a>
          <button onClick={() => setMenuOpen(o => !o)} aria-expanded={menuOpen} aria-label="Toggle menu"
            className={`md:hidden text-[14px] font-medium px-4 py-2 rounded-lg border border-zinc-200 bg-white ${focus}`}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
        {menuOpen && (
          <div className="fixed top-[65px] inset-x-0 z-40 md:hidden bg-white border-b border-zinc-100 px-5 py-3 flex flex-col">
            {['projects', 'services', 'about', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="capitalize no-underline text-zinc-800 py-3 border-b border-zinc-100 last:border-0">{id}</a>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="top" className="px-5 sm:px-8 lg:px-14 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
            <div>
              <p className="rise text-[15px] text-zinc-500 mb-4">Full-stack developer in Karachi, taking freelance work</p>
              <h1 className="rise rise-2 font-display font-extrabold leading-[0.98] tracking-[-0.025em] mb-6" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
                Saad Kamal
              </h1>
              <p className="rise rise-3 text-[17px] leading-[1.7] text-zinc-600 max-w-[480px] mb-8">
                I would rather spend an extra day on the login flow than ship something that
                breaks the first time two people sign in at once. Four of my projects are live
                and used by real people, not just running on localhost.
              </p>
              <div className="rise rise-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#projects" className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-semibold no-underline bg-zinc-950 text-white hover:bg-zinc-800 ${focus}`}>
                  See my work <Arrow />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`text-[14px] text-zinc-600 underline underline-offset-4 hover:text-zinc-950 ${focus}`}>Download CV</a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={`text-[14px] text-zinc-600 underline underline-offset-4 hover:text-zinc-950 ${focus}`}>GitHub</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`text-[14px] text-zinc-600 underline underline-offset-4 hover:text-zinc-950 ${focus}`}>LinkedIn</a>
              </div>
            </div>
            <div className="rise rise-2 relative w-full max-w-[360px] aspect-[4/5] mx-auto md:ml-auto overflow-hidden rounded-lg bg-zinc-100">
              <Image src="/saad2.jpg" alt="Saad Kamal" fill priority className="object-cover" />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-28 border-t border-zinc-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold tracking-tight leading-[1.05] mb-3" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>Projects</h2>
            <p className="text-[16px] text-zinc-500 max-w-[480px] mb-12">Each one is deployed, full-stack, and built from database to interface.</p>

            <div className="flex flex-col">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-6 md:gap-10 py-10 border-t border-zinc-200 first:border-t-0 first:pt-0">
                  <div className={`relative w-full overflow-hidden rounded-lg bg-zinc-100 ${i === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
                    <Image src={p.img} alt={`${p.title} screenshot`} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[13px] text-zinc-400 mb-2">{p.year}</p>
                    <h3 className={`font-display font-bold tracking-tight mb-3 ${i === 0 ? 'text-[32px]' : 'text-[24px]'}`}>{p.title}</h3>
                    <p className="text-[15px] leading-[1.7] text-zinc-600 mb-4 max-w-[52ch]">{p.desc}</p>
                    <p className="text-[13px] text-zinc-500 mb-5">{p.tags.join(', ')}</p>
                    <div className="flex gap-5 text-[14px] font-semibold">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 no-underline text-[#3B82F6] hover:underline underline-offset-4 ${focus}`}>Visit site <Arrow /></a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className={`no-underline text-zinc-600 hover:text-zinc-950 hover:underline underline-offset-4 ${focus}`}>Source code</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-28 bg-zinc-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 md:gap-16">
            <div>
              <h2 className="font-display font-bold tracking-tight leading-[1.05] mb-3" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>What I can build for you</h2>
              <p className="text-[16px] text-zinc-500 max-w-[36ch]">Tell me what you need and I will tell you honestly how long it takes.</p>
            </div>
            <dl className="m-0">
              {SERVICES.map(([t, d]) => (
                <div key={t} className="py-6 border-t border-zinc-200 first:border-t-0 first:pt-0">
                  <dt className="font-display font-bold text-[21px] mb-1.5">{t}</dt>
                  <dd className="m-0 text-[15px] leading-[1.7] text-zinc-600 max-w-[56ch]">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ABOUT + STACK */}
        <section id="about" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-28 bg-zinc-950 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="font-display font-bold tracking-tight leading-[1.05] mb-6" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>About</h2>
              <p className="text-[16px] leading-[1.8] text-white/65 mb-5 max-w-[56ch]">
                I am based in Karachi and taught myself most of this by breaking things in
                production: my own projects, on my own time. That is probably why I care more
                about the unglamorous parts (auth, validation, error states) than the parts
                that look good in a screenshot.
              </p>
              <p className="text-[16px] leading-[1.8] text-white/65 mb-8 max-w-[56ch]">
                I own every layer, so when something breaks at 2am I am the one who gets the
                alert and fixes it.
              </p>
              <blockquote className="m-0 pl-5 border-l-2 border-[#3B82F6] font-display text-[20px] leading-[1.45] text-white">
                A project is not done when the demo works. It is done when it survives real users.
              </blockquote>
            </div>
            <div>
              <dl className="m-0 mb-12">
                {PRINCIPLES.map(([t, d]) => (
                  <div key={t} className="py-5 border-t border-white/10 first:border-t-0 first:pt-0">
                    <dt className="font-display font-bold text-[18px] mb-1">{t}</dt>
                    <dd className="m-0 text-[15px] leading-[1.7] text-white/55">{d}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="font-display font-bold text-[22px] mb-4">Tools I use</h3>
              <dl className="m-0">
                {STACK.map(([t, d]) => (
                  <div key={t} className="grid grid-cols-[90px_1fr] gap-4 py-3 border-t border-white/10 text-[15px]">
                    <dt className="text-white/50">{t}</dt>
                    <dd className="m-0 text-white/85">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-5 sm:px-8 lg:px-14 py-20 lg:py-28 bg-zinc-950 text-white border-t border-white/10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 md:gap-20">
            <div>
              <h2 className="font-display font-bold tracking-tight leading-[1.05] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>Have a project in mind?</h2>
              <p className="text-[16px] leading-[1.7] text-white/60 mb-6 max-w-[40ch]">
                Write a few lines about what you need and I will get back to you within a day.
              </p>
              <a href={`mailto:${EMAIL}`} className={`text-[17px] font-semibold text-[#3B82F6] underline underline-offset-4 break-all ${focus}`}>{EMAIL}</a>
            </div>

            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-name" className={labelCls}>Name (required)</label>
                  <input id="c-name" type="text" value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className={labelCls}>Email (required)</label>
                  <input id="c-email" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" className={inputCls} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label htmlFor="c-subject" className={labelCls}>Subject</label>
                <input id="c-subject" type="text" value={form.subject} onChange={set('subject')} placeholder="What is this about?" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 mb-5">
                <label htmlFor="c-msg" className={labelCls}>Message (required)</label>
                <textarea id="c-msg" rows={5} value={form.message} onChange={set('message')} placeholder="Tell me about your project" className={inputCls} style={{ resize: 'none' }} />
              </div>
              <button onClick={handleSend} disabled={status === 'sending'}
                className={`w-full py-3.5 rounded-lg text-[15px] font-semibold text-white transition disabled:opacity-50 ${btnBg} ${focus}`}>
                {btnLabel}
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-zinc-950 border-t border-white/10 px-5 sm:px-8 lg:px-14 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/45">
            <span>Saad Kamal</span>
            <span className="flex gap-5">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white no-underline">GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white no-underline">LinkedIn</a>
              <a href={`mailto:${EMAIL}`} className="text-white/60 hover:text-white no-underline">Email</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}