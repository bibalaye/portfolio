'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SkillInfo } from '../utils/user';
import ImageWithFallback from './ImageWithFallback';
import { useState } from 'react';

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    if (expandedCategory === title) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(title);
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Fond animé amélioré */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }}></div>
          </div>
          <div className="absolute inset-0 opacity-40">
            <motion.div 
              className="absolute h-[600px] w-[600px] bg-indigo-500/20 rounded-full blur-[120px]"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute right-0 bottom-0 h-[500px] w-[500px] bg-blue-500/20 rounded-full blur-[120px]"
              animate={{
                x: [0, -50, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mes Compétences
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les technologies et outils que je maîtrise pour créer des solutions web innovantes et performantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-16">
          {SkillInfo.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-dark rounded-xl p-6 border border-indigo-500/30 group hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
            >
              <button 
                onClick={() => toggleCategory(category.title)}
                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-lg"
                aria-expanded={expandedCategory === category.title}
                aria-controls={`category-${category.title}`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-indigo-500/10 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-colors duration-300">
                      <ImageWithFallback
                        src={`/Icons/${category.title.replace(/ /g, '_')}.png`}
                        alt={`${category.title} icon`}
                        width={48}
                        height={48}
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.skills.length} compétences
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {expandedCategory === category.title && (
                  <motion.div
                    id={`category-${category.title}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-indigo-500/30">
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className="relative bg-indigo-500/5 rounded-lg p-3 hover:bg-indigo-500/10 transition-all duration-300 group/skill"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-indigo-500/10 border border-indigo-500/30 group-hover/skill:border-indigo-400/50 transition-colors duration-300">
                                  <ImageWithFallback
                                    src={`/Icons/${skill.replace(/ /g, '_')}.png`}
                                    alt={`${skill} icon`}
                                    width={32}
                                    height={32}
                                    className="object-contain p-1.5 group-hover/skill:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm font-medium text-gray-300 group-hover/skill:text-indigo-400 transition-colors duration-300">{skill}</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}