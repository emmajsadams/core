import { describe, expect, test } from 'bun:test'
import {
  education,
  experience,
  personalInfo,
  portfolioProjects,
  skills,
  socialLinks,
} from './portfolio'

describe('portfolio data layer', () => {
  test('personalInfo has all fields', () => {
    expect(personalInfo.name).toBeTruthy()
    expect(personalInfo.email).toBeTruthy()
    expect(personalInfo.title).toBeTruthy()
    expect(personalInfo.phone).toBeTruthy()
  })

  test('socialLinks are valid', () => {
    expect(socialLinks.length).toBeGreaterThan(0)
    for (const link of socialLinks) {
      expect(link.name).toBeTruthy()
      expect(link.url).toMatch(/^https?:\/\//)
      expect(link.icon).toBeTruthy()
    }
  })

  test('all data arrays are populated', () => {
    expect(education.length).toBeGreaterThan(0)
    expect(experience.length).toBeGreaterThan(0)
    expect(portfolioProjects.length).toBeGreaterThan(0)
    expect(skills.length).toBeGreaterThan(0)
  })
})
