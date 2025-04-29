'use client';

import { motion } from 'framer-motion';
import { ExperienceInfo } from '../utils/user';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)' }}></div>
          </div>
          <div className="absolute inset-0 opacity-30">
            <motion.div 
              className="absolute h-[400px] w-[400px] bg-indigo-500/20 rounded-full blur-[100px]"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-blue-500/20 rounded-full blur-[100px]"
              animate={{
                x: [0, -50, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 15,
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mon Expérience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours professionnel et mes expériences dans le développement et la gestion de projets.
          </p>
        </motion.div>

        <div className="relative md:mx-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-500 rounded-full hidden md:block"></div>
          
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
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg z-10 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-25"></div>
                </motion.div>
                
                {/* Content */}
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center items-start px-4 mb-4 md:mb-0">
                    <motion.div 
                      className="text-center md:text-right md:mr-8 md:ml-0 ml-8 mr-0"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-1">{experience.company}</h3>
                      <p className="text-indigo-400 font-medium mb-2">{experience.role}</p>
                      <p className="text-gray-400 text-sm">{experience.date}</p>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 px-4">
                    <motion.div 
                      className="glass-dark rounded-xl p-6 border border-indigo-500/30 group hover:border-indigo-400/50 transition-all duration-300"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {experience.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.skills.map((skill) => (
                          <motion.span 
                            key={skill}
                            className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
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