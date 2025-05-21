import React from "react";
import { personalInfo, Skill } from "../../data/personalInfo";

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = personalInfo.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryNames = {
    testing: "Testing",
    automation: "Automation",
    development: "Development",
    tools: "Tools & Processes",
  };

  return (
    <section id='skills' className='py-20 bg-slate-50 dark:bg-slate-800'>
      <div className='container mx-auto px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
            My{" "}
            <span className='text-emerald-600 dark:text-emerald-400'>
              Skills
            </span>
          </h2>
          <div className='w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto rounded-full'></div>
          <p className='mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            My expertise spans across various testing methodologies, automation
            frameworks, and development technologies.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div
              key={category}
              className='bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02]'
            >
              <h3 className='text-xl font-semibold text-slate-800 dark:text-white mb-6'>
                {categoryNames[category as keyof typeof categoryNames]}
              </h3>

              <div className='space-y-5'>
                {skills.map((skill) => (
                  <div key={skill.name} className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='text-slate-700 dark:text-slate-300 font-medium'>
                        {skill.name}
                      </span>
                      <span className='text-sm text-slate-500 dark:text-slate-400'>
                        {skill.level * 20}%
                      </span>
                    </div>
                    <div className='w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full'
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
