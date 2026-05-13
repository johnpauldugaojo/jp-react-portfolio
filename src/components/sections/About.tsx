import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id='about' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            About{' '}
            <span className='text-cyan-600 dark:text-cyan-400'>Me</span>
          </h2>
          <div className='w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto rounded-full'></div>
        </div>

        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className='lg:order-1 order-2'>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-6'>
              Quality Control and Software Engineer with a passion for
              excellence
            </h3>
            <div className='text-slate-900 dark:text-violet-100 mb-6 leading-relaxed space-y-4'>
              {personalInfo.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  End-to-End Testing
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  Test Automation (Playwright, Cypress)
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  AI-Driven QA Tools
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  CI/CD Integration
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  Performance & Security Testing
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  Agile Methodologies
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-cyan-600 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-900 dark:text-violet-100'>
                  Web Development (React, Node.js)
                </p>
              </div>
            </div>

            <a
              href='#contact'
              className='inline-block px-6 py-3 rounded-lg bg-white/15 dark:bg-slate-800/15 text-slate-900 dark:text-white font-medium hover:bg-cyan-100/50 dark:hover:bg-slate-700/30 transition-colors'
            >
              Let's Work Together
            </a>
          </div>

          <div className='lg:order-2 order-1 relative'>
            <div className='aspect-[4/3] rounded-2xl overflow-hidden shadow-xl'>
              <img
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='Quality Engineering'
                className='w-full h-full object-cover'
                loading='lazy'
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/img/id.jpg';
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className='absolute -bottom-6 -left-6 w-48 h-48 bg-slate-100 dark:bg-slate-800 rounded-lg -z-10'></div>
            <div className='absolute -top-6 -right-6 w-32 h-32 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg -z-10'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
