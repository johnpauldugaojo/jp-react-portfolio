import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-900 text-white py-12'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>
              <span className='text-emerald-400'>QA Automation</span>{' '}
              <span>Engineer</span>
            </h3>

            <p className='text-slate-300 mb-4'>
              QA Engineer and Software Engineer focused on building AI-powered
              tools and automation solutions. I design systems that improve
              testing efficiency, reduce manual effort, and enhance overall
              software quality
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#about'
                  className='text-slate-300 hover:text-emerald-300 transition-colors'
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href='#skills'
                  className='text-slate-300 hover:text-emerald-300 transition-colors'
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-slate-300 hover:text-emerald-300 transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-slate-300 hover:text-emerald-300 transition-colors'
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-slate-300 hover:text-emerald-300 transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect</h3>
            <div className='flex items-center space-x-2 mb-3'>
              <Mail size={18} className='text-emerald-400' aria-hidden='true' />
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.name}`}
                className='text-slate-300 hover:text-emerald-300 transition-colors'
              >
                {personalInfo.email}
              </a>
            </div>
            <div className='flex items-center space-x-2 mb-3'>
              <Linkedin
                size={18}
                className='text-emerald-400'
                aria-hidden='true'
              />
              <a
                href={personalInfo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${personalInfo.name} on LinkedIn`}
                className='text-slate-300 hover:text-emerald-300 transition-colors'
              >
                LinkedIn Profile
              </a>
            </div>
            <div className='flex items-center space-x-2'>
              <Github
                size={18}
                className='text-emerald-400'
                aria-hidden='true'
              />
              <a
                href={personalInfo.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${personalInfo.name} on GitHub`}
                className='text-slate-300 hover:text-emerald-300 transition-colors'
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm'>
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
