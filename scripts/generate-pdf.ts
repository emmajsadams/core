#!/usr/bin/env tsx

import { renderToBuffer } from '@react-pdf/renderer'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import React from 'react'

import { ResumeTemplate } from './pdf-templates/ResumeTemplate'
import { loadResumeData } from './utils/config-loader'
import { PDF_RESUME_NAME } from '../config/personalDetails'

async function generatePDF() {
  try {
    console.log('📄 Loading resume data from config files...')
    const resumeData = loadResumeData()
    
    console.log('🎨 Generating PDF from template...')
    const resumeDocument = React.createElement(ResumeTemplate, { data: resumeData })
    
    console.log('⚡ Rendering PDF buffer...')
    const pdfBuffer = await renderToBuffer(resumeDocument)
    
    // Ensure output directory exists
    const outputDir = join(process.cwd(), 'public')
    mkdirSync(outputDir, { recursive: true })
    
    // Write PDF file
    const outputPath = join(outputDir, `${PDF_RESUME_NAME}.pdf`)
    writeFileSync(outputPath, pdfBuffer)
    
    console.log(`✅ PDF resume generated successfully!`)
    console.log(`📂 Output: ${outputPath}`)
    console.log(`📊 File size: ${(pdfBuffer.length / 1024).toFixed(1)} KB`)
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error)
    process.exit(1)
  }
}

// Run the script
generatePDF()

export { generatePDF }