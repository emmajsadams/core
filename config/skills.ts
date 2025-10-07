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
    'HTML',
    'CSS',
    'React',
    'Next.js',
    'TailwindCSS',
    'TanStack',
    'shadcn',
    'PostCSS',
    'ASP.NET MVC',
    'Flask',
    'FastAPI',
    'Bun',
    'Node.js',
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
    'Elasticsearch',
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
    'cmake',
  ],
}

export const Databases: SkillCategory = {
  category: 'Databases',
  skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'Convex'],
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
    'npm',
    'pnpm',
    'vite',
    'webpack',
    'ESLint',
    'Prettier',
  ],
}

export const SoftSkills: SkillCategory = {
  category: 'Soft Skills',
  skills: [
    'Effective and concise communication',
    'Constructive feedback',
    'Continuous learning and growth',
    'Problem solving with minimal guidance',
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
