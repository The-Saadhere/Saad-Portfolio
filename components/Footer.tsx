import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden text-gray-300 dark:text-gray-400 py-16 px-6 transition-colors border-t border-gray-800/60 dark:border-gray-900
      bg-gradient-to-br from-gray-900 via-gray-900 to-teal-950/70
      dark:from-black dark:via-gray-950 dark:to-teal-950/50'>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-teal-400/8 rounded-full blur-2xl pointer-events-none" />

      <div className='container mx-auto relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-12 mb-12'>
            <div>
              <h3 className='text-white text-3xl font-black mb-4'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400'>SK</span>
              </h3>
              <p className='text-gray-400 dark:text-gray-500 leading-relaxed'>Full Stack Developer specializing in building modern web applications with Next.js and cutting-edge technologies.</p>
            </div>
            <div>
              <h4 className='text-white font-bold mb-6 text-lg'>Quick Links</h4>
              <ul className='space-y-3'>
                <li><a href="#About" className='hover:text-teal-400 transition-colors flex items-center gap-2 group'><span className='w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all'></span>About</a></li>
                <li><a href="#Skills" className='hover:text-teal-400 transition-colors flex items-center gap-2 group'><span className='w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all'></span>Skills</a></li>
                <li><a href="#Projects" className='hover:text-teal-400 transition-colors flex items-center gap-2 group'><span className='w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all'></span>Projects</a></li>
                <li><a href="#Contact" className='hover:text-teal-400 transition-colors flex items-center gap-2 group'><span className='w-0 group-hover:w-2 h-0.5 bg-teal-400 transition-all'></span>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-bold mb-6 text-lg'>Connect</h4>
              <div className='flex gap-3'>
                <a target='_blank' href="https://github.com/SaadkamalShaikhdev" className='w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all'><Github /></a>
                <a target='_blank' href="https://www.linkedin.com/in/saadkamal-shaikh-887449398/" className='w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all'><Linkedin /></a>
                <a target='_blank' href="mailto:saadkamalshaikhdev@gmail.com" className='w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all'><Mail /></a>
              </div>
            </div>
          </div>
          <div className='pt-8 border-t border-gray-800/60 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='flex items-center gap-2 text-gray-400 dark:text-gray-500'>Made with <Heart fill='#fb2c36' className='text-red-500 animate-pulse' /> by Saad Kamal</p>
            <p className='text-gray-400 dark:text-gray-500'>© 2026 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer