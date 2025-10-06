import { Link } from '@tanstack/react-router'
import { User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">Your Name</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#education" 
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Education
          </a>
        </nav>
      </div>
    </header>
  )
}
