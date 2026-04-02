import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { aiProjects } from '../../data/aiProjects';

const AIProjects: React.FC = () => {
  return (
    <section id='ai-projects' className='py-20 bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            🧠 AI{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>
              Projects
            </span>
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Tools I built to solve real QA problems combining voice, automation,
            and AI to reduce manual effort and accelerate testing workflows.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className='bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-start justify-between gap-4 mb-3'>
                <div>
                  <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide'>
                    {project.subtitle}
                  </span>
                  <h3 className='text-xl font-bold text-slate-800 dark:text-white mt-1'>
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5'>
                {project.description}
              </p>

              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${project.title} GitHub`}
                  className='inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'
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
