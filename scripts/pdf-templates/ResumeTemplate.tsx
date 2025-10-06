import React from 'react'
import { Document, Page } from '@react-pdf/renderer'
import { Header } from './components/Header'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { styles } from './styles'

interface ResumeData {
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

interface ResumeTemplateProps {
  data: ResumeData
}

export const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          name={data.personalInfo.name}
          title={data.personalInfo.title}
          email={data.personalInfo.email}
          phone={data.personalInfo.phone}
          socialLinks={data.socialLinks}
        />
        
        <Experience experiences={data.experience} />
        
        <Education education={data.education} />
        
        <Projects projects={data.projects} />
        
        <Skills skills={data.skills} />
      </Page>
    </Document>
  )
}