export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "QC Engineer",
    company: "Deltek",
    location: "Makati, PH",
    startDate: "April 2022",
    endDate: null,
    responsibilities: [
      "Looking for frontend and backend issues within the software",
      "Has experience performing different types of testing, such as smoke, regression, sanity, and manual testing",
      "Create or file a bug ticket on Team Foundation Server",
      "Develop and execute comprehensive test plans, test cases, and test scripts for ERP modules",
      "Create detailed and comprehensive test cases based on functional and non-functional requirements.",
      "Provide feedback to the lead tester and manager regarding development and process optimizations.",
      "Work closely with Software and QC Engineer Teams to ensure quality testing practices are incorporated across the development cycle.",
      "Execute automated and manual test cases and provide pass or fail documentation using the standard tools utilized by the team.",
      "Develop and maintain automated test scripts using Test Runner",
      "Install and manage the latest software builds using TeamCity as a Server Administrator.",
    ],
  },
  {
    id: 2,
    role: "QC Engineer",
    company: "InnovateSoft",
    location: "Austin, TX",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    responsibilities: [
      "Developed and executed test plans for web and mobile applications",
      "Created automation suites using Cypress for regression testing",
      "Performed API testing and integration testing",
      "Participated in agile ceremonies and provided quality metrics reporting",
    ],
  },
  {
    id: 3,
    role: "Junior QA Specialist",
    company: "DataVision Systems",
    location: "Remote",
    startDate: "Mar 2020",
    endDate: "May 2021",
    responsibilities: [
      "Conducted manual testing for web applications",
      "Created detailed test cases and documented defects",
      "Assisted in setting up basic automation tests",
      "Performed browser compatibility testing",
    ],
  },
];
