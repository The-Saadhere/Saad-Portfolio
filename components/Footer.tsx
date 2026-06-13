import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
      <footer className="flex flex-col md:flex-row items-center justify-between px-12 py-10 border-t border-white/[0.04] bg-[#050508] gap-3">
        <div className="font-[Syne] font-black text-[16px] tracking-tight text-white/30">
          saad<span className="text-[#5c5aff]">.</span>dev
        </div>
        <p className="font-mono text-[12px] tracking-[0.04em] text-white/20">
          Built with ♥ — Karachi, Pakistan © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[11px] text-white/[0.12]">Full Stack Developer</p>
      </footer>
  )
}

export default Footer