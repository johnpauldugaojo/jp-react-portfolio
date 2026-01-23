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
    role: 'QC Engineer',
    company: 'Deltek',
    location: 'Makati, PH',
    startDate: 'April 2022',
    endDate: 'January 2026',
    responsibilities: [
      'Looking for frontend and backend issues within the software',
      'Has experience performing different types of testing, such as smoke, regression, sanity, and manual testing',
      'Create or file a bug ticket on Team Foundation Server',
      'Develop and execute comprehensive test plans, test cases, and test scripts for ERP modules',
      'Create detailed and comprehensive test cases based on functional and non-functional requirements.',
      'Provide feedback to the lead tester and manager regarding development and process optimizations.',
      'Work closely with Software and QC Engineer Teams to ensure quality testing practices are incorporated across the development cycle.',
      'Execute automated and manual test cases and provide pass or fail documentation using the standard tools utilized by the team.',
      'Develop and maintain automated test scripts using Test Runner',
      'Install and manage the latest software builds using TeamCity as a Server Administrator.',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer | Appian Developer',
    company: 'Pragmanila Solutions | UnionBank PH',
    location: 'Eastwood City, PH',
    startDate: 'Jun 2021',
    endDate: 'May 2022',
    responsibilities: [
      'Worked closely with web developers and assisted them in group web development projects. Resolved minor bug fixes and created documentation for existing development projects.',
      'Responsible for developing both the front- end and back-end of a software application. This requires a strong understanding of both UI development and server-side development',
      'Design and develop technical solutions on the Appian BPM Suite based on the requirements gathered',
      "Create Appian Records, Tempo Reports, and Portal Report. Create Customer Data Types (CDT's) from XSD & create tables in database through data store",
      "Create Appian Records, Tempo Reports, and Portal Report. Create Customer Data Types (CDT's) from XSD & create tables in database through data store",
      'Good exposure to the agile tool JIRA in creating stories and story estimation. Expertise in SAIL which includes Forms, Dashboards and Reports. Created Expression Rules that restricts the data entered from user end as per the Business Requirements.',
      'Have knowledge in SAIL Forms, Dashboards, Reports, Services and Entity Backed Reports. Worked with Business to understand their requirement, design and develop them into to Process models.',
    ],
  },
];
