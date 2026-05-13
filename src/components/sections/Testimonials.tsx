import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const AUTOPLAY_INTERVAL = 5000;

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDirection(next > activeIdx || (next === 0 && activeIdx === testimonials.length - 1) ? 1 : -1);
      setActiveIdx(next);
    },
    [activeIdx],
  );

  const prev = () => {
    const idx = (activeIdx - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setActiveIdx(idx);
  };

  const next = useCallback(() => {
    const idx = (activeIdx + 1) % testimonials.length;
    setDirection(1);
    setActiveIdx(idx);
  }, [activeIdx]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[activeIdx];

  return (
    <section id='testimonials' className='py-20'>
      <div className='container mx-auto px-6'>
        <motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>
            What People{' '}
            <span className='text-cyan-600 dark:text-cyan-400'>Say</span>
          </h2>
          <div className='w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-900 dark:text-violet-100 max-w-2xl mx-auto'>
            Feedback from colleagues and managers I've had the pleasure of working with.
          </p>
        </motion.div>

        <div
          className='relative max-w-3xl mx-auto'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className='overflow-hidden'>
            <AnimatePresence mode='wait' custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -60 }),
                }}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.35 }}
                className='bg-white/10 dark:bg-slate-800/15 rounded-2xl p-8 shadow-md'
              >
                <Quote size={36} className='text-cyan-500 dark:text-cyan-400 mb-5' />

                <div className='space-y-3 text-slate-900 dark:text-violet-100 text-sm leading-relaxed mb-6'>
                  {t.message.split('\n\n').map((para, i, arr) => (
                    <p key={i}>
                      {i === 0 ? `"${para}` : i === arr.length - 1 ? `${para}"` : para}
                    </p>
                  ))}
                </div>

                <div className='flex items-center gap-3 border-t border-slate-200 dark:border-slate-700 pt-5'>
                  <div className='w-11 h-11 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center shrink-0'>
                    <span className='text-cyan-700 dark:text-cyan-300 font-semibold text-sm'>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900 dark:text-white text-sm'>{t.name}</p>
                    <p className='text-xs text-slate-800 dark:text-violet-200'>{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label='Previous testimonial'
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md hover:bg-cyan-50 dark:hover:bg-slate-600 transition-colors'
          >
            <ChevronLeft size={20} className='text-slate-700 dark:text-white' />
          </button>
          <button
            onClick={next}
            aria-label='Next testimonial'
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 p-2 rounded-full bg-white dark:bg-slate-700 shadow-md hover:bg-cyan-50 dark:hover:bg-slate-600 transition-colors'
          >
            <ChevronRight size={20} className='text-slate-700 dark:text-white' />
          </button>

          {/* Dot indicators */}
          <div className='flex justify-center gap-2 mt-6'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? 'w-6 h-2 bg-cyan-600 dark:bg-cyan-400'
                    : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-cyan-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
