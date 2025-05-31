import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { SquareDashedBottomCode } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <div
          className='font-bold text-xl cursor-pointer'
          onClick={() => scrollToSection('hero')}
        >
          <span className='text-emerald-600 dark:text-emerald-400'>Jayps</span>{' '}
          <span>
            <SquareDashedBottomCode
              size={30}
              className='inline-block align-middle text-emerald-600 dark:text-emerald-400'
            />
          </span>
          {/* <span className='text-slate-800 dark:text-white'>Engineer</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium relative px-1 py-2 transition-colors
                ${
                  activeSection === item.id
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full' />
              )}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={18} className='text-slate-300' />
            ) : (
              <Moon size={18} className='text-slate-600' />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className='flex items-center md:hidden space-x-4'>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <Sun size={18} className='text-slate-300' />
            ) : (
              <Moon size={18} className='text-slate-600' />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-slate-700 dark:text-slate-200'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white dark:bg-slate-900 shadow-lg'>
          <div className='container mx-auto px-6 py-4 flex flex-col space-y-4'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left p-2 rounded-md ${
                  activeSection === item.id
                    ? 'bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
