import { describe, expect, test } from 'bun:test'
import skills, { type SkillCategory } from './skills'

describe('skills', () => {
  test('exports a non-empty array', () => {
    expect(skills.length).toBeGreaterThan(0)
  })

  test.each(skills)('category "$category" has skills', (cat: SkillCategory) => {
    expect(cat.category).toBeTruthy()
    expect(cat.skills.length).toBeGreaterThan(0)
  })

  test('no duplicate categories', () => {
    const categories = skills.map((s) => s.category)
    expect(new Set(categories).size).toBe(categories.length)
  })

  test('no duplicate skills within a category', () => {
    for (const cat of skills) {
      expect(new Set(cat.skills).size).toBe(cat.skills.length)
    }
  })
})
