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
    title: "E-commerce Platform Quality Assurance",
    description: "Led end-to-end testing of a major e-commerce platform, implementing automated test suites with Playwright that reduced regression testing time by 70%. Created comprehensive test plans and collaborated with development teams to resolve critical issues before release.",
    tools: ["Playwright", "TypeScript", "JIRA", "Jenkins"],
    image: "https://images.pexels.com/photos/6956/person-woman-apple-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Banking Application Test Framework",
    description: "Developed a custom test automation framework using Cypress for a financial services application. The framework included data-driven testing capabilities, visual regression testing, and integration with CI/CD pipelines, resulting in 90% test coverage.",
    tools: ["Cypress", "JavaScript", "Docker", "GitLab CI"],
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "QA Process Improvement Initiative",
    description: "Spearheaded a company-wide QA process improvement initiative that standardized testing methodologies, implemented shift-left testing practices, and introduced quality metrics. These changes led to a 40% reduction in production defects.",
    tools: ["TestRail", "JIRA", "Confluence", "Excel"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
];