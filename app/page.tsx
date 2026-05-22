"use client";
import Image from 'next/image';
import { Sparkles, Github, Linkedin, Mail, CodeXml, Laptop, Zap, ArrowUpRight, ExternalLink, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';

export default function Home() {
  const tags = ["Next.js", "TypeScript", "Resend", "MongoDB", "Zustand"];
  const tags2 = ["Next.js", "JavaScript", "MongoDB"];
  const tags3 = ["React.js", "JavaScript", "LocalStorage"];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    const res = await fetch('/api/sendmsg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, subject })
    });
    if (res.ok) {
      alert('Message sent successfully!');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <main>
      <style>{`
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }

        :root {
          --bg-primary: #fafaf8;
          --bg-secondary: #f4f3ef;
          --bg-mesh: radial-gradient(ellipse at 20% 10%, #e8f5f0 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 90%, #fef3e2 0%, transparent 55%),
                      radial-gradient(ellipse at 60% 40%, #e0f2ee 0%, transparent 40%);
        }

        .dark {
          --bg-primary: #141412;
          --bg-secondary: #1c1b18;
          --bg-mesh: radial-gradient(ellipse at 20% 10%, rgba(20,184,140,0.07) 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 90%, rgba(251,146,60,0.05) 0%, transparent 55%),
                      radial-gradient(ellipse at 55% 45%, rgba(20,184,140,0.04) 0%, transparent 40%);
        }

        .section-bg {
          background-color: var(--bg-primary);
          background-image: var(--bg-mesh);
        }

        .section-bg-alt {
          background-color: var(--bg-secondary);
          background-image: var(--bg-mesh);
        }

        .dark .card-surface {
          background: linear-gradient(135deg, #1e1d1a 0%, #161614 100%);
        }
        .card-surface {
          background: linear-gradient(135deg, #ffffff 0%, #f9f8f5 100%);
        }
      `}</style>

      <div className="transition-colors duration-300">

        {/* ─────────────── HERO ─────────────── */}
        <section id='home' className='section-bg min-h-screen flex items-center pt-20 px-6 relative overflow-hidden'>
          {/* Blobs */}
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-teal-400/20 dark:bg-teal-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full bg-amber-400/20 dark:bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-teal-300/10 dark:bg-teal-600/5 blur-3xl pointer-events-none" />

          <div className='container mx-auto max-w-6xl relative z-10'>
            <ScrollReveal>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-full'>
                    <Sparkles className='w-4 h-4 text-teal-700 dark:text-teal-400' />
                    <span className='text-sm text-teal-700 dark:text-teal-300'>Available for opportunities</span>
                  </div>

                  <div className='space-y-2'>
                    <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none'>
                      Saad <br />
                      <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>Kamal</span>
                    </h1>
                    <p className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium'>Full Stack Developer</p>
                  </div>

                  <p className='text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed'>
                    Full Stack Developer specializing in modern, scalable web applications, available for freelance projects and remote internship opportunities.
                  </p>

                  <div className='flex flex-wrap gap-4'>
                    <button className='group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg'>
                      <span className="font-semibold"><a href='#Projects'>View My Work</a></span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <button className="px-8 py-4 border-2 border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-all duration-300 font-semibold">
                      <a href='#Contact'>Get In Touch</a>
                    </button>
                  </div>

                  <div className='flex gap-3 pt-2'>
                    <a target='_blank' className='p-4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-300 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300' href="https://github.com/SaadkamalShaikhdev"><Github /></a>
                    <a target='_blank' className='p-4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-300 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300' href="https://www.linkedin.com/in/saadkamal-shaikh-887449398/"><Linkedin /></a>
                    <a target='_blank' className='p-4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-300 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300' href="mailto:saadkamalshaikhdev@gmail.com"><Mail /></a>
                  </div>
                </div>

                <div className='relative flex justify-center mt-8 lg:mt-0 pb-16 lg:pb-10'>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-dashed border-teal-300/40 dark:border-teal-600/30 animate-spin" style={{ animationDuration: '20s' }} />
                  </div>
                  {/* Extra glow ring behind photo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full bg-teal-400/20 dark:bg-teal-500/15 blur-2xl" />
                  </div>

                  <div className='relative w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl ring-4 ring-teal-200/60 dark:ring-teal-800/40'>
                    <Image src="/saad2.jpg" alt="Saad Kamal" fill className='object-cover' />
                  </div>

                  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 lg:bottom-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700'>
                    <p className='text-3xl lg:text-4xl font-black text-teal-600 dark:text-teal-400'>1+</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Years Experience</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────── ABOUT ─────────────── */}
        <section className='section-bg-alt md:py-32 py-10 px-6 transition-colors relative overflow-hidden' id='About'>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-400/15 dark:bg-amber-500/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 dark:bg-teal-500/6 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-teal-300/8 dark:bg-teal-600/4 blur-2xl pointer-events-none" />

          <div className='container mx-auto max-w-6xl relative z-10'>
            <ScrollReveal>
              <div className='mb-20'>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                  About<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Me</span>
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>
                  I am a passionate web developer with experience in creating modern, responsive, and user-friendly web applications.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className='grid md:grid-cols-3 mb-16 gap-6'>
                {[
                  { icon: <CodeXml />, title: 'Clean Code', desc: 'I write clean, maintainable, and efficient code that follows best practices and industry standards.' },
                  { icon: <Laptop />, title: 'Responsive Design', desc: 'I create responsive designs that work seamlessly across all devices and screen sizes.' },
                  { icon: <Zap />, title: 'Fast Performance', desc: 'I optimize web applications for fast loading times and smooth user experiences.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className='group card-surface p-8 rounded-3xl border border-gray-200 dark:border-zinc-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform'>
                      {icon}
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>{title}</h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>{desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className='card-surface px-4 py-10 md:p-14 rounded-3xl border border-gray-200 dark:border-zinc-700'>
                <div className='flex md:justify-between flex-col md:flex-row gap-4'>
                  <div>
                    <h3 className='text-3xl font-black text-gray-900 dark:text-white mb-4'>My Journey</h3>
                    <div className='w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full'></div>
                  </div>
                  <div className='md:col-span-3 space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed md:max-w-2/3'>
                    <p>As a passionate full-stack developer, I transform ideas into reality through elegant code and intuitive design. My journey has been driven by curiosity and a desire to create meaningful digital experiences.</p>
                    <p>Through hands-on project development, I've focused on modern web technologies and best practices. Each project is an opportunity to learn and push boundaries—from e-commerce platforms to real-time collaboration tools.</p>
                    <p>I'm constantly learning and refining my craft. My portfolio showcases my ability to build full-stack applications from concept to deployment, and I'm excited to bring these skills to impactful projects and collaborative teams.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────── PROJECTS ─────────────── */}
        <section id="Projects" className="section-bg md:py-32 py-10 px-6 transition-colors relative overflow-hidden">
          {/* Blobs */}
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-teal-400/10 dark:bg-teal-500/6 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-400/12 dark:bg-amber-500/6 blur-3xl pointer-events-none" />

          <div className='container mx-auto max-w-6xl relative z-10'>
            <ScrollReveal delay={0.3}>
              <div className='md:mb-20 mb-10'>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white md:mb-6 mb-4">
                  Featured <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Projects</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">Showcasing my work in full-stack development and problem-solving</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    img: '/dp.png', alt: 'E-Commerce Platform', badge: 'Featured Project',
                    title: 'Fashion Stylized', tags: tags,
                    desc: 'A full-featured e-commerce platform with product management, shopping cart, user authentication, and secure checkout with real-time inventory updates.',
                    github: 'https://github.com/SaadkamalShaikhdev/fashionstylized',
                    demo: 'https://www.fashionstylized.store/',
                  },
                  {
                    img: '/urlshortener.png', alt: 'Url Shortener Platform',
                    title: 'MiniLink', tags: tags2,
                    desc: 'A modern URL shortener with secure authentication using NextAuth, allowing users to create short links and track click analytics. Logged-in users can monitor link performance and manage their URLs efficiently.',
                    github: 'https://github.com/SaadkamalShaikhdev/MiniLink',
                    demo: 'https://mini-link-five.vercel.app/',
                  },
                  {
                    img: '/passopp.png', alt: 'Password Manager Platform',
                    title: 'PassOp', tags: tags3,
                    desc: 'A lightweight password manager that securely stores user credentials in localStorage for quick and easy access. Features a clean interface to save, view, and manage passwords directly in the browser.',
                    github: 'https://github.com/SaadkamalShaikhdev/PassOP',
                    demo: 'https://pass-op-three-wine.vercel.app/',
                  },
                ].map(({ img, alt, badge, title, tags: t, desc, github, demo }) => (
                  <div key={title} className='group relative card-surface rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 lg:h-[500px]'>
                    <div className="grid lg:grid-cols-2 h-full">
                      <div className="relative overflow-hidden h-52 sm:h-64 lg:h-full">
                        <Image src={img} alt={alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                        {badge && (
                          <span className="inline-block text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full mb-3 w-fit">{badge}</span>
                        )}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed line-clamp-3 lg:line-clamp-none">{desc}</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                          {t.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 dark:border-zinc-700">{tag}</span>
                          ))}
                        </div>
                        <div className="flex gap-2 sm:gap-4">
                          <a href={github} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 font-semibold text-sm sm:text-base">
                            <Github size={16} className="shrink-0" /><span>Code</span>
                            <ArrowUpRight size={14} className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                          <a href={demo} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base">
                            <ExternalLink size={16} className="shrink-0" /><span>Live Demo</span>
                            <ArrowUpRight size={14} className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-20">
                {[
                  { num: '10+', label: 'Projects Completed' },
                  { num: '15+', label: 'Technologies' },
                  { num: '100+', label: 'Git Commits' },
                  { num: '100%', label: 'Client Satisfaction' },
                ].map(({ num, label }) => (
                  <div key={label} className='card-surface p-8 rounded-2xl border border-gray-200 dark:border-zinc-700 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <p className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500 mb-2'>{num}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────── SKILLS ─────────────── */}
        <section className='section-bg-alt md:py-32 py-10 px-6 transition-colors relative overflow-hidden' id='Skill'>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-teal-400/15 dark:bg-teal-500/8 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-amber-400/12 dark:bg-amber-500/6 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-teal-300/8 dark:bg-teal-600/4 blur-3xl pointer-events-none" />

          <div className='container mx-auto max-w-6xl relative z-10'>
            <ScrollReveal>
              <div className='mb-20'>
                <h2 className='text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6'>
                  Skills &<br/>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>Technology</span>
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>A comprehensive toolkit for building modern, scalable web applications</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8'>
                {[
                  { span: 'md:col-span-2 md:row-span-2', label: 'Framework', name: 'Next.Js', size: 'text-3xl' },
                  { span: '', label: 'Library', name: 'React', size: 'text-xl' },
                  { span: '', label: 'Language', name: 'TypeScript', size: 'text-xl' },
                  { span: 'lg:col-span-2', label: 'Runtime', name: 'Node.js', size: 'text-xl' },
                  { span: '', label: 'Database', name: 'MongoDB', size: 'text-xl' },
                  { span: '', label: 'Styling', name: 'Tailwind CSS', size: 'text-xl' },
                  { span: '', label: 'Architecture', name: 'REST APIs', size: 'text-xl' },
                  { span: '', label: 'Validation', name: 'Next-Auth', size: 'text-xl' },
                ].map(({ span, label, name, size }) => (
                  <div key={name} className={`${span} rounded-2xl group relative card-surface p-6 border border-gray-200 dark:border-zinc-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <div className='flex flex-col h-full justify-between'>
                      <div className='flex items-start justify-between'>
                        <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>{label}</span>
                        <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                      </div>
                      <h3 className={`font-black text-gray-900 dark:text-white mt-4 ${size}`}>{name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className='card-surface p-8 rounded-3xl border border-gray-200 dark:border-zinc-700'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Tools & More</h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'Docker', 'Vercel', 'Postman', 'ESLint', 'Express', 'Figma'].map(tool => (
                    <span key={tool} className='px-5 py-2.5 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────── CONTACT ─────────────── */}
        <section id="Contact" className='section-bg md:py-32 py-10 px-6 transition-colors relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/12 dark:bg-teal-500/7 rounded-full blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/12 dark:bg-amber-500/6 rounded-full blur-3xl pointer-events-none' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-300/8 dark:bg-teal-600/4 rounded-full blur-3xl pointer-events-none' />

          <div className="container mx-auto max-w-6xl relative z-10">
            <ScrollReveal delay={0.3}>
              <div className="md:mb-20 mb-10 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                  Let's <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Connect</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have a project in mind? I'd love to hear from you!</p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2 space-y-6">
                  <div className="card-surface p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-zinc-700">
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                      I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll get back to you!
                    </p>
                    <div className="space-y-4">
                      {[
                        { href: 'mailto:saadkamaldev@gmail.com', icon: <Mail size={22} />, label: 'Email', value: 'saadkamaldev@gmail.com', link: true },
                        { href: 'tel:+923212563790', icon: <Phone size={22} />, label: 'Phone', value: '+923212563790', link: true },
                        { href: null, icon: <MapPin size={22} />, label: 'Location', value: 'Orangi Town, Karachi', link: false },
                      ].map(({ href, icon, label, value, link }) => {
                        const inner = (
                          <>
                            <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{label}</p>
                              <span className="text-gray-900 dark:text-gray-200 font-semibold truncate block">{value}</span>
                            </div>
                            {link && <ArrowUpRight size={18} className="text-gray-400 group-hover:text-teal-500 transition-all" />}
                          </>
                        );
                        return href ? (
                          <a key={label} href={href} className="group flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">{inner}</a>
                        ) : (
                          <div key={label} className="group flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 transition-all duration-300">{inner}</div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="card-surface p-6 md:p-10 rounded-3xl border border-gray-200 dark:border-zinc-700">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Name</label>
                          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Email</label>
                          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="your.email@example.com" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Subject</label>
                        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="How can I help?" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Message</label>
                        <textarea id="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all" placeholder="Tell me about your project..." />
                      </div>
                      <button onClick={handleSend} className="group w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg">
                        <Send size={18} />
                        <span>Send Message</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  );
}