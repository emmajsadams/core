import { GITHUB } from '../config/personalDetails'

const PROJECT_URL = `https://${GITHUB}`

export interface Project {
  title: string
  url: string
  technologies: string[]
  description: string[]
}

export const Dstruct: Project = {
  title: 'dstruct',
  url: `${PROJECT_URL}/dstruct`,
  technologies: ['TypeScript', 'Docker'],
  description: [
    'Type-safe data structures library implementing 15+ collections including Red-Black trees, hash maps, bimaps, and multisets inspired by Java/C# Collections and Google Guava.',
  ],
}

export const Minerva: Project = {
  title: 'Minerva',
  url: `${PROJECT_URL}/minerva`,
  technologies: ['TypeScript', 'React', 'Next.JS', 'TailwindCSS', 'Convex', 'Bun', 'Vercel'],
  description: [
    'Personal productivity application blending task management with introspective design and a serene aquatic aesthetic.',
    'Features real-time task synchronization via Convex, rich markdown notes, and AI-powered productivity tools.',
  ],
}

export const TypeScriptDatabase: Project = {
  title: 'TypeScript Database',
  url: `${PROJECT_URL}/ts-database`,
  technologies: ['TypeScript', 'Node.JS'],
  description: [
    'In-memory transactional database with REPL interface supporting nested transactions (BEGIN/ROLLBACK/COMMIT) and type-safe key-value operations.',
  ],
}

export const Wright: Project = {
  title: 'Wright - Agentic Context Engineering CLI',
  url: `${PROJECT_URL}/wright`,
  technologies: [
    'TypeScript',
    'Node.js',
    'OpenAI API',
    'CLI (Commander.js / Inquirer)',
    'Zod',
    'esbuild / tsup / TSC',
  ],
  description: [
    'A TypeScript CLI implementing Agentic Context Engineering (ACE) with ReAct (Reasoning + Acting) methodology for self-improving AI context systems.',
    'Features a three-agent pipeline: ReActGeneratorAgent performs tool-enabled reasoning, ReflectorAgent extracts insights, and CuratorAgent updates evolving knowledge bases.',
    'Prevents context collapse through structured bullet accumulation and always-on ReAct reasoning, creating versioned knowledge that improves over time.',
  ],
}

export default [Wright, Minerva, TypeScriptDatabase, Dstruct]
