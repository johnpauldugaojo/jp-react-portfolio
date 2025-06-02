import React from 'react';
import DownloadCVButton from '../ui/DownloadCVButton';
import { personalInfo } from '../../data/personalInfo';
import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../../img/id.jpg';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id='hero'
      className='min-h-screen flex items-center pt-16 pb-16 relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'
    >
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='order-2 lg:order-1 animate-fadeIn'>
            <h1 className='text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4'>
              Hi, I'm{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                {personalInfo.name}
              </span>
            </h1>
            <h2 className='text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6'>
              {personalInfo.title}
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl'>
              Committed to ensuring software quality through precise testing,
              emerging automation skills, and a mindset of continuous
              improvement. Let's work together to build reliable,
              high-performing software.
            </p>
            <div className='flex flex-wrap gap-4'>
              <DownloadCVButton />
              <button
                onClick={() => scrollToSection('projects')}
                className='px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md'
              >
                View Projects
              </button>
            </div>
          </div>

          <div className='order-1 lg:order-2 flex justify-center animate-fade-in delay-300'>
            <div className='relative animate-float'>
              {/* Profile pic */}
              <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl transition-transform duration-300 hover:scale-105'>
                <img
                  src={profile}
                  alt='Professional Portrait'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* animation */}
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-xl opacity-70 -z-10 animate-pulse-slow'></div>
              <div className='absolute -top-4 -left-4 w-16 h-16 bg-emerald-500 rounded-lg opacity-70 -z-10 animate-bounce pointer-events-none'></div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4 pt-4'>
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110'
            aria-label='GitHub'
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110'
            aria-label='LinkedIn'
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110'
            aria-label='Email'
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className='absolute top-20 right-20 w-64 h-64 bg-emerald-300 dark:bg-emerald-700 rounded-full opacity-10 blur-3xl'></div>
      <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full opacity-10 blur-3xl pointer-events-none'></div> */}
    </section>
  );
};

export default Hero;
