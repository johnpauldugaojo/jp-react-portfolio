import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { aiProjects } from '../../data/aiProjects';

const AIProjects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id='ai-projects' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            🧠 AI{' '}
            <span className='text-cyan-600 dark:text-cyan-400'>
              Projects
            </span>
          </h2>
          <div className='w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-900 dark:text-violet-100 max-w-2xl mx-auto'>
            Tools I built to solve real QA problems combining voice, automation,
            and AI to reduce manual effort and accelerate testing workflows.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className={`bg-white/10 dark:bg-slate-800/15 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                expandedId === project.id ? 'ring-2 ring-cyan-500 dark:ring-cyan-400' : ''
              }`}
              onClick={() => toggleExpand(project.id)}
            >
              <div className='flex items-start justify-between gap-4 mb-3'>
                <div>
                  <span className='text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide'>
                    {project.subtitle}
                  </span>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mt-1'>
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${
                expandedId === project.id ? 'max-h-[2000px]' : 'max-h-16'
              }`}>
                <p className='text-slate-900 dark:text-violet-100 text-sm leading-relaxed'>
                  {project.description}
                </p>
              </div>

              <div className='mt-3 text-xs font-medium text-cyan-600 dark:text-cyan-400'>
                {expandedId === project.id ? 'Show less' : 'Read more'}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${project.title} GitHub`}
                  onClick={(e) => e.stopPropagation()}
                  className='inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-violet-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mt-4'
                >
                  <Github size={16} /> View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
