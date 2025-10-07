import { createFileRoute } from '@tanstack/react-router'
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { PDF_RESUME_NAME } from '../../config/personalDetails'
import {
  education,
  experience,
  personalInfo,
  portfolioProjects,
  skills,
  socialLinks,
} from '../data/portfolio'

export const Route = createFileRoute('/')({
  component: Resume,
})

function Resume() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github
      case 'Linkedin':
        return Linkedin
      case 'Twitter':
        return Twitter
      default:
        return ExternalLink
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-purple-400 mb-4">{personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {socialLinks.map((link) => {
              const IconComponent = getIcon(link.icon)
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{link.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )
            })}
            <a
              href={`/${PDF_RESUME_NAME}.pdf`}
              download
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        <main className="space-y-12">
          <section id="experience">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-blue-400">
                        <a
                          href={job.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-300"
                        >
                          {job.institution}
                        </a>
                      </p>
                      <p className="text-gray-400 text-sm">{job.location}</p>
                    </div>
                    <span className="text-gray-400">
                      {job.start} - {job.end}
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="education">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((school, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{school.degree}</h3>
                      <p className="text-blue-400">
                        <a
                          href={school.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-300"
                        >
                          {school.institution}
                        </a>
                      </p>
                      <p className="text-gray-400 text-sm">{school.location}</p>
                      <p className="text-gray-400">GPA: {school.gpa}</p>
                    </div>
                    <span className="text-gray-400">
                      {school.startYear} - {school.endYear}
                    </span>
                  </div>
                  <ul className="text-gray-300 space-y-1 list-disc list-inside">
                    {school.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
              Projects
            </h2>
            <div className="space-y-6">
              {portfolioProjects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <ul className="text-gray-300 mb-4 space-y-1 list-disc list-inside">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
