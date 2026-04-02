export interface Project {
  name: string;
  client?: string;
  responsibilities: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  responsibilities?: string[];
  projects?: Project[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'QA Automation Engineer (AI QA SME)',
    company: 'Deltek',
    location: 'Makati, PH',
    startDate: 'April 2022',
    endDate: 'January 2026',
    projects: [
      {
        name: 'Deltek TIP QMS',
        responsibilities: [
          'Serve as the Subject Matter Expert (SME) for AI-driven QA solutions, driving innovation and leading initiatives to improve and optimize QA processes across the team',
          'Designed and implemented AI-powered QA tools to automate bug reporting, test case generation, and QA workflows',
          'Performed manual and automated testing across ERP modules, covering regression, smoke, sanity, and UAT cycles',
          'Developed and maintained automation scripts using Internal Automation Tools, improving test reliability and execution speed',
          'Administered TeamCity server by installing and updating builds to ensure availability of the latest project versions for testing and usage',
          'Managed defect lifecycle using Azure DevOps (TFS), ensuring traceability and quality across sprints',
          'Collaborated with developers and stakeholders to ensure high-quality releases',
        ],
      },
    ],
  },
  {
    id: 2,
    role: 'Software Engineer (BPM Focus)',
    company: 'Pragmanila Solutions Inc.',
    location: 'Eastwood Ave, Bagumbayan, Quezon City',
    startDate: 'June 2021',
    endDate: 'May 2022',
    projects: [
      {
        name: 'Motherlode',
        responsibilities: [
          'Collaborated with web developers on group projects, supporting development tasks, minor bug fixes, and technical documentation',
          'Gained hands-on exposure to frontend and backend workflows, strengthening understanding of application architecture and defect analysis',
        ],
      },
      {
        name: 'RMO (Rapid Merchant Onboarding)',
        client: 'UnionBank of the Philippines',
        responsibilities: [
          'Designed and developed workflow solutions using Appian BPM Suite for MSME onboarding applications',
          'Built Appian Records, dashboards, reports, portals, and Customer Data Types (CDTs) from XSDs',
          'Developed SAIL forms, expression rules, and process models based on business requirements',
          'Worked in Agile environments using Jira for story creation, estimation, and sprint coordination',
          'Collaborated with business stakeholders to deliver reliable and efficient workflow solutions',
        ],
      },
    ],
  },
];
