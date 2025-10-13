export interface School {
  institution: string
  url: string
  gpa: number
  location: string
  degree: string
  startYear: number
  endYear: number
  description: string[]
}

export const UniversityOfWashington: School = {
  institution: 'University of Washington Seattle',
  url: 'https://www.washington.edu/',
  gpa: 3.87,
  location: 'Seattle, WA',
  degree: 'Bachelor of Science in Informatics',
  startYear: 2011,
  endYear: 2014,
  description: [
    'Informatics at UW is a technically rigorous Bachelor of Science degree focused on designing, building, and securing complex information systems through programming, data modeling, software architecture, and human-centered computing.',
  ],
}

export default [UniversityOfWashington]
