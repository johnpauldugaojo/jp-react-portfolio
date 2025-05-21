import React, { useState } from "react";
import { experiences } from "../../data/experience";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id='experience' className='py-20 bg-slate-50 dark:bg-slate-800'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            Work{" "}
            <span className='text-emerald-600 dark:text-emerald-400'>
              Experience
            </span>
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            My professional journey in the quality assurance and testing field.
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Timeline line */}
          <div className='absolute left-0 md:left-1/2 top-0 h-full w-px bg-slate-300 dark:bg-slate-600 transform md:translate-x-px'></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-0"
                  : "md:pl-12 md:text-left md:ml-0 md:mr-auto"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-5 h-5 rounded-full border-4 border-emerald-600 dark:border-emerald-400 bg-white dark:bg-slate-800 z-10 ${
                  index % 2 === 0
                    ? "md:-left-2.5 left-0"
                    : "md:-right-2.5 right-0"
                }`}
              ></div>

              <div
                className={`bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 ml-8 md:ml-0 md:mr-0 transition-all cursor-pointer hover:shadow-lg ${
                  expandedId === exp.id
                    ? "ring-2 ring-emerald-500 dark:ring-emerald-400"
                    : ""
                }`}
                onClick={() => toggleExpand(exp.id)}
              >
                <span className='inline-block px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full mb-4'>
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>

                <h3 className='text-xl font-semibold text-slate-800 dark:text-white mb-2'>
                  {exp.role}
                </h3>

                <div className='flex items-center mb-1 text-slate-600 dark:text-slate-300'>
                  <BriefcaseIcon size={16} className='mr-2' />
                  <span>{exp.company}</span>
                </div>

                <div className='flex items-center mb-4 text-slate-600 dark:text-slate-300'>
                  <MapPinIcon size={16} className='mr-2' />
                  <span>{exp.location}</span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === exp.id
                      ? "max-h-[1000px]"
                      : "max-h-0 md:max-h-28"
                  }`}
                >
                  <h4 className='font-medium text-slate-700 dark:text-slate-200 mb-2'>
                    Key Responsibilities:
                  </h4>
                  <ul className='list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300'>
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className={index % 2 === 0 ? "md:text-right" : ""}
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {expandedId !== exp.id && (
                  <div className='mt-2 text-sm text-emerald-600 dark:text-emerald-400 md:hidden'>
                    Click to expand
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
