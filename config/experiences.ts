import { URL } from './personalDetails'

export interface Experience {
  title: string
  institution: string
  institutionUrl: string
  location: string
  start: string
  end: string
  description: string[]
}

export const Supio: Experience = {
  title: 'Lead Senior Software Engineer',
  institution: 'Supio',
  institutionUrl: 'https://supio.com',
  location: 'Remote',
  start: 'Feb. 2025',
  end: 'Present',
  description: [
    'Lead a team of 5 engineers through agile sprints, technical planning, and cross-functional collaboration with product, sales, and marketing to deliver AI-driven legal tools.',
    'Architected an LLM workflow orchestration system in TypeScript integrated with Claude and OpenAI models for rapid deployment of legal document blueprints using context management and prompt engineering best practices.',
    'Built and deployed legal drafting agents in Python (smolagents, LangChain) for automated document generation and review.',
    'Designed a cursor-style drafting interface integrating AI RAG chat for real-time verification and natural-language editing.',
    'Delivered a full drafting suite—including expert disclosure, demand letter, and medical summary generators—adopted by 20+ law firms within the first quarter, improving drafting speed and consistency across client workflows.',
    'Led the integration of coding agents like Codex and Claude Code, establishing best practices for secure, efficient, and maintainable AI-assisted development workflows.',
  ],
}

export const HPE: Experience = {
  title: 'Senior Software Engineer',
  institution: 'Hewlett Packard Enterprise',
  institutionUrl: 'https://www.hpe.com',
  location: 'Remote',
  start: 'Jan. 2024',
  end: 'Nov. 2024',
  description: [
    'Engineered a full-stack RAG evaluation and deployment service from scratch, leveraging Go microservices, Python ML pipelines, React frontend, and distributed systems (Kubernetes, RabbitMQ, Postgres, Milvus).',
    'Led frontend development for RAG evaluation platform, implementing real-time WebSocket streaming to visualize DeepEval metrics (groundedness, context relevancy, answer relevancy) during model validation.',
    'Established scalable React architecture and engineering standards, integrating modern tooling (Vite, Storybook, Jest, Playwright) and type-safe API patterns (Orval, Zod, MSW) for maintainable component development.',
    'Delivered performance-critical features for JupyterLab extension managing large-scale LLM training pipelines, optimizing data-intensive workflows.',
    'Drove cross-functional collaboration with product and design teams, translating business requirements into technical solutions through design documentation and stakeholder presentations.',
  ],
}

export const DevotedHealth: Experience = {
  title: 'Principal Software Engineer',
  institution: 'Devoted Health',
  institutionUrl: 'https://www.devoted.com/',
  location: 'Remote',
  start: 'Feb. 2021',
  end: 'Apr. 2023',
  description: [
    'Developed full-stack solutions using Go for backend services and TypeScript React for frontend applications.',
    'Collaborated in product design meetings to define requirements and draft user stories for new product initiatives.',
    'Drove development of a HIPAA-compliant health insurance annotation platform from early stages through production release.',
    'Optimized and scaled ETL pipelines to support rapid user growth and increasing data volumes.',
    "Led the redesign of the risk adjustment engine, the company's primary revenue stream for CMS claim reimbursement.",
  ],
}

export const Freelance: Experience = {
  title: 'Freelance Software Engineer',
  institution: 'Self-Employed',
  institutionUrl: URL,
  location: 'Remote',
  start: 'Aug. 2020',
  end: 'Jan. 2021',
  description: [
    'Contract work building APIs and React web applications for small to mid-sized companies.',
    'Computer Science tutoring and classes for teaching university students web development.',
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
    'Promoted from Senior Software Engineer to Lead Senior Software Engineer II of the Platform team.',
    'Developed features for a Python and React e-commerce website that averages 26 million views per month.',
    'Executed a project to migrate all sessions to the newly required TOTP two-factor system with OAuth Google login.',
    'Led the internationalization project for an 8-year-old application and educated other developers on how to use these tools.',
    'Managed 5 direct reports including regular one-on-one meetings, code reviews, and pair programming.',
  ],
}

export const CommitteeForChildrenLead: Experience = {
  title: 'Lead Full Stack Software Engineer',
  institution: 'Committee for Children',
  institutionUrl: 'https://www.cfchildren.org',
  location: 'Seattle, WA',
  start: 'Jan. 2018',
  end: 'Aug. 2018',
  description: [
    'Led the replacement of a legacy, monolithic DNN platform to a high performance platform utilizing using React and .NET Core.',
    'Migrated user authentication to the IdentityServer4 OpenID identity provider.',
    'Incrementally transformed a series of untested stored procedures into a modern C# WebAPI.',
    'Developed a TypeScript React frontend powered by an ASP.NET Core C# backend to track the delivery of coursework to students.',
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
    'Remote software development team where developers wrote unit and integration tests.',
    'Constructed an on-demand insurance platform for consumer items with ASP.NET C# and SQL.',
    'Developed an app for managing claims and insuring items with a Typescript React frontend and ASP.NET C# backend.',
    "Built a business intelligence system for sending information to Trov's partners using Python.",
  ],
}

export const UniversityOfWashingtonResearcher: Experience = {
  title: 'Application Researcher',
  institution: 'University of Washington',
  institutionUrl: 'https://www.washington.edu/',
  location: 'Seattle, WA',
  start: 'Jan. 2013',
  end: 'Nov. 2013',
  description: [
    'Lead developer for the TypeScript library that abstracted cloud storage services like Dropbox, Google Drive, and AWS.',
    'Contributed to a research paper on abstracting cloud storage.',
  ],
}

export const ETradeSoftwareEngineer: Experience = {
  title: 'Software Engineer Intern',
  institution: 'E*Trade',
  institutionUrl: 'https://etrade.com',
  location: 'Seattle, WA',
  start: 'Sept. 2012',
  end: 'May 2013',
  description: [
    'Worked on an international team to develop high performance stock trading apps implemented in Java',
    'Developed high-frequency trading features that supported options (contracts to buy a stock at a given price in a span of time).',
  ],
}

export const UniversityOfWashingtonInstructor: Experience = {
  title: 'Web Instructor and Engineer',
  institution: 'University of Washington',
  institutionUrl: 'https://www.washington.edu',
  location: 'Seattle, WA',
  start: 'Jan. 2012',
  end: 'Jun. 2013',
  description: [
    'Taught modern web development standards to University of Washington staff and students.',
    'Developed applications to manage courses and support tickets using Python and Django.',
  ],
}

export const RakutenSoftwareEngineer: Experience = {
  title: 'Software Engineer Intern',
  institution: 'Rakuten',
  institutionUrl: 'https://www.rakuten.com/',
  location: 'Seattle, WA',
  start: 'Apr. 2012',
  end: 'Nov. 2012',
  description: [
    'Scraped and normalized product information using Python.',
    'Worked with Overstock, Amazon, and Walmart APIs to gather product information and update listings.',
  ],
}

export const SmiteWorksSoftwareEngineer: Experience = {
  title: 'Software Engineer Intern',
  institution: 'SmiteWorks',
  institutionUrl: 'https://www.fantasygrounds.com',
  location: 'Bellevue, WA',
  start: 'Apr. 2011',
  end: 'Nov. 2011',
  description: [
    'Worked on the FantasyGrounds chat feature using C.',
    'Led the development of a C app to import character data from competitors apps.',
    'Worked with the Steam gaming app store to publish updates and respond to customer feedback.',
  ],
}

export default [
  Supio,
  HPE,
  DevotedHealth,
  Freelance,
  HumbleBundleLead,
  CommitteeForChildrenLead,
  TrovFullStack,
  UniversityOfWashingtonResearcher,
  ETradeSoftwareEngineer,
  UniversityOfWashingtonInstructor,
  RakutenSoftwareEngineer,
  SmiteWorksSoftwareEngineer,
]
