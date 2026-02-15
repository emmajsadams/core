import { Link } from '@tanstack/react-router'
import { NAME } from '../../config/personalDetails'

export default function Header() {
  return (
    <header className="bg-zinc-950 border-b border-emerald-500/20 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors"
        >
          <img src="/emma.jpg" alt="Emma Adams" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-xl font-semibold">{NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Experience
          </a>
          <a href="#education" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Education
          </a>
          <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Skills
          </a>
        </nav>
      </div>
    </header>
  )
}
