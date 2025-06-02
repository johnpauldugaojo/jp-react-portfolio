export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github?: string;
  summary: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'testing' | 'automation' | 'development' | 'tools';
}

export const personalInfo: PersonalInfo = {
  name: 'John Paul Dugaojo',
  title: 'QC Engineer | Software Engineer',
  email: 'johnpauldugaojo@gmail.com',
  linkedin: 'https://linkedin.com/in/johnpauldugaojo/',
  github: 'https://github.com/johnpauldugaojo',
  summary:
    'Quality Control Engineer with over 3 years of experience in software testing and quality assurance, and 2 years of experience as a Software Engineer. Specialized in test automation using Playwright and Cypress, with additional skills in web development using React, Tailwind CSS and Appian. Passionate about delivering high-quality software products, writing clean and maintainable code, and continuously improving development and testing processes.',
  skills: [
    { name: 'Manual Testing', level: 5, category: 'testing' },
    { name: 'Test Case Design', level: 5, category: 'testing' },
    { name: 'Defect Tracking', level: 4, category: 'testing' },
    { name: 'CI/CD', level: 3.5, category: 'testing' },
    { name: 'Playwright', level: 4, category: 'automation' },
    { name: 'Cypress', level: 4, category: 'automation' },
    { name: 'Test Runner', level: 4.5, category: 'automation' },
    { name: 'JavaScript/TypeScript', level: 4, category: 'development' },
    { name: 'Node', level: 4, category: 'development' },
    { name: 'React', level: 3.5, category: 'development' },
    { name: 'Appian', level: 4, category: 'development' },
    { name: 'HTML/CSS', level: 4.5, category: 'development' },
    { name: 'SQL/ORACLE', level: 4, category: 'development' },
    { name: 'API', level: 4, category: 'development' },
    { name: 'TFS', level: 5, category: 'tools' },
    { name: 'JIRA', level: 3.5, category: 'tools' },
    { name: 'VS Explorer', level: 4, category: 'tools' },
    { name: 'Git', level: 4, category: 'tools' },
    { name: 'Postman', level: 4, category: 'tools' },
    { name: 'Dbeaver', level: 4, category: 'tools' },
  ],
};
