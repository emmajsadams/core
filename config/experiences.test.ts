import { describe, expect, test } from 'bun:test'
import experiences, { type Experience } from './experiences'

describe('experiences', () => {
  test('Supio distinguishes the current promotion from the employment start', () => {
    const supio = experiences[0]
    expect(supio.title).toBe('Head of Agentic Applications (promoted Jan. 2026)')
    expect(supio.start).toBe('Feb. 2025')
    expect(supio.end).toBe('Present')
    expect(supio.description).toHaveLength(6)
    expect(supio.description[0]).toContain('eight direct reports')
    expect(supio.description[1]).toContain('Supio Agent')
    expect(supio.description[2]).toContain('agent platform team')
    expect(supio.description.join(' ')).not.toMatch(/50\+|law firms|\d+%/)
  })

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
