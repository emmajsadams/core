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
  technologies: ['TypeScript', 'Grunt', 'Docker', 'Bower', 'Karma'],
  description: [
    'A comprehensive data structures library for TypeScript, created as a learning exercise and exploration of algorithmic design.',
    'Implements 15+ structures including Red-Black trees, hash/tree maps, bimaps, multisets, and more - inspired by Java Collections, C# Collections, and Google Guava.',
    'Features type-safe implementations with ES6 Map support, demonstrating foundational CS concepts in modern TypeScript.',
  ],
}

export const Minerva: Project = {
  title: 'Minerva',
  url: `${PROJECT_URL}/minerva`,
  technologies: ['TypeScript', 'React', 'Next.JS', 'TailwindCSS', 'Convex', 'Bun', 'Vercel'],
  description: [
    'Personal productivity application blending task management with introspective design and a serene aquatic aesthetic.',
    'Features real-time task synchronization via Convex, rich markdown notes, and AI-powered productivity tools in a thoughtfully crafted interface.',
    'Emphasizes personal growth through glass morphism effects, fluid animations, and thoughtful typography that transforms productivity into a meditative experience.',
  ],
}

export const TypeScriptDatabase: Project = {
  title: 'TypeScript Database',
  url: `${PROJECT_URL}/ts-database`,
  technologies: ['TypeScript', 'Node.JS', 'eslint', 'prettier', 'mocha', 'sinon'],
  description: [
    'A transactional in-memory database for TypeScript featuring a full REPL interface for interactive key-value operations.',
    'Supports nested transactions with BEGIN/ROLLBACK/COMMIT, enabling complex data manipulation with type safety and clean architectural separation.',
    'Built with extensibility in mind - modular command parsing and pluggable storage backends for different key-value type systems.',
  ],
}

export const Wright: Project = {
  title: 'Wright – Agentic Context Engineering CLI',
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
