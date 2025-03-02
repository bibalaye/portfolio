'use client';

import { motion } from 'framer-motion';
import { ExperienceInfo } from '../utils/user';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
            Mon Expérience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours professionnel et les compétences que j'ai développées à travers diverses expériences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-indigo-200 dark:bg-indigo-900 rounded-full hidden md:block"></div>
          
          {/* Experiences */}
          <div className="space-y-12">
            {ExperienceInfo.map((experience, index) => (
              <motion.div 
                key={experience.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-indigo-500 dark:bg-indigo-400 shadow-lg z-10 hidden md:block"></div>
                
                {/* Content */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center items-start px-4 mb-4 md:mb-0">
                    <div className="text-center md:text-right md:mr-8 md:ml-0 ml-8 mr-0">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{experience.company}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{experience.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.date}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 px-4">
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
                    >
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 