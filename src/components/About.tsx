'use client';
import { motion } from 'framer-motion';
import { Info } from '../utils/user';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            À propos de moi
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes passions et ce qui me motive dans le développement web.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center md:mx-16">
          {/* Image avec effets */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Cercles décoratifs */}
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -inset-8 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-indigo-500/30 glass-dark group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageWithFallback 
                    src="/abibou.jpg" 
                    alt="Photo de profil" 
                    width={400} 
                    height={400} 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackSrc="/cam.jpg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center md:text-left text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {Info.stack[0]}
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-8 text-lg leading-relaxed"
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
                className="glass-dark p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-xl text-indigo-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Formation
                </h4>
                <p className="text-gray-300 font-medium">{Info.stack[0]}</p>
              </motion.div>
              
              <motion.div 
                className="glass-dark p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-xl text-indigo-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Rôle
                </h4>
                <p className="text-gray-300 font-medium">{Info.stack[1]}<br/>{Info.stack[2]}</p>
              </motion.div>

              {/* Langues */}
              <motion.div 
                className="glass-dark p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm md:col-span-2"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-xl text-indigo-400 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Langues
                </h4>
                <div className="flex flex-wrap gap-3">
                  {Info.languages.map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}