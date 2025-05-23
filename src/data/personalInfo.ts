export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: "testing" | "automation" | "development" | "tools";
}

export const personalInfo: PersonalInfo = {
  name: "John Paul Dugaojo",
  title: "QC Engineer",
  email: "johnpauldugaojo@gmail.com",
  linkedin: "https://linkedin.com/in/johnpauldugaojo/",
  summary:
    "Quality Control Engineer with over 3 years of experience in software testing and quality assurance. Specialized in test automation using Playwright and Cypress, with additional skills in web development. Passionate about delivering high-quality software products and improving development processes.",
  skills: [
    { name: "Manual Testing", level: 5, category: "testing" },
    { name: "Test Case Design", level: 5, category: "testing" },
    { name: "Defect Tracking", level: 4, category: "testing" },
    { name: "Playwright", level: 4, category: "automation" },
    { name: "Cypress", level: 4, category: "automation" },
    { name: "Test Runner", level: 4.5, category: "automation" },
    { name: "JavaScript", level: 4, category: "development" },
    { name: "TypeScript", level: 4, category: "development" },
    { name: "React", level: 3.5, category: "development" },
    { name: "HTML/CSS", level: 4.5, category: "development" },
    { name: "SQL/ORACLE", level: 4, category: "development" },
    { name: "API", level: 4, category: "development" },
    { name: "Appian", level: 4, category: "tools" },
    { name: "Git", level: 4, category: "tools" },
    { name: "TFS", level: 5, category: "tools" },
    { name: "CI/CD", level: 3, category: "tools" },
    { name: "Postman", level: 3.5, category: "tools" },
    { name: "Dbeaver", level: 3.5, category: "tools" },
  ],
};
