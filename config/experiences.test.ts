import { describe, expect, test } from 'bun:test'
import experiences, { type Experience } from './experiences'

describe('experiences', () => {
  test('exports a non-empty array', () => {
    expect(experiences.length).toBeGreaterThan(0)
  })

  test('most recent experience is first', () => {
    expect(experiences[0].end).toBe('Present')
  })

  test.each(experiences)('$title at $institution has required fields', (exp: Experience) => {
    expect(exp.title).toBeTruthy()
    expect(exp.institution).toBeTruthy()
    expect(exp.institutionUrl).toMatch(/^https?:\/\//)
    expect(exp.location).toBeTruthy()
    expect(exp.start).toBeTruthy()
    expect(exp.end).toBeTruthy()
    expect(exp.description.length).toBeGreaterThan(0)
  })

  test.each(experiences)(
    '$title at $institution descriptions end with periods',
    (exp: Experience) => {
      for (const bullet of exp.description) {
        expect(bullet).toMatch(/\.$/)
      }
    }
  )
})
