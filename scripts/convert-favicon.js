import fs from 'fs'
import path from 'path'

/**
 * Simple favicon conversion script
 * Converts the kawaii kitsune SVG to a basic ICO format
 */

const publicDir = path.join(process.cwd(), 'public')
const svgPath = path.join(publicDir, 'favicon.svg')
const icoPath = path.join(publicDir, 'favicon.ico')
const backupPath = path.join(publicDir, 'favicon-backup.ico')

console.log('🦊 Converting kawaii kitsune favicon...')

// Ensure backup exists
if (fs.existsSync(icoPath) && !fs.existsSync(backupPath)) {
  fs.copyFileSync(icoPath, backupPath)
  console.log('📦 Created backup of original favicon.ico')
}

// Create a simple ICO file with kawaii kitsune design
// ICO format: 16x16 pixels, 32-bit RGBA
const width = 16
const height = 16

// ICO file header (22 bytes total)
const iconDir = Buffer.alloc(22)
iconDir.writeUInt16LE(0, 0) // Reserved (0)
iconDir.writeUInt16LE(1, 2) // Type (1 = ICO)
iconDir.writeUInt16LE(1, 4) // Number of images (1)
iconDir.writeUInt8(16, 6) // Width (16px)
iconDir.writeUInt8(16, 7) // Height (16px)
iconDir.writeUInt8(0, 8) // Color palette (0)
iconDir.writeUInt8(0, 9) // Reserved (0)
iconDir.writeUInt16LE(1, 10) // Color planes (1)
iconDir.writeUInt16LE(32, 12) // Bits per pixel (32)
iconDir.writeUInt32LE(1024, 14) // Image size (16*16*4 = 1024 bytes)
iconDir.writeUInt32LE(22, 18) // Offset to image data (22 bytes)

// Create pixel data for kawaii kitsune
const imageData = Buffer.alloc(width * height * 4) // RGBA

// Colors
const darkSlate = [0x1e, 0x29, 0x3b, 0xff] // Background
const purple = [0xa8, 0x55, 0xf7, 0xff] // Purple accent
const lightPurple = [0xe8, 0x79, 0xf9, 0xff] // Light purple
const white = [0xf1, 0xf5, 0xf9, 0xff] // White
const black = [0x1e, 0x29, 0x3b, 0xff] // Black
const transparent = [0x00, 0x00, 0x00, 0x00] // Transparent

// Helper function to set pixel
function setPixel(x, y, color) {
  if (x >= 0 && x < width && y >= 0 && y < height) {
    const offset = (y * width + x) * 4
    imageData[offset] = color[2] // B (BGR format for ICO)
    imageData[offset + 1] = color[1] // G
    imageData[offset + 2] = color[0] // R
    imageData[offset + 3] = color[3] // A
  }
}

// Draw kawaii kitsune (simplified for 16x16)
// Background circle
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const dx = x - 8
    const dy = y - 8
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= 7.5) {
      setPixel(x, y, darkSlate)
    } else {
      setPixel(x, y, transparent)
    }
  }
}

// Fox ears (simplified)
setPixel(5, 3, purple)
setPixel(6, 2, purple)
setPixel(7, 3, purple)
setPixel(9, 3, purple)
setPixel(10, 2, purple)
setPixel(11, 3, purple)

// Fox face
for (let y = 6; y < 14; y++) {
  for (let x = 4; x < 12; x++) {
    const dx = x - 8
    const dy = y - 10
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= 3.5) {
      setPixel(x, y, white)
    }
  }
}

// Eyes
setPixel(6, 9, black)
setPixel(10, 9, black)

// Nose
setPixel(8, 11, purple)

// Cherry blossoms (tiny)
setPixel(2, 2, lightPurple)
setPixel(13, 4, lightPurple)
setPixel(3, 13, lightPurple)

// Combine header and image data
const icoData = Buffer.concat([iconDir, imageData])

// Write the ICO file
fs.writeFileSync(icoPath, icoData)

console.log('✨ Created kawaii kitsune favicon.ico')
console.log('🌸 SVG favicon also available for modern browsers')
console.log('💾 Original favicon backed up as favicon-backup.ico')

// Restore backup function
console.log('')
console.log('To restore original favicon:')
console.log('  cp public/favicon-backup.ico public/favicon.ico')
