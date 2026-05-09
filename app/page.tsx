"use client";
import Image from 'next/image';
import { Sparkles, Github, Linkedin, Mail, CodeXml, Laptop, Zap, ArrowUpRight, ExternalLink, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
export default function Home() {
const tags = ["Next.js", "JavaScript", "Resend", "MongoDB"];
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const handleSend = async () => {
  const res = await fetch('/api/sendmsg', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message: message, subject })
  });
  if (res.ok) {
    alert('Message sent successfully!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  } else {
    alert('Failed to send message.');
  }
};

  return (
    <main>

      <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
        <section id='home' className='min-h-screen flex items-center pt-20 px-6 dark:bg-gray-900 relative overflow-hidden'>
          <div className='container mx-auto'>
            <ScrollReveal>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <div className='inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-full'>
                    <Sparkles className='w-4 h-4 text-teal-700' />  <span className='className="text-sm text-teal-700 dark:text-teal-300'>Available for opportunities</span></div>
                  <div className='space-y-2'>
                    <h1 className='text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none'>Saad <br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>kamal</span>
                    </h1>                <p className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium'>Full Stack Developer</p>
                  </div>
                  <p className='text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed'>Building modern web applications with Next.js. I create scalable, performant solutions with beautiful interfaces and clean architecture.</p>
                  <div className='flex flex-wrap gap-4'>
                    <button className='group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg'>
                      <span className="font-semibold">
                       <a href='#Projects'> View My Work</a>
                        </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span></button>
                    <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-all duration-300 font-semibold">Get In Touch</button>
                  </div>
                  <div className='flex gap-3 pt-2'>
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://github.com/SaadkamalShaikhdev"><Github /></a>
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="https://www.linkedin.com/in/saadkamal-shaikh-887449398/"><Linkedin /></a>
                    <a target='_blank' className='p-4 bg-gray-100 text-black dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 dark:text-gray-300' href="mailto:saadkamalshaikhdev@gmail.com"><Mail /></a>
                  </div>
                </div>

                <div className='relative max-w-xl mt-8 lg:mt-0 pb-16 pl-0 lg:pb-10 lg:pl-10'>
  <div className='relative aspect-square rounded-3xl overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-2xl'>
    <Image src="/saad.jpeg" alt="Saad Kamal" fill={true} className='object-cover' />
  </div>
  <div className='absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-2 lg:translate-x-0 lg:bottom-2 bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700'>
    <p className='text-3xl lg:text-4xl font-black text-teal-600 dark:text-teal-400'>1+</p>
    <p className='text-sm text-gray-600 dark:text-gray-400'>Years Experience</p>
  </div>
</div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className='md:py-32 py-10 px-6 dark:bg-gray-900 transition-colors relative overflow-hidden' id='About'><div className='container mx-auto relative z-10'>
          <div className='max-w-6xl mx-auto'>
            <ScrollReveal>
              <div className='mb-20'>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">About<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Me</span></h2>
                <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>I am a passionate web developer with experience in creating modern, responsive, and user-friendly web applications.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className='grid md:grid-cols-3 mb-16 gap-6'>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'><div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform'>
                  <CodeXml />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Clean Code</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I write clean, maintainable, and efficient code that follows best practices and industry standards.</p></div>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'> <div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-110 transition-transform'>
                  <Laptop />
                </div><h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Responsive Design</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I create responsive designs that work seamlessly across all devices and screen sizes.</p></div>
                <div className='group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'> <div className='w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-11₀ transition-transform'>
                  <Zap />
                </div><h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>Fast Performance</h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>I optimize web applications for fast loading times and smooth user experiences.</p></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className='bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 py-10 md:p-14 rounded-3xl border border-gray-200 dark:border-gray-700'>
                <div className='flex md:justify-between flex-col md:flex-row gap-4'>
                  <div>

                  <h3 className='text-3xl font-black text-gray-900 dark:text-white mb-4'>
                    My Journey
                  </h3>
                  <div className='w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full'></div>
                  </div>
                  <div className='md:col-span-3 space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed md:max-w-2/3 lg:max-w1/2'>
                    <p>As a passionate full-stack developer, I transform ideas into reality through elegant code and intuitive design. My journey has been driven by curiosity and a desire to create meaningful digital experiences.</p>
                    <p>Through hands-on project development, I've focused on modern web technologies and best practices. Each project is an opportunity to learn and push boundaries—from e-commerce platforms to real-time collaboration tools.</p>
                    <p>I'm constantly learning and refining my craft. My portfolio showcases my ability to build full-stack applications from concept to deployment, and I'm excited to bring these skills to impactful projects and collaborative teams.</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
        </section>
        <section className='md:py-32 py-10 px-6 dark:bg-gray-900 transition-colors relative overflow-hidden' id='Skill'>
          <div className='container mx-auto relative z-10'>
            <div className='max-w-6xl mx-auto'>
              <ScrollReveal>
                <div className='mb-20'>
                  <h2 className='text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6'>
                    Skills &
                    <br/>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500'>Technology</span>
                  </h2>
                  <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl'>A comprehensive toolkit for building modern, scalable web applications</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8'>
                <div className='md:col-span-2 md:row-span-2 bg-black rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Framework
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-3xl'>Next.Js</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Library
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>React</h3>
                  </div>
                </div>
                 <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Language
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Typescript</h3>
                  </div>
                </div>
                 <div className='lg:col-span-2 rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Runtime
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Node.js</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Database
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>MongoDB</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Styling
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Tailwind CSS</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Architecture
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>REST APIs</h3>
                  </div>
                </div>
                <div className='rounded-2xl group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:border-teal-500 active:border-teal-500 dark:hover:border-teal-400 dark:active:border-teal-400 transition-all duration-300 hover:scale-105 active:scale-105 hover:shadow-xl active:shadow-xl'>
                  <div className='flex flex-col h-full justify-between'>
                    <div className='flex items-start justify-between mb-auto'>
                    <span className='text-xs py-1 px-3 bg-teal-50 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 font-semibold'>
                      Validation
                    </span>
                    <div className='w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform'></div>
                    </div>
                    <h3 className='font-black text-gray-900 dark:text-white mt-4 text-xl'>Next-Auth</h3>
                  </div>
                </div>
                <div className='h-20'>

                </div>

                </div>
                <div className='bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Tools & More</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Git
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Docker
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Vercel
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Postman
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      ESLint
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Express
                    </span>
                    <span className='px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 font-medium hover:scale-105'>
                      Figma
                    </span>
                  </div>
                </div>
                {/* Add more skill cards as needed */}
              </ScrollReveal>
            </div>
            </div>     
        </section>
        <section id="Projects" className="md:py-32 py-10 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className='container mx-auto'>
               <div className="max-w-7xl mx-auto" >
                <ScrollReveal delay={0.3}>
                <div className='md:mb-20 mb-10'>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white md:mb-6 mb-4">
                    Featured <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">Projects</span>

                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                    Showcasing my work in full-stack development and problem-solving
                  </p>
                </div>
                <div className="space-y-6">
           <div className='group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 lg:h-[500px]'>
 <div className="group grid lg:grid-cols-2 h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
      {/* Image Side */}
      <div className="relative overflow-hidden h-52 sm:h-64 lg:h-full">
        <Image
          src="/fashion.png"
          alt="E-Commerce Platform"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Side */}
      <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
        {/* Badge */}
        <span className="inline-block text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full mb-3 w-fit">
          Featured Project
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
          Fashion Stylized
            </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed line-clamp-3 lg:line-clamp-none">
          A full-featured e-commerce platform with product management, shopping
          cart, user authentication, and secure checkout with real-time
          inventory updates.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/SaadkamalShaikhdev/fashionstylized"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            <Github size={16} className="shrink-0" />
            <span>Code</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Live Demo */}
          <a
            href="https://www.fashionstylized.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base"
          >
            <ExternalLink size={16} className="shrink-0" />
            <span>Live Demo</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className='group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 lg:h-[500px]'>
 <div className="group grid lg:grid-cols-2 h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
      {/* Image Side */}
      <div className="relative overflow-hidden h-52 sm:h-64 lg:h-full">
        <Image
          src="/urlshortener.png"
          alt="Url Shortener platfrom"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Side */}
      <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
          MiniLink
            </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed line-clamp-3 lg:line-clamp-none">
         A modern URL shortener with secure authentication using NextAuth, allowing users to create short links and track click analytics. Logged-in users can monitor link performance with accurate click counting and manage their URLs efficiently.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/SaadkamalShaikhdev/MiniLink"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            <Github size={16} className="shrink-0" />
            <span>Code</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Live Demo */}
          <a
            href="https://mini-link-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base"
          >
            <ExternalLink size={16} className="shrink-0" />
            <span>Live Demo</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className='group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 lg:h-[500px]'>
 <div className="group grid lg:grid-cols-2 h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
      {/* Image Side */}
      <div className="relative overflow-hidden h-52 sm:h-64 lg:h-full">
        <Image
          src="/passopp.png"
          alt="Passworn Manager Platform"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Side */}
      <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3">
          PassOp
            </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed line-clamp-3 lg:line-clamp-none">
        A lightweight password manager that securely stores user credentials in localStorage for quick and easy access. Features a clean interface to save, view, and manage passwords directly in the browser without relying on external databases.
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/SaadkamalShaikhdev/PassOP"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            <Github size={16} className="shrink-0" />
            <span>Code</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Live Demo */}
          <a
            href="https://pass-op-three-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg text-sm sm:text-base"
          >
            <ExternalLink size={16} className="shrink-0" />
            <span>Live Demo</span>
            <ArrowUpRight
              size={14}
              className="shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
                </div></ScrollReveal>
                <ScrollReveal delay={0.2}>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-20">
                  <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <p className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500 mb-2'>
                      10+
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Projects Completed</p>
                  </div>
                  <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <p className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500 mb-2'>
                      15+
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Technologies</p>
                  </div>
                  <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <p className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500 mb-2'>
                      100+
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Git Commits</p>
                  </div>
                  <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:scale-105'>
                    <p className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500 mb-2'>
                      100%
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>Client satisfaction</p>
                  </div>
                </div>
                </ScrollReveal>
               </div>
                </div>
        </section>
        <section id="Contact" className='md:py-32 py-10 px-6 dark:bg-gray-900 transition-colors relative overflow-hidden'>
          <div className='absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl'></div>
          <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={0.3}>
            <div className="md:mb-20 mb-10 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500" >Connect </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have a project in mind? I'd love to hear from you!</p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll get back to you!
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:saadkamaldev@gmail.com" className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
                      <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={22} className="text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Email</p>
                        <span className="text-gray-900 dark:text-gray-200 font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate block">
                          saadkamaldev@gmail.com
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="text-gray-400 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                    <a href="tel:+923212563790" className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
                      <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={22} className="text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Phone</p>
                        <span className="text-gray-900 dark:text-gray-200 font-semibold hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate block">
                          +923212563790
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="text-gray-400 group-hover:text-teal-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                    <div className="group flex items-center gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
                      <div className="w-14 h-14 bg-teal-50 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin size={22} className="text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Location</p>
                        <p className="text-gray-900 dark:text-gray-200 font-semibold">Orangi town ,Karachi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Name</label>
                        <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Email</label>
                        <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Subject</label>
                      <input type="text" id="subject" name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="How can I help?" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-3">Message</label>
                      <textarea id="message" name="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all" placeholder="Tell me about your project..." />
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
          </div>
        </section>
      </div>
    </main>
  );
}
