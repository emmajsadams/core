import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

/**
 * Professional favicon conversion script
 * Converts the kawaii kitsune SVG to proper ICO and PNG formats using librsvg
 */

const publicDir = path.join(process.cwd(), 'public')
const svgPath = path.join(publicDir, 'favicon.svg')
const icoPath = path.join(publicDir, 'favicon.ico')
const png192Path = path.join(publicDir, 'logo192.png')
const png512Path = path.join(publicDir, 'logo512.png')
const backupIcoPath = path.join(publicDir, 'favicon-backup.ico')
const backup192Path = path.join(publicDir, 'logo192-backup.png')
const backup512Path = path.join(publicDir, 'logo512-backup.png')

console.log('🦊 Converting kawaii kitsune favicon with librsvg...')

// Create backups
function createBackup(sourcePath, backupPath, name) {
  if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
    fs.copyFileSync(sourcePath, backupPath)
    console.log(`📦 Created backup of ${name}`)
  }
}

createBackup(icoPath, backupIcoPath, 'favicon.ico')
createBackup(png192Path, backup192Path, 'logo192.png')
createBackup(png512Path, backup512Path, 'logo512.png')

// Check if SVG exists
if (!fs.existsSync(svgPath)) {
  console.error('❌ SVG file not found:', svgPath)
  process.exit(1)
}

try {
  // Convert SVG to different PNG sizes
  console.log('🎨 Converting SVG to PNG formats...')

  // 16x16 for ICO
  const png16Path = path.join(publicDir, 'favicon-16.png')
  execSync(`rsvg-convert -w 16 -h 16 "${svgPath}" -o "${png16Path}"`)

  // 32x32 for ICO
  const png32Path = path.join(publicDir, 'favicon-32.png')
  execSync(`rsvg-convert -w 32 -h 32 "${svgPath}" -o "${png32Path}"`)

  // 192x192 for PWA
  execSync(`rsvg-convert -w 192 -h 192 "${svgPath}" -o "${png192Path}"`)
  console.log('✅ Created 192x192 PNG')

  // 512x512 for PWA
  execSync(`rsvg-convert -w 512 -h 512 "${svgPath}" -o "${png512Path}"`)
  console.log('✅ Created 512x512 PNG')

  // Install ImageMagick if not available for ICO conversion
  try {
    execSync('which magick', { stdio: 'ignore' })
  } catch {
    console.log('📥 Installing ImageMagick for ICO conversion...')
    execSync('brew install imagemagick', { stdio: 'inherit' })
  }

  // Create ICO file with multiple sizes
  execSync(`magick "${png16Path}" "${png32Path}" "${icoPath}"`)
  console.log('✅ Created multi-size favicon.ico')

  // Clean up temporary files
  fs.unlinkSync(png16Path)
  fs.unlinkSync(png32Path)

  console.log('')
  console.log('🎉 Successfully converted kawaii kitsune favicon!')
  console.log('📁 Generated files:')
  console.log(`   • favicon.svg (vector, modern browsers)`)
  console.log(`   • favicon.ico (16x16 + 32x32, legacy browsers)`)
  console.log(`   • logo192.png (192x192, PWA manifest)`)
  console.log(`   • logo512.png (512x512, PWA manifest)`)
  console.log('')
  console.log('🔄 To restore originals:')
  console.log('   cp public/*-backup.* public/')
} catch (error) {
  console.error('❌ Conversion failed:', error.message)
  process.exit(1)
}
