/**
 * Validation utility to ensure all description bullet points end with periods
 */

import experiences from './experiences'
import projects from './projects'
import schools from './schools'

interface ValidationResult {
  isValid: boolean
  errors: string[]
}

function validateDescriptions(
  items: Array<{ description?: string[] }>,
  category: string,
  getName: (item: any) => string
): ValidationResult {
  const errors: string[] = []

  for (const item of items) {
    if (!item.description) continue

    for (let i = 0; i < item.description.length; i++) {
      const bullet = item.description[i]
      if (!bullet.endsWith('.')) {
        errors.push(
          `${category} "${getName(item)}" - bullet ${i + 1} does not end with a period: "${bullet}"`
        )
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validatePunctuation(): ValidationResult {
  const allErrors: string[] = []

  // Validate experiences
  const expResult = validateDescriptions(
    experiences,
    'Experience',
    (exp) => `${exp.title} at ${exp.institution}`
  )
  allErrors.push(...expResult.errors)

  // Validate projects
  const projResult = validateDescriptions(projects, 'Project', (proj) => proj.title)
  allErrors.push(...projResult.errors)

  // Validate schools
  const schoolResult = validateDescriptions(schools, 'School', (school) => school.institution)
  allErrors.push(...schoolResult.errors)

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  }
}

// Run validation when executed directly
const result = validatePunctuation()

if (result.isValid) {
  console.log('✓ All bullet points end with periods')
  process.exit(0)
} else {
  console.error('✗ Punctuation validation failed:\n')
  for (const error of result.errors) {
    console.error(`  - ${error}`)
  }
  process.exit(1)
}
