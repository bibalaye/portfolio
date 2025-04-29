'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectInfo } from '../utils/user';
import ImageWithFallback from './ImageWithFallback';

export default function Projects() {
  // Limiter à 4 projets sur la page d'accueil
  const featuredProjects = ProjectInfo.slice(0, 4);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Fond animé amélioré */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }}></div>
          </div>
          <div className="absolute inset-0 opacity-40">
            <motion.div 
              className="absolute h-[500px] w-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
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
              className="absolute right-0 bottom-0 h-[400px] w-[400px] bg-blue-500/20 rounded-full blur-[120px]"
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
            Mes Projets
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets les plus significatifs. Chaque projet est une opportunité d&apos;apprentissage et d&apos;innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-dark rounded-xl overflow-hidden border border-indigo-500/30 group hover:border-indigo-400/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge pour les projets en ligne */}
                {project.live && (
                  <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                    En ligne
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={`${tech}-${techIndex}`} 
                      className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-indigo-500/30">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 mr-4"
                  >
                    <Link 
                      href={`/projet/${encodeURIComponent(project.title.toLowerCase().replace(/ /g, '-'))}`} 
                      className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center group/link"
                    >
                      <span>Voir détails</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 bg-transparent border-2 border-indigo-500/50 hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-xl transition-all duration-300 flex items-center justify-center group/github"
                    >
                      <span>Code source</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover/github:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton pour voir tous les projets */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/projets" 
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-indigo-500/50 hover:border-indigo-400 text-white hover:text-indigo-400 font-medium rounded-xl transition-all duration-300 group"
          >
            <span>Voir tous mes projets</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}