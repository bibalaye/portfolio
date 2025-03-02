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
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les technologies et outils que je maîtrise pour créer des solutions web innovantes et performantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SkillInfo.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            >
              <button 
                onClick={() => toggleCategory(category.title)}
                className="w-full"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-indigo-100 dark:bg-indigo-900/30">
                      <ImageWithFallback
                        src={`/icons/${category.title.toLowerCase().replace(/ /g, '-')}.png`}
                        alt={`${category.title} icon`}
                        width={48}
                        height={48}
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
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
                      className="h-6 w-6 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" 
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
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            className="relative bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white dark:bg-gray-800">
                                  <ImageWithFallback
                                    src={`/icons/${skill.toLowerCase().replace(/ /g, '-')}.png`}
                                    alt={`${skill} icon`}
                                    width={32}
                                    height={32}
                                    className="object-contain p-1.5"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                    className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 h-1.5 rounded-full"
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

        {/* Note pour les icônes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/50 text-sm text-yellow-800 dark:text-yellow-200"
        >
          <p>
            <span className="font-bold">Note:</span> Pour un affichage optimal, ajoutez des icônes PNG dans le dossier 
            <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 py-0.5 rounded text-xs font-mono mx-1">/public/icons/</code>
            pour chaque catégorie et compétence (exemple : <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 py-0.5 rounded text-xs font-mono">frontend.png</code>, <code className="bg-yellow-100 dark:bg-yellow-900/50 px-1 py-0.5 rounded text-xs font-mono">react.png</code>).
          </p>
        </motion.div>
      </div>
    </section>
  );
}