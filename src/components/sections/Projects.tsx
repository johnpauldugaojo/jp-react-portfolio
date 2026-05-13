import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../../data/projects';
import { ExternalLink, X } from 'lucide-react';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'QA', value: 'qa' },
  { label: 'Web', value: 'web' },
] as const;

type Filter = typeof FILTERS[number]['value'];

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />
      <div
        className='relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='relative h-52 overflow-hidden rounded-t-2xl'>
          <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <h3 className='absolute bottom-4 left-6 text-xl font-bold text-white pr-12'>{project.title}</h3>
        </div>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors'
        >
          <X size={18} />
        </button>
        <div className='p-6'>
          <p className='text-slate-900 dark:text-violet-100 text-sm leading-relaxed mb-6'>{project.description}</p>
          <div className='mb-6'>
            <h4 className='text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3'>
              Tools & Technologies
            </h4>
            <div className='flex flex-wrap gap-2'>
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className='px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-violet-100 rounded-full'
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium transition-colors'
            >
              View Project <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id='projects' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            My{' '}
            <span className='text-cyan-600 dark:text-cyan-400'>Projects</span>
          </h2>
          <div className='w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-900 dark:text-violet-100 max-w-2xl mx-auto'>
            Here are some of the key projects I've worked on that showcase my
            skills in quality assurance and test automation.
          </p>

          {/* Filter tabs */}
          <div className='flex justify-center gap-2 mt-8'>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.value
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-white/20 dark:bg-slate-700/40 text-slate-700 dark:text-violet-100 hover:bg-cyan-100 dark:hover:bg-slate-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className='relative group bg-white/10 dark:bg-slate-800/15 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl'
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60'></div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-slate-900 dark:text-white mb-3'>{project.title}</h3>

                  <p className='text-slate-900 dark:text-violet-100 mb-2 line-clamp-3 text-sm'>{project.description}</p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className='text-xs text-cyan-600 dark:text-cyan-400 hover:underline mb-4 inline-block'
                  >
                    Read more
                  </button>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-violet-100 rounded-full'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium'
                    >
                      View Project <ExternalLink size={16} className='ml-1' />
                    </a>
                  )}
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-300 ${
                    activeProject === project.id ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
