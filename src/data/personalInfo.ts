export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github?: string;
  summary: string[];
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'testing' | 'automation' | 'development' | 'ai' | 'tools';
}

export const personalInfo: PersonalInfo = {
  name: 'John Paul Dugaojo',
  title: 'QA Engineer | AI-Driven QA Specialist | Software Engineer',
  email: 'johnpauldugaojo@gmail.com',
  linkedin: 'https://linkedin.com/in/johnpauldugaojo/',
  github: 'https://github.com/johnpauldugaojo',
  summary: [
    'I am a Quality Control Engineer and Software Engineer with over 4 years of experience in software testing and 2 years in development. My expertise lies in end-to-end testing, automation, and building tools that improve QA processes.',
    'I specialize in using frameworks like Playwright and Cypress while also developing custom solutions using JavaScript, React, and modern web technologies.',
    'What sets me apart is my ability to combine QA knowledge with development skills to create tools that solve real-world testing challenges. I continuously explore AI and automation to enhance productivity, reduce manual work, and deliver high-quality software efficiently.',
  ],
  skills: [
    { name: 'Manual Testing', level: 5, category: 'testing' },
    { name: 'Test Case Design', level: 5, category: 'testing' },
    { name: 'Defect Tracking', level: 4, category: 'testing' },
    { name: 'API Testing', level: 4, category: 'testing' },
    { name: 'Playwright', level: 4, category: 'automation' },
    { name: 'Cypress', level: 4, category: 'automation' },
    { name: 'Test Runner', level: 4.5, category: 'automation' },
    { name: 'JavaScript / TypeScript', level: 4, category: 'development' },
    { name: 'Node.js', level: 4, category: 'development' },
    { name: 'React', level: 3.5, category: 'development' },
    { name: 'HTML / CSS', level: 4.5, category: 'development' },
    { name: 'SQL / Oracle', level: 4, category: 'development' },
    { name: 'TFS', level: 5, category: 'tools' },
    { name: 'JIRA', level: 3.5, category: 'tools' },
    { name: 'Git', level: 4, category: 'tools' },
    { name: 'Postman', level: 4, category: 'tools' },
    { name: 'DBeaver', level: 4, category: 'tools' },
    { name: 'VS Code', level: 4, category: 'tools' },
  ],
};
