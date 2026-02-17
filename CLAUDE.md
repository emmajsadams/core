# CLAUDE.md - AI Assistant Context

This file provides context about the project for AI coding assistants like Claude Code.

## Project Overview

This is **Emma Adams' personal portfolio and resume website** — a professional site showcasing work experience, skills, projects, and education. Deployed at `emma.adams.engineer`, `emmajsadams.com`, and `www.emmajsadams.com`.

**Critical:** This is a **real resume** for a real person. All experience descriptions, skills, and projects must be factual and professionally accurate. Never fabricate or exaggerate accomplishments.

## Workflow

Every change follows this process:

1. **Make the requested changes** in the appropriate config/component files
2. **Verify locally:**
   ```bash
   pnpm run lint          # oxlint — fix all errors
   pnpm run format:fix    # oxfmt — auto-format
   pnpm run test          # bun test — all tests must pass
   pnpm run test:coverage # bun test --coverage — 80% line + function threshold
   pnpm run build         # vite — production build must succeed
   pnpm run generate-pdf  # verify PDF output if config changed
   ```
3. **Review your own code** against these standards before committing:
   - Types are explicit — no `any` unless unavoidable
   - Components are small and focused (< 150 lines preferred)
   - Config files are the single source of truth — no hardcoded resume data in components
   - Experience descriptions follow **Action + Technical Detail + Business Impact** pattern
   - No dead code, no commented-out blocks, no TODOs without a linked issue
   - Imports are organized (side-effect → external → internal → types)
   - Naming is clear and consistent (PascalCase components, camelCase functions/variables)
   - Accessibility basics: semantic HTML, alt text, ARIA where needed
   - PDF and web outputs stay in sync — changes to config must work for both
4. **Deploy, commit, and push:**
   ```bash
   pnpm run deploy        # Deploy to Cloudflare
   git add -A && git commit -m "concise message" && git push
   ```

If any step fails, fix the issue before proceeding. Do not skip steps.

## Architecture & Key Decisions

### Config-Driven Design
All resume content lives in TypeScript config files in `config/`:
- `experiences.ts` — Work history with detailed descriptions
- `projects.ts` — Portfolio projects with technologies
- `skills.ts` — Technical skills organized by category
- `education.ts` — Educational background
- `personalDetails.ts` — Contact info and metadata

**These config files are the single source of truth** — never hardcode resume data in components.

### Dual Output System
The same config data powers two outputs:
1. **Web application** — React components in `src/`
2. **PDF resume** — Generated via `scripts/generate-pdf.ts` using `@react-pdf/renderer`

**Both outputs must stay in sync.** Changes to config affect both. PDF templates in `scripts/pdf-templates/` mirror web components but use PDF-specific styling.

### Tech Stack
- **React** with TanStack Start (file-based routing)
- **TailwindCSS 4.x** for styling
- **TypeScript** for type safety
- **oxlint** for linting, **oxfmt** for formatting (NOT Biome/Prettier/ESLint)
- **pnpm** for package management
- **Cloudflare Workers** for deployment via Wrangler

## Code Organization

```
config/                 # Single source of truth for all resume data
scripts/generate-pdf.ts # PDF generation script
scripts/pdf-templates/  # React PDF components (different from web)
src/routes/             # TanStack file-based routes
src/components/         # Reusable React components
src/data/               # Data layer (imports from config)
public/                 # Static assets including generated PDF
```

## Key Patterns & Conventions

### Experience Descriptions
```typescript
'Led architectural redesign of X—improving Y by Z% and reducing W from days to hours.'
```
- Lead with impact when possible
- Quantify achievements (%, $, time saved, users affected)
- Include technical stack details
- Use em dashes (—) not hyphens for emphasis

### Content Accuracy
- ✅ Maintain professional, factual accuracy
- ✅ Quantify achievements with real metrics
- ❌ Never fabricate experience, skills, or metrics
- ❌ Never add technologies not actually used

### Code Quality
- ✅ Run `pnpm run check` before every commit
- ✅ Maintain strict TypeScript types
- ✅ Keep components focused and composable
- ❌ Don't bypass pre-commit hooks
- ❌ Don't use Biome, Prettier, or ESLint (use oxlint + oxfmt)

## Deployment

Deployed to **Cloudflare Workers** via Wrangler:
```bash
pnpm run deploy       # Deploy to Cloudflare
pnpm run deploy:prod  # Build + generate PDF + deploy
```

Pre-commit hooks run `pnpm run check` automatically via Husky.

---

**Remember:** This is a real person's professional presence. Accuracy, professionalism, and attention to detail matter.
