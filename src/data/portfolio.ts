// Import the actual config data

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

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export const personalInfo = {
  name: NAME,
  email: EMAIL,
  title: TITLE,
  phone: PHONE_NUMBER,
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: `https://${GITHUB}`,
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: `https://${LINKEDIN}`,
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: `https://${TWITTER}`,
    icon: 'Twitter',
  },
]

export const education = schools
export const experience = experiences
export const portfolioProjects = projects
export const skills = technologies
