export interface AIProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tools: string[];
  image: string;
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
    highlights: [
      'Built a conversational voice agent to guide users through the bug reporting process',
      'Implemented real-time speech-to-text functionality for capturing user input',
      'Integrated Azure DevOps REST API for automatic bug ticket creation',
      'Designed to minimize context-switching during active testing sessions',
    ],
    tools: [
      'JavaScript',
      'Manifest V3',
      'Chrome Extensions API',
      'Azure DevOps REST API',
      'Web Speech API',
    ],
    image: '/img/project/tipqa-voice-assistant.png',
    github: 'https://github.com/jaypsdugaojo/tfs-voice-bug-reporter',
  },
  {
    id: 2,
    title: 'TIPQA Action Recorder',
    subtitle: 'Chrome Extension',
    description:
      'A custom Chrome extension that captures user interactions in real time and converts them into structured QA test steps ready to export and share.',
    highlights: [
      'Captures user interactions and converts them into structured QA test steps automatically',
      'Supports export formats: JSON, Markdown, and Excel for flexible workflow integration',
      'Seamlessly integrates with existing QA documentation and reporting pipelines',
      'Reduces manual effort in writing test cases from exploratory testing sessions',
    ],
    tools: [
      'JavaScript',
      'Manifest V3',
      'Chrome Extensions API',
      'Excel Export',
      'Markdown',
    ],
    image: '/img/project/tipqa-recorder.png',
    github: 'https://github.com/jaypsdugaojo/tipqa-recorder',
  },
];
