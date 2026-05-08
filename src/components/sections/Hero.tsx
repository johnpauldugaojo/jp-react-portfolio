import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import * as THREE from 'three';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import DownloadCVButton from '../ui/DownloadCVButton';
import { personalInfo } from '../../data/personalInfo';
import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '/img/id.jpg';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (vantaEffect.current) vantaEffect.current.destroy();

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff3f81,
      backgroundColor: 0x23153c,
      points: 12,
      maxDistance: 25,
      spacing: 18,
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Letter-by-letter name animation
    animate('.hero-name .letter', {
      opacity: [0, 1],
      translateY: ['1.2em', 0],
      delay: stagger(45, { start: 150 }),
      duration: 500,
      ease: 'outExpo',
    });

    // Staggered entrance for content blocks
    animate(
      document.querySelectorAll(
        '.hero-subtitle, .hero-desc, .hero-actions, .hero-socials',
      ),
      {
        opacity: [0, 1],
        translateY: [24, 0],
        delay: stagger(160, { start: 550 }),
        duration: 650,
        ease: 'outExpo',
      },
    );

    // Floating animation for green decorative box
    animate('.hero-deco-green', {
      translateY: [-10, 10],
      duration: 2200,
      direction: 'alternate',
      loop: true,
      ease: 'inOutSine',
    });

    // Pulsing scale for orange decorative box
    animate('.hero-deco-orange', {
      scale: [0.92, 1.08],
      opacity: [0.6, 0.82],
      duration: 2800,
      direction: 'alternate',
      loop: true,
      ease: 'inOutSine',
    });
  }, []);

  return (
    <section
      id='hero'
      ref={vantaRef}
      className='min-h-screen flex items-center pt-16 pb-16 relative'
    >
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <h1 className='text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4'>
              Hi, I'm{' '}
              <span className='hero-name text-emerald-600 dark:text-emerald-400'>
                {personalInfo.name.split('').map((char, i) => (
                  <span
                    key={i}
                    className='letter inline-block'
                    style={{ opacity: 0 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>

            <h2
              className='hero-subtitle text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6'
              style={{ opacity: 0 }}
            >
              {personalInfo.title}
            </h2>

            <p
              className='hero-desc text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl'
              style={{ opacity: 0 }}
            >
              I design and build AI-powered tools that transform QA workflows.
              With strong experience in software testing, automation, and
              development, I go beyond traditional QA by creating solutions such
              as voice-driven testing, action recorders, and intelligent test
              step generators. My focus is on reducing manual effort, improving
              testing efficiency, and building scalable systems that enhance
              software quality.
            </p>

            <div
              className='hero-actions flex flex-wrap gap-4'
              style={{ opacity: 0 }}
            >
              <DownloadCVButton />
              <button
                onClick={() => scrollToSection('projects')}
                className='px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md'
              >
                View Projects
              </button>
            </div>
          </div>

          <div className='order-1 lg:order-2 flex justify-center'>
            <div className='relative'>
              <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl transition-transform duration-300 hover:scale-105'>
                <img
                  src={profile}
                  alt='Professional Portrait'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='hero-deco-orange absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 rounded-xl opacity-70 -z-10'></div>
              <div className='hero-deco-green absolute -top-4 -left-4 w-16 h-16 bg-emerald-500 rounded-lg opacity-70 -z-10 pointer-events-none'></div>
            </div>
          </div>
        </div>

        <div
          className='hero-socials flex items-center gap-4 pt-4'
          style={{ opacity: 0 }}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
