import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DownloadCVButton from '../ui/DownloadCVButton';
import { personalInfo } from '../../data/personalInfo';
import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '/img/id.jpg';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const ROLES = [
  'QA Engineer',
  'AI Tool Builder',
  'Automation Specialist',
  'Software Engineer',
];

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center pt-16 pb-16 relative bg-white/5 dark:bg-slate-900/5'
    >
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            className='order-2 lg:order-1'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
              Hi, I'm{' '}
              <span className='text-cyan-600 dark:text-cyan-400'>
                {personalInfo.name}
              </span>
            </h1>

            <h2 className='text-2xl md:text-3xl font-medium text-slate-900 dark:text-violet-100 mb-6 min-h-[2.5rem]'>
              <span>{displayed}</span>
              <span className='animate-pulse text-cyan-500 dark:text-cyan-400'>|</span>
            </h2>

            <p className='text-lg text-slate-900 dark:text-violet-100 mb-8 leading-relaxed max-w-2xl'>
              I design and build AI-powered tools that transform QA workflows.
              With strong experience in software testing, automation, and
              development, I go beyond traditional QA by creating solutions such
              as voice-driven testing, action recorders, and intelligent test
              step generators. My focus is on reducing manual effort, improving
              testing efficiency, and building scalable systems that enhance
              software quality.
            </p>

            <div className='flex flex-wrap gap-4'>
              <DownloadCVButton />
              <button
                onClick={() => scrollToSection('projects')}
                className='px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors shadow-sm hover:shadow-md'
              >
                View Projects
              </button>
            </div>
          </motion.div>

          <motion.div
            className='order-1 lg:order-2 flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='relative animate-float'>
              <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-600 shadow-xl transition-transform duration-300 hover:scale-105'>
                <img
                  src={profile}
                  alt='Professional Portrait'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-xl opacity-70 -z-10 animate-pulse-slow'></div>
              <div className='absolute -top-4 -left-4 w-16 h-16 bg-cyan-500 rounded-lg opacity-70 -z-10 animate-bounce pointer-events-none'></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className='flex items-center gap-4 pt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
