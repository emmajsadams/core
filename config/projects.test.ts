import { describe, expect, test } from 'bun:test'
import projects, { type Project } from './projects'

describe('projects', () => {
  test('exports a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  test.each(projects)('$title has required fields', (project: Project) => {
    expect(project.title).toBeTruthy()
    expect(project.url).toMatch(/^https?:\/\//)
    expect(project.technologies.length).toBeGreaterThan(0)
    expect(project.description.length).toBeGreaterThan(0)
  })

  test.each(projects)('$title descriptions end with periods', (project: Project) => {
    for (const bullet of project.description) {
      expect(bullet).toMatch(/\.$/)
    }
  })

  test('no duplicate project titles', () => {
    const titles = projects.map((p) => p.title)
    expect(new Set(titles).size).toBe(titles.length)
  })
})
