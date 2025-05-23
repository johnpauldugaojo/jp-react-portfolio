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
    title: "UBP: MSME and Rapid Merchant Onboarding (RMO)",
    description:
      "UnionBank offers tailored solutions to support Micro, Small, and Medium Enterprises (MSMEs) through efficient banking products that help grow their business. One key service is the Rapid Merchant Onboarding (RMO), which allows business owners to quickly and easily open accounts, access digital payment solutions, and start accepting transactions with minimal requirements and fast processing time. This initiative aims to empower MSMEs by simplifying their entry into the digital financial ecosystem.",
    tools: [
      "Appian",
      "Dbeaver",
      "Postman",
      "Agile Methodology",
      "SQL",
      "Oracle",
      "JIRA",
      "API",
    ],
    image:
      "https://coingeek.com/wp-content/uploads/2022/02/UnionBank-Logo-jpg.webp",
  },
  {
    id: 2,
    title: "Deltek TIP QMS",
    description:
      "Deltek TIP Technologies is the leading integrated QMS purpose-built for aerospace and defense manufacturers, including government contractors. Our quality management system consists of many flexible modules designed to support evolving industry regulations, advanced quality requirements, and supply chain quality. Shop floor software integration provides real-time visibility into the production process so users can accelerate their reaction to a shift in quality to reduce costs and improve operations.",
    tools: [
      "Test Runner",
      "TFS",
      "Dbeaver",
      "SQL",
      "Oracle",
      "Visual Studio Explorer",
      "Test Automation",
      "End to End Testing",
    ],
    image:
      "https://www.deltek.com/-/media/deltekblogs/blogs/2025/05/tip/modernized-branding-and-visual-themes.ashx",
  },
  {
    id: 3,
    title: "QA Process Improvement Initiative",
    description:
      "A focused effort to enhance the quality assurance process by identifying gaps, streamlining testing workflows, adopting best practices, and implementing tools or automation where needed.",
    tools: ["TFS", "JIRA", "Dbeaver", "Cypress", "Playwright", "Postman"],
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
