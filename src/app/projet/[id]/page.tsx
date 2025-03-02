'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ProjectInfo } from '../../../utils/user';
import Navbar from '../../../components/Navbar';
import { ProjectType } from '../../../types';
import ImageWithFallback from '../../../components/ImageWithFallback';

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<ProjectType[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(-1);

  useEffect(() => {
    // Récupérer l'ID du projet depuis les paramètres de l'URL
    const projectId = params?.id;
    
    if (!projectId) {
      setLoading(false);
      return;
    }
    
    // Trouver le projet correspondant et son index
    const projectIndex = ProjectInfo.findIndex(p => 
      encodeURIComponent(p.title.toLowerCase().replace(/ /g, '-')) === projectId
    );
    
    if (projectIndex !== -1) {
      setProject(ProjectInfo[projectIndex]);
      setCurrentProjectIndex(projectIndex);
      
      // Trouver des projets connexes (mêmes technologies)
      const currentProject = ProjectInfo[projectIndex];
      const related = ProjectInfo
        .filter((p, index) => 
          index !== projectIndex && // Exclure le projet actuel
          p.technologies.some(tech => currentProject.technologies.includes(tech)) // Au moins une technologie en commun
        )
        .slice(0, 3); // Limiter à 3 projets connexes
      
      setRelatedProjects(related);
    }
    
    setLoading(false);
  }, [params]);

  // Navigation vers le projet précédent/suivant
  const navigateToPrevious = () => {
    if (currentProjectIndex > 0) {
      const prevProject = ProjectInfo[currentProjectIndex - 1];
      const prevProjectId = encodeURIComponent(prevProject.title.toLowerCase().replace(/ /g, '-'));
      router.push(`/projet/${prevProjectId}`);
    }
  };

  const navigateToNext = () => {
    if (currentProjectIndex < ProjectInfo.length - 1) {
      const nextProject = ProjectInfo[currentProjectIndex + 1];
      const nextProjectId = encodeURIComponent(nextProject.title.toLowerCase().replace(/ /g, '-'));
      router.push(`/projet/${nextProjectId}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Chargement du projet...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-lg mx-auto text-center">
              <div className="bg-red-100 dark:bg-red-900/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Projet non trouvé</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Le projet que vous recherchez n&apos;existe pas ou a été déplacé.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projets" 
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Voir tous les projets
                </Link>
                <Link 
                  href="/" 
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Retour à l&apos;accueil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Navigation entre projets */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/projets" 
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour aux projets
            </Link>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={navigateToPrevious}
                disabled={currentProjectIndex <= 0}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  currentProjectIndex <= 0 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                }`}
                aria-label="Projet précédent"
                title="Projet précédent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Projet {currentProjectIndex + 1} sur {ProjectInfo.length}
              </span>
              
              <button 
                onClick={navigateToNext}
                disabled={currentProjectIndex >= ProjectInfo.length - 1}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  currentProjectIndex >= ProjectInfo.length - 1
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                }`}
                aria-label="Projet suivant"
                title="Projet suivant"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            {/* Galerie d'images */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <ImageWithFallback 
                    src={`/${project.images[currentImageIndex]}`} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Indication du nombre d'images */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
              
              {/* Badge Live Project */}
              {project.live && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  LIVE PROJECT
                </div>
              )}
              
              {/* Flèches de navigation */}
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => prev === 0 ? project.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
                    aria-label="Image précédente"
                    title="Image précédente"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 group"
                    aria-label="Image suivante"
                    title="Image suivante"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="md:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h1>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={`${tech}-${techIndex}`} 
                        className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-8">
                    <p>{project.desc}</p>
                  </div>
                </div>
                
                <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Détails du projet</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">Type</h4>
                        <p className="text-gray-600 dark:text-gray-400">Projet {project.live ? "en ligne" : "développé"}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">Technologies</h4>
                        <p className="text-gray-600 dark:text-gray-400">{project.technologies.length} technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">Code source</h4>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                    
                    {project.live && project.link && (
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200">Site live</h4>
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                          >
                            Visiter le site
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                {project.live && project.link && (
                  <Link 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                  >
                    <span>Voir la démo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
                
                <Link 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <span>Code source</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </Link>
                
                <Link 
                  href="/projets"
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium rounded-lg transition-all duration-300 inline-flex items-center ml-auto"
                >
                  <span>Tous les projets</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Miniatures */}
          {project.images.length > 1 && (
            <div className="mt-8 max-w-full overflow-x-auto pb-4">
              <div className="flex gap-4">
                {project.images.map((image: string, index: number) => (
                  <motion.div 
                    key={`${image}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-24 w-40 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      index === currentImageIndex ? 'ring-4 ring-indigo-600 dark:ring-indigo-400 shadow-lg' : 'ring-2 ring-transparent hover:ring-indigo-300 dark:hover:ring-indigo-700'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <ImageWithFallback 
                      src={`/${image}`} 
                      alt={`${project.title} - image ${index + 1}`} 
                      fill
                      sizes="160px"
                      className={`object-cover ${index === currentImageIndex ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Projets connexes */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Projets similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group"
                  >
                    <Link 
                      href={`/projet/${encodeURIComponent(relatedProject.title.toLowerCase().replace(/ /g, '-'))}`}
                      className="block h-full"
                    >
                      <div className="relative h-40">
                        <ImageWithFallback
                          src={`/${relatedProject.image}`}
                          alt={relatedProject.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{relatedProject.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {relatedProject.technologies.slice(0, 3).map((tech: string, i: number) => (
                            <span 
                              key={`${tech}-${i}`} 
                              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {relatedProject.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                              +{relatedProject.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 