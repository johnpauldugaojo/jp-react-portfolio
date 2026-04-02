import React from "react";
import { motion } from "framer-motion";
import { personalInfo, Skill } from "../../data/personalInfo";

const Skills: React.FC = () => {
  const skillsByCategory = personalInfo.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryMeta: Record<string, { label: string; emoji: string }> = {
    testing:     { label: "Testing",                    emoji: "🧪" },
    automation:  { label: "Automation",                 emoji: "⚙️" },
    development: { label: "Development",                emoji: "💻" },
    ai:          { label: "AI & Process Automation",    emoji: "🧠" },
    tools:       { label: "Tools & Processes",          emoji: "🛠" },
  };

  const categoryOrder = ["testing", "automation", "development", "ai", "tools"];

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
          {categoryOrder.map((category, cardIndex) => {
            const skills = skillsByCategory[category];
            if (!skills) return null;
            const { label, emoji } = categoryMeta[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: cardIndex * 0.1 }}
                className='bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02]'
              >
                <h3 className='text-xl font-semibold text-slate-800 dark:text-white mb-6'>
                  {emoji} {label}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: cardIndex * 0.1 + i * 0.05 }}
                      className='px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
