/**
 * Runs bun test --coverage and enforces minimum thresholds (80% lines, 80% functions).
 */
import { execSync } from 'child_process'

const MIN_LINES = 80
const MIN_FUNCS = 80

let output: string
try {
  // bun sends coverage table to stderr
  output = execSync('bun test --coverage 2>&1', { encoding: 'utf-8' })
} catch (e: any) {
  output = e.stdout ?? ''
  process.stdout.write(output)
  process.exit(1)
}

process.stdout.write(output)

const clean = output.replace(/\x1b\[[0-9;]*m/g, '')
const match = clean.match(/All files\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)/)
if (!match) {
  console.error('Could not parse coverage summary')
  process.exit(1)
}

const funcs = parseFloat(match[1])
const lines = parseFloat(match[2])

let failed = false
if (funcs < MIN_FUNCS) {
  console.error(`✗ Function coverage ${funcs}% is below threshold of ${MIN_FUNCS}%`)
  failed = true
}
if (lines < MIN_LINES) {
  console.error(`✗ Line coverage ${lines}% is below threshold of ${MIN_LINES}%`)
  failed = true
}

if (failed) process.exit(1)
else console.log(`✓ Coverage OK (functions: ${funcs}%, lines: ${lines}%)`)
