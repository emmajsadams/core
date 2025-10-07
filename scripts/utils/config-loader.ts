import experiences from '../../config/experiences'
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  NAME,
  PHONE_NUMBER,
  TITLE,
  TWITTER,
} from '../../config/personalDetails'
import projects from '../../config/projects'
import schools from '../../config/schools'
import technologies from '../../config/skills'

export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
  }
  socialLinks: Array<{
    name: string
    url: string
  }>
  experience: Array<{
    title: string
    institution: string
    location: string
    start: string
    end: string
    description: string[]
  }>
  education: Array<{
    institution: string
    degree: string
    location: string
    gpa: number
    startYear: number
    endYear: number
    description: string[]
  }>
  projects: Array<{
    title: string
    technologies: string[]
    description: string[]
  }>
  skills: Array<{
    category: string
    technologies: string[]
  }>
}

export function loadResumeData(): ResumeData {
  return {
    personalInfo: {
      name: NAME,
      title: TITLE,
      email: EMAIL,
      phone: PHONE_NUMBER,
    },
    socialLinks: [
      {
        name: 'GitHub',
        url: `https://${GITHUB}`,
      },
      {
        name: 'LinkedIn',
        url: `https://${LINKEDIN}`,
      },
      {
        name: 'Twitter',
        url: `https://${TWITTER}`,
      },
    ],
    experience: experiences,
    education: schools,
    projects: projects,
    skills: technologies,
  }
}
