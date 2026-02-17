import { describe, expect, test } from 'bun:test'
import schools, { type School } from './schools'

describe('schools', () => {
  test('exports a non-empty array', () => {
    expect(schools.length).toBeGreaterThan(0)
  })

  test.each(schools)('$institution has required fields', (school: School) => {
    expect(school.institution).toBeTruthy()
    expect(school.url).toMatch(/^https?:\/\//)
    expect(school.degree).toBeTruthy()
    expect(school.location).toBeTruthy()
    expect(school.gpa).toBeGreaterThan(0)
    expect(school.gpa).toBeLessThanOrEqual(4.0)
    expect(school.startYear).toBeLessThan(school.endYear)
    expect(school.description.length).toBeGreaterThan(0)
  })
})
