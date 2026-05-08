import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id='testimonials' className='py-20'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            What People{' '}
            <span className='text-cyan-600 dark:text-cyan-400'>Say</span>
          </h2>
          <div className='w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-600 dark:text-violet-100 max-w-2xl mx-auto'>
            Feedback from colleagues and managers I've had the pleasure of working with.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`bg-white/10 dark:bg-slate-800/15 rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col ${
                expandedId === t.id
                  ? 'ring-2 ring-cyan-500 dark:ring-cyan-400'
                  : ''
              }`}
              onClick={() => toggleExpand(t.id)}
            >
              <Quote
                size={32}
                className='text-cyan-500 dark:text-cyan-400 mb-4 shrink-0'
              />

              <div
                className={`overflow-hidden transition-all duration-300 flex-1 ${
                  expandedId === t.id ? 'max-h-[2000px]' : 'max-h-20'
                }`}
              >
                <div className='space-y-3 text-slate-600 dark:text-violet-100 text-sm leading-relaxed'>
                  {t.message.split('\n\n').map((para, i, arr) => (
                    <p key={i}>
                      {i === 0 ? `"${para}` : i === arr.length - 1 ? `${para}"` : para}
                    </p>
                  ))}
                </div>
              </div>

              <div className='mt-4 text-xs text-cyan-600 dark:text-cyan-400'>
                {expandedId === t.id ? 'Show less' : 'Read more'}
              </div>

              <div className='mt-4 flex items-center gap-3 border-t border-slate-200 dark:border-slate-700 pt-4'>
                <div className='w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center shrink-0'>
                  <span className='text-cyan-700 dark:text-cyan-300 font-semibold text-sm'>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className='font-semibold text-slate-800 dark:text-white text-sm'>
                    {t.name}
                  </p>
                  <p className='text-xs text-slate-500 dark:text-violet-200'>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
