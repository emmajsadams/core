export interface Experience {
  title: string
  institution: string
  institutionUrl: string
  location: string
  start: string
  end: string
  description: string[]
}

// Revised: Oct 6, 2025
export const Supio: Experience = {
  title: 'Lead Software Engineer',
  institution: 'Supio',
  institutionUrl: 'https://supio.com',
  location: 'Remote',
  start: 'Feb. 2025',
  end: 'Present',
  description: [
    'Lead engineering team of 5 delivering AI-powered legal document automation adopted by 50+ law firms within first quarter, driving technical architecture decisions across product, design, and legal stakeholders throughout full product lifecycle.',
    'Architect production LLM orchestration system in TypeScript integrating Claude and OpenAI APIs with RAG pipelines. Reduced blueprint deployment time from days to hours through optimized prompt engineering and context management.',
    'Build and deploy agentic AI systems in Python (smolagents, LangChain) for autonomous legal drafting, including expert disclosure, demand letters, and medical summary generation, reducing drafting time from hours to minutes.',
    'Ship real-time collaborative editing interface with integrated AI chat for contextual document verification and natural-language revisions, improving attorney workflow efficiency.',
    'Establish engineering standards for CI/CD automation, API design, testing frameworks, and database architecture adopted across development team, improving code quality and deployment velocity.',
    'Mentor junior engineers on software engineering best practices, architectural design patterns, and code quality standards while maintaining hands-on contribution to critical path features.',
  ],
}

// Revised: Oct 6, 2025
export const HPE: Experience = {
  title: 'Senior Software Engineer',
  institution: 'Hewlett Packard Enterprise',
  institutionUrl: 'https://www.hpe.com',
  location: 'Remote',
  start: 'Jan. 2024',
  end: 'Nov. 2024',
  description: [
    'Architected and built production RAG evaluation platform from ground up using Go microservices, Python ML pipelines, React frontend, and distributed systems (Kubernetes, RabbitMQ, Postgres, Milvus vector DB), enabling 10+ enterprise customers to validate LLM performance at scale.',
    'Designed and implemented real-time WebSocket streaming system for live visualization of DeepEval metrics (groundedness, context relevancy, answer relevancy) during model validation, reducing iteration cycles from hours to minutes.',
    'Established comprehensive frontend architecture and engineering standards for React applications, implementing type-safe API contracts (Orval, Zod), component testing strategies (Storybook, Jest, Playwright), and API mocking (MSW) adopted across 3 product teams.',
    'Optimized JupyterLab extension for managing enterprise LLM training pipelines, reducing memory footprint by 30% and improving UI responsiveness for data-intensive operations on multi-GPU clusters.',
    'Drove technical design and architecture decisions across product, design, and AI research teams, producing detailed design documents and delivering stakeholder presentations that aligned engineering execution with product strategy.',
  ],
}

// Revised: Oct 6, 2025
export const DevotedHealth: Experience = {
  title: 'Staff Software Engineer',
  institution: 'Devoted Health',
  institutionUrl: 'https://www.devoted.com/',
  location: 'Remote',
  start: 'Feb. 2021',
  end: 'Apr. 2023',
  description: [
    "Led architectural redesign of risk adjustment engine (the company's primary revenue stream). Improved prediction accuracy and reduced processing time from days to hours, directly impacting revenue capture.",
    'Architected and delivered HIPAA-compliant medical coding annotation platform supporting 100+ clinical coders, reducing annotation time by 2 hours per chart.',
    'Optimized critical ETL pipelines, reducing processing time and infrastructure costs through strategic data partitioning and parallel processing architecture.',
    'Drove technical strategy as Lead Software Engineer, leading architecture reviews, establishing design patterns for Go microservices and React applications, and mentoring engineers on healthcare domain expertise and compliance requirements.',
    'Translated complex healthcare regulatory requirements into technical specifications, coordinating across product, clinical operations, and regulatory teams.',
  ],
}

export const HumbleBundleLead: Experience = {
  title: 'Lead Senior Software Engineer',
  institution: 'Humble Bundle',
  institutionUrl: 'https://www.humblebundle.com',
  location: 'Remote',
  start: 'Jul. 2018',
  end: 'Jul. 2020',
  description: [
    'Promoted to Lead Senior Software Engineer II, managing team of 5 engineers on Platform team supporting high-traffic e-commerce platform serving 15M monthly page views and processing millions in transactions.',
    'Spearheaded company-wide internationalization initiative for 8-year-old monolithic Python/React application, architecting localization system adopted across all product teams and expanding market reach to 15+ countries.',
    'Architected and executed critical security migration to TOTP two-factor authentication and OAuth Google login for entire user base (12M+ accounts), achieving zero-downtime deployment with comprehensive rollback strategy.',
    'Built and shipped core e-commerce features in Python Flask and React handling payment processing, inventory management, and promotional campaigns for high-profile game and book bundles.',
    'Developed engineering talent through hands-on mentorship including weekly 1-on-1s, code review standards, pair programming sessions, and career development planning.',
  ],
}

export const CommitteeForChildrenLead: Experience = {
  title: 'Mid-Level Software Engineer',
  institution: 'Committee for Children',
  institutionUrl: 'https://www.cfchildren.org',
  location: 'Seattle, WA',
  start: 'Jan. 2018',
  end: 'Aug. 2018',
  description: [
    'Led technical modernization replacing decade-old DNN monolith with microservices architecture using React and .NET Core, improving page load times by 70% for education platform serving 100K+ students.',
    'Refactored critical business logic from 50+ untested stored procedures into well-tested C# WebAPI services and migrated authentication to IdentityServer4 OpenID Connect, establishing CI/CD pipeline for automated deployments.',
  ],
}

export const TrovFullStack: Experience = {
  title: 'Full Stack Software Engineer',
  institution: 'Trov',
  institutionUrl: 'https://www.trov.com/',
  location: 'Remote',
  start: 'Jul. 2013',
  end: 'Dec. 2017',
  description: [
    'Built core on-demand insurance platform from inception using ASP.NET C#, SQL Server, and TypeScript React, enabling users to instantly insure high-value items with pay-per-use pricing model.',
    'Developed claims management, policy administration, and business intelligence systems handling underwriting, premium calculation, and partner data integration for white-label insurance offerings.',
  ],
}

export const UniversityOfWashington: Experience = {
  title: 'Undergrad Researcher and Web Instructor',
  institution: 'University of Washington',
  institutionUrl: 'https://www.washington.edu',
  location: 'Seattle, WA',
  start: 'Jan. 2012',
  end: 'Nov. 2013',
  description: [
    'Lead developer for TypeScript library abstracting cloud storage services (Dropbox, Google Drive, AWS) and contributed to published research paper on cloud storage abstraction.',
    'Taught modern web development standards to university staff and students while developing course management and support ticket applications using Python and Django.',
  ],
}

export default [
  Supio,
  HPE,
  DevotedHealth,
  HumbleBundleLead,
  CommitteeForChildrenLead,
  TrovFullStack,
  UniversityOfWashington,
]
