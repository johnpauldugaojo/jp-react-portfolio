import React from 'react';

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillLogos = [
  { name: 'Playwright',  src: `${BASE}/playwright/playwright-original.svg` },
  { name: 'Cypress',     src: `${BASE}/cypressio/cypressio-original.svg` },
  { name: 'JavaScript',  src: `${BASE}/javascript/javascript-original.svg` },
  { name: 'TypeScript',  src: `${BASE}/typescript/typescript-original.svg` },
  { name: 'React',       src: `${BASE}/react/react-original.svg` },
  { name: 'Node.js',     src: `${BASE}/nodejs/nodejs-original.svg` },
  { name: 'Postman',     src: `${BASE}/postman/postman-original.svg` },
  { name: 'Git',         src: `${BASE}/git/git-original.svg` },
  { name: 'JIRA',        src: `${BASE}/jira/jira-original.svg` },
  { name: 'VS Code',     src: `${BASE}/vscode/vscode-original.svg` },
  { name: 'HTML5',       src: `${BASE}/html5/html5-original.svg` },
  { name: 'CSS3',        src: `${BASE}/css3/css3-original.svg` },
  { name: 'Azure DevOps', src: `${BASE}/azuredevops/azuredevops-original.svg` },
];

const SkillsCarousel: React.FC = () => {
  // Duplicate items for seamless loop
  const items = [...skillLogos, ...skillLogos];

  return (
    <div className='py-10 bg-white dark:bg-slate-900 overflow-hidden border-y border-slate-100 dark:border-slate-800'>
      <div className='flex animate-marquee w-max'>
        {items.map((skill, i) => (
          <div
            key={i}
            className='flex flex-col items-center justify-center mx-8 gap-2 group'
          >
            <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm group-hover:shadow-md transition-shadow p-3'>
              <img
                src={skill.src}
                alt={skill.name}
                className='w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity'
              />
            </div>
            <span className='text-xs text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
