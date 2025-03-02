'use client';
import { motion } from 'framer-motion';
import { Info } from '../utils/user';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes passions et ce qui me motive dans le développement web.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image or illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="md:w-1/3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 group">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageWithFallback 
                  src="/profile.png" 
                  alt="Photo de profil" 
                  width={400} 
                  height={400} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackSrc="/cam.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {Info.stack[0]}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {Info.bio}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Formation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{Info.stack[0]}</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Rôle
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{Info.stack[1]}<br/>{Info.stack[2]}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Note explicative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/50 text-sm text-yellow-800 dark:text-yellow-200"
        >
          <p>
            <span className="font-bold">Note:</span> Toutes les images ne sont pas encore disponible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}