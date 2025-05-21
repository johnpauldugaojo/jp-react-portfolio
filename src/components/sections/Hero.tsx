import React from "react";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";

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
              Hi, I'm{" "}
              <span className='text-emerald-600 dark:text-emerald-400'>
                {personalInfo.name}
              </span>
            </h1>
            <h2 className='text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6'>
              {personalInfo.title}
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl'>
              Ensuring software quality through meticulous testing, automation,
              and continuous improvement. Let's build reliable software
              together.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button
                onClick={() => scrollToSection("contact")}
                className='px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className='px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium rounded-lg border border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm hover:shadow-md'
              >
                View Projects
              </button>
            </div>
          </div>
          <div className='order-1 lg:order-2 flex justify-center animate-fadeIn'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-xl'>
              <img
                src='\img\id.jpg'
                alt='Professional Portrait'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors animate-bounce'
        aria-label='Scroll down'
      >
        <span className='text-sm font-medium mb-2'>Scroll Down</span>
        <ArrowDown size={20} />
      </button>

      {/* Decorative Elements */}
      <div className='absolute top-20 right-20 w-64 h-64 bg-emerald-300 dark:bg-emerald-700 rounded-full opacity-10 blur-3xl'></div>
      <div className='absolute bottom-20 left-20 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full opacity-10 blur-3xl'></div>
    </section>
  );
};

export default Hero;
