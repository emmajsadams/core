# Emma Adams - Portfolio & Resume Site

A modern portfolio and resume website built with React, TanStack Start, and TailwindCSS. Features automated PDF resume generation and deployment to Vercel.

## TODO

- [x] Fix TanStack dev tools configuration

## Overview

This is a personal portfolio site that showcases:
- Professional experience and work history
- Technical skills and expertise
- Project portfolio
- Educational background
- Auto-generated PDF resume

## Tech Stack

- **Framework:** React with TanStack Start
- **Styling:** TailwindCSS 4.x
- **PDF Generation:** @react-pdf/renderer
- **Deployment:** Vercel
- **Package Manager:** pnpm
- **Code Quality:** Biome (formatting & linting)

## Key Commands

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Run tests
pnpm run test

# Format and lint code
pnpm run check
pnpm run format
```

### PDF Resume Generation

```bash
# Generate PDF resume from config
pnpm run generate-pdf
```

This reads from `config/` files and generates `public/EmmaAdams_Resume.pdf`

### Production Build & Deploy

```bash
# Build for production
pnpm run build

# Deploy to Vercel (automatically runs on git push to main)
vercel --prod
```

## Project Structure

```
├── config/                # Resume data configuration
│   ├── experiences.ts     # Work experience
│   ├── education.ts       # Educational background
│   ├── projects.ts        # Portfolio projects
│   ├── skills.ts          # Technical skills
│   └── personalDetails.ts # Contact info and personal details
├── scripts/               # Build and generation scripts
│   ├── generate-pdf.ts    # PDF resume generator
│   └── pdf-templates/     # React PDF components
├── app/                   # Application source
│   ├── routes/            # TanStack file-based routes
│   └── components/        # React components
└── public/                # Static assets
```

## Configuration

All resume data is centralized in `config/` TypeScript files. Update these files to modify:
- Work experience and descriptions
- Technical skills and categories
- Project details
- Contact information

Changes are automatically reflected on the website and in the generated PDF resume.

## Deployment

The site is deployed to Vercel with automatic deployments on push to `main`. The deployment includes:
1. Production build of the React application
2. PDF resume generation
3. Static asset optimization

Custom domain: `emma.adams.engineer`

## Pre-commit Hooks

Biome formatting runs automatically on staged files via Git hooks to ensure code quality.
