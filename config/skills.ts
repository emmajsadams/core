export interface SkillCategory {
  category: string
  skills: string[]
}

export const ProgrammingLanguages: SkillCategory = {
  category: 'Programming Languages',
  skills: ['Python', 'TypeScript', 'C#', 'Go', 'SQL', 'Bash'],
}

export const WebDevelopment: SkillCategory = {
  category: 'Web Development',
  skills: [
    'React',
    'TailwindCSS',
    'PostCSS',
    'Next.js',
    'TanStack',
    'shadcn',
    'Node.js',
    'FastAPI',
    'ASP.NET MVC',
    'Flask',
    'Bun',
    'HTML/CSS',
  ],
}

export const DataAndAI: SkillCategory = {
  category: 'Data & AI',
  skills: [
    'OpenAI API',
    'Claude API',
    'smolagents',
    'LangChain',
    'LangSmith',
    'RAG',
    'pandas',
    'NumPy',
    'jupyter',
    'PyTorch',
  ],
}

export const CloudAndDevOps: SkillCategory = {
  category: 'Cloud & DevOps',
  skills: [
    'AWS',
    'Google Cloud',
    'Microsoft Azure',
    'Cloudflare',
    'DigitalOcean',
    'Vercel',
    'Docker',
    'Kubernetes',
  ],
}

export const Databases: SkillCategory = {
  category: 'Databases',
  skills: [
    'PostgreSQL',
    'MySQL',
    'MSSQL',
    'DynamoDB',
    'Amazon RDS',
    'Elasticsearch',
    'Redis',
    'Convex',
  ],
}

export const DeveloperExperience: SkillCategory = {
  category: 'Developer Experience & Tooling',
  skills: [
    'Claude Code',
    'Cursor',
    'VSCode',
    'Cursor',
    'Git',
    'Linux',
    'npm/pnpm',
    'webpack/vite',
    'ESLint/Prettier/Biome',
    'pip/uv',
  ],
}

export const SoftSkills: SkillCategory = {
  category: 'Leadership & Collaboration',
  skills: [
    'Technical architecture and system design leadership',
    'Engineering team mentorship and career development',
    'Cross-functional collaboration with product and design',
    'Establishing engineering standards and best practices',
    'Strategic technical planning and execution',
  ],
}

export default [
  ProgrammingLanguages,
  WebDevelopment,
  DataAndAI,
  CloudAndDevOps,
  Databases,
  DeveloperExperience,
  SoftSkills,
]
