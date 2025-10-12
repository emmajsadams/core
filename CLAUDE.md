# CLAUDE.md - AI Assistant Context

This file provides context about the project for AI coding assistants like Claude Code.

## Project Overview

This is **Emma Adams' personal portfolio and resume website** - a professional site showcasing work experience, skills, projects, and education. It's deployed at `emma.adams.engineer`.

**Critical:** This is a **real resume** for a real person. All experience descriptions, skills, and projects must be factual and professionally accurate. Never fabricate or exaggerate accomplishments.

## Architecture & Key Decisions

### Config-Driven Design
All resume content lives in TypeScript config files in `config/`:
- `experiences.ts` - Work history with detailed descriptions
- `projects.ts` - Portfolio projects with technologies
- `skills.ts` - Technical skills organized by category
- `education.ts` - Educational background
- `personalDetails.ts` - Contact info and metadata

**These config files are the single source of truth** - never hardcode resume data in components.

### Dual Output System
The same config data powers two outputs:
1. **Web application** - React components in `app/`
2. **PDF resume** - Generated via `scripts/generate-pdf.ts` using `@react-pdf/renderer`

**Both outputs must stay in sync.** Changes to config affect both. PDF templates in `scripts/pdf-templates/` mirror web components but use PDF-specific styling.

### Tech Stack
- **React** with TanStack Start (file-based routing)
- **TailwindCSS 4.x** for styling
- **TypeScript** for type safety
- **Biome** for formatting/linting (NOT Prettier/ESLint)
- **pnpm** for package management
- **Vercel** for deployment

## Code Organization

```
config/                 # Single source of truth for all resume data
scripts/generate-pdf.ts # PDF generation script
scripts/pdf-templates/  # React PDF components (different from web)
app/routes/             # TanStack file-based routes
app/components/         # Reusable React components
public/                 # Static assets including generated PDF
```

## Key Patterns & Conventions

### Experience Descriptions
Follow the **Action + Technical Detail + Business Impact** pattern:
```typescript
'Led architectural redesign of X—improving Y by Z% and reducing W from days to hours.'
```

- Lead with impact when possible
- Quantify achievements (%, $, time saved, users affected)
- Include technical stack details
- Emphasize leadership and strategic thinking for senior roles
- Use em dashes (—) not hyphens for emphasis

### Skills Organization
Categories are in priority order:
1. Programming Languages
2. Web Development
3. Data & AI
4. Cloud & DevOps
5. Databases
6. Developer Experience & Tooling
7. Leadership & Collaboration

### PDF-Specific Considerations
- PDF templates use `@react-pdf/renderer` - NOT regular React/HTML
- Styling is done via StyleSheet.create() - NOT Tailwind
- Layout is more constrained - space efficiency matters
- Some features are simplified (e.g., no skill tags, condensed format)

## Common Tasks & How to Approach Them

### Updating Work Experience
1. Read the relevant experience in `config/experiences.ts`
2. Follow established patterns for descriptions
3. Maintain chronological order (most recent first)
4. Test PDF generation: `pnpm run generate-pdf`
5. Verify both web and PDF outputs

### Adding Skills/Technologies
1. Update appropriate category in `config/skills.ts`
2. Consider if it should also appear in project/experience technologies
3. Maintain alphabetical or priority ordering within categories

### Adjusting PDF Layout
1. Modify templates in `scripts/pdf-templates/components/`
2. Update styles in `scripts/pdf-templates/styles.ts`
3. Always test: `pnpm run generate-pdf`
4. Check spacing, margins, and page breaks

### Deployment Changes
- Site auto-deploys to Vercel on push to `main`
- PDF is generated during build process
- Test locally before pushing: `pnpm run build`

## Important Constraints

### Content Accuracy
- ✅ DO maintain professional, factual accuracy
- ✅ DO quantify achievements with real metrics
- ✅ DO emphasize technical leadership for senior roles
- ❌ DON'T fabricate experience or skills
- ❌ DON'T exaggerate accomplishments
- ❌ DON'T add technologies not actually used

### Code Quality
- ✅ DO use Biome for formatting: `pnpm run format`
- ✅ DO run checks before committing: `pnpm run check`
- ✅ DO maintain TypeScript types
- ❌ DON'T bypass pre-commit hooks
- ❌ DON'T use Prettier or ESLint (use Biome)

### PDF/Web Consistency
- ✅ DO test PDF generation after config changes
- ✅ DO verify both outputs look correct
- ✅ DO maintain parallel structure where possible
- ❌ DON'T update only web or only PDF components
- ❌ DON'T add features that can't work in PDF

## Testing Strategy

### Before Committing
```bash
pnpm run check          # Biome formatting & linting
pnpm run generate-pdf   # Test PDF generation
pnpm run build          # Test production build
```

### Manual Verification
- Check web UI at `localhost:3000` in dev mode
- Open `public/EmmaAdams_Resume.pdf` and verify layout
- Test responsive design at different screen sizes
- Verify all links work (GitHub, LinkedIn, etc.)

## Deployment Pipeline

1. Push to `main` branch
2. Vercel automatically builds via `vercel.json` config
3. Build process runs `pnpm run build`
4. PDF generation happens during build
5. Deploy to production at `emma.adams.engineer`

**Pre-commit hooks run Biome formatting automatically.**

## Working with This Project

### When Asked to Update Resume Content
1. Review existing patterns in relevant config files
2. Maintain professional tone and factual accuracy
3. Follow established bullet point structure
4. Include quantifiable metrics where possible
5. Test both web and PDF outputs

### When Asked to Add Features
1. Consider impact on both web and PDF outputs
2. Maintain config-driven architecture
3. Update TypeScript types if needed
4. Test thoroughly before committing

### When Asked to Fix Styling
1. For web: Use TailwindCSS utilities
2. For PDF: Modify `scripts/pdf-templates/styles.ts`
3. Consider responsive design for web
4. Consider space constraints for PDF

## Project-Specific Context

### Current Role
- **Lead Software Engineer at Supio** (Feb 2025 - Present)
- Focus on AI/ML systems, LLM orchestration, legal tech
- Leading team of 5 engineers

### Technical Focus Areas
- TypeScript/React frontend development
- Python AI/ML systems (LangChain, smolagents)
- Cloud architecture (AWS, GCP, Azure)
- Full-stack development (Go, Python, C#)
- Technical leadership and mentorship

### Career Narrative
Emma is a Lead Software Engineer with 12+ years of experience, specializing in full-stack development and AI/ML systems. Career progression: Junior IC → Senior → Lead → Principal → Lead. Strong emphasis on technical architecture, team leadership, and business impact.

## Questions or Clarifications?

If uncertain about:
- **Resume content accuracy** - Ask the user before making changes
- **Technical stack decisions** - Follow established patterns
- **New features** - Consider config-driven approach first
- **Deployment issues** - Check Vercel dashboard and build logs

---

**Remember:** This is a real person's professional presence. Accuracy, professionalism, and attention to detail matter.
