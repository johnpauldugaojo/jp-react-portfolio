import React from 'react';
import { Check } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const About: React.FC = () => {
  return (
    <section id='about' className='py-20 bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            About{' '}
            <span className='text-emerald-600 dark:text-emerald-400'>Me</span>
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='lg:order-1 order-2'>
            <h3 className='text-2xl font-semibold text-slate-800 dark:text-white mb-6'>
              Quality Control and Software Engineer with a passion for
              excellence
            </h3>
            <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
              {personalInfo.summary}
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  End-to-End Testing
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  Test Automation
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  Performance Testing
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  Security Testing
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  CI/CD Integration
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  Agile Methodologies
                </p>
              </div>
              <div className='flex items-start'>
                <Check
                  size={20}
                  className='text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                  Web Development
                </p>
              </div>
            </div>

            <a
              href='#contact'
              className='inline-block px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-medium hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors'
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
              />
            </div>

            {/* Decorative elements */}
            <div className='absolute -bottom-6 -left-6 w-48 h-48 bg-slate-100 dark:bg-slate-800 rounded-lg -z-10'></div>
            <div className='absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg -z-10'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
