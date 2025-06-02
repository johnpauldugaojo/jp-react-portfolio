export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'UBP: MSME and Rapid Merchant Onboarding (RMO)',
    description:
      'UnionBank offers tailored solutions to support Micro, Small, and Medium Enterprises (MSMEs) through efficient banking products that help grow their business. One key service is the Rapid Merchant Onboarding (RMO), which allows business owners to quickly and easily open accounts, access digital payment solutions, and start accepting transactions with minimal requirements and fast processing time. This initiative aims to empower MSMEs by simplifying their entry into the digital financial ecosystem.',
    tools: [
      'Appian',
      'Dbeaver',
      'Postman',
      'Agile Methodology',
      'SQL',
      'Oracle',
      'JIRA',
      'API',
    ],
    image:
      'https://coingeek.com/wp-content/uploads/2022/02/UnionBank-Logo-jpg.webp',
  },
  {
    id: 2,
    title: 'Deltek TIP QMS',
    description:
      'Deltek TIP Technologies is the leading integrated QMS purpose-built for aerospace and defense manufacturers, including government contractors. Our quality management system consists of many flexible modules designed to support evolving industry regulations, advanced quality requirements, and supply chain quality. Shop floor software integration provides real-time visibility into the production process so users can accelerate their reaction to a shift in quality to reduce costs and improve operations.',
    tools: [
      'Test Runner',
      'TFS',
      'Dbeaver',
      'SQL',
      'Oracle',
      'Visual Studio Explorer',
      'Test Automation',
      'End to End Testing',
    ],
    image:
      'https://www.deltek.com/-/media/deltekblogs/blogs/2025/05/tip/modernized-branding-and-visual-themes.ashx',
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive single-page portfolio built with React.js and Tailwind CSS, designed to showcase my experience and skills as both a Software Engineer and Quality Control Engineer, highlighting my strengths in development, automated/manual testing, and delivering reliable, high-quality software solutions.',
    tools: ['ReactJS', 'TailwindCSS', 'TypeScript', 'Vite', 'Git'],
    image: '/img/project/proj1.png',
  },
];
