// TODO: Refactor this to be about technical skills, not technologies
export interface SkillCategory {
	category: string
	skills: string[]
}

export const ProgrammingLanguages: SkillCategory = {
	category: 'Programming Languages',
	skills: ['C', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
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
	skills: ['pandas', 'NumPy', 'TensorFlow', 'Elasticsearch'],
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
	skills: ['Git', 'ESLint', 'Prettier', 'npm', 'webpack', 'Visual Studio', 'VSCode'],
}

export const SystemsAndEnvironments: SkillCategory = {
	category: 'Systems & Environments',
	skills: ['GNU/Linux', 'MacOS', 'Windows', 'ChromeOS', 'gcc'],
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
	SystemsAndEnvironments,
	SoftSkills,
]