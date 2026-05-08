export interface AIProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  // highlights: string[];
  github?: string;
  demo?: string;
}

export const aiProjects: AIProject[] = [
  {
    id: 1,
    title: 'TIPQA Voice Assistant',
    subtitle: 'Chrome Extension',
    description:
      'A voice-driven Chrome extension that enables QA engineers to create Azure DevOps (TFS) bug tickets using conversational voice input hands-free and fast.',
    github: 'https://github.com/jaypsdugaojo/tfs-voice-bug-reporter',
  },
  {
    id: 2,
    title: 'TIPQA Action Recorder',
    subtitle: 'Chrome Extension',
    description:
      'A custom Chrome extension that captures user interactions in real time and converts them into structured QA test steps ready to export and share.',

    github: 'https://github.com/jaypsdugaojo/tipqa-recorder',
  },
  {
    id: 3,
    title: 'Automated HTML Test Case Generator',
    subtitle: 'Claude Code Agent',
    description: `A specialized QA Engineer assistant that transforms TFS (Team Foundation Server / Azure DevOps) bug tickets into interactive, self-contained HTML test case documents with built-in execution tracking, inline editing, progress monitoring, and result-sharing capabilities for team collaboration. \n\n The agent doesn't just generate static documentation, it produces a fully interactive web app in a single HTML file that QEs can use to execute tests, record results, and share their progress with teammates without any external tools.`,
  },
];
