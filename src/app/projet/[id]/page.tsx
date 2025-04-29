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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'technologies' | 'gallery'>('overview');

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

  // Gestion du mode plein écran pour la galerie
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Navigation dans la galerie
  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
          <p className="text-gray-300 text-lg">Chargement du projet...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="bg-gray-800 rounded-xl shadow-xl p-8 max-w-lg mx-auto text-center">
              <div className="bg-red-500/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Projet non trouvé</h1>
              <p className="text-gray-300 mb-8">Le projet que vous recherchez n&apos;existe pas ou a été déplacé.</p>
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
                  className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center"
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
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Mode plein écran pour la galerie */}
      {isFullscreen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={toggleFullscreen}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              aria-label="Fermer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/10 transition-colors duration-300"
              aria-label="Image précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/10 transition-colors duration-300"
              aria-label="Image suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <ImageWithFallback 
                    src={`/${project.images[currentImageIndex]}`} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                    fill
                    sizes="100vw"
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Navigation entre projets */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Link 
              href="/projets" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 group"
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
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-indigo-900/30'
                }`}
                aria-label="Projet précédent"
                title="Projet précédent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm text-gray-400">
                Projet {currentProjectIndex + 1} sur {ProjectInfo.length}
              </span>
              
              <button 
                onClick={navigateToNext}
                disabled={currentProjectIndex >= ProjectInfo.length - 1}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  currentProjectIndex >= ProjectInfo.length - 1
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-indigo-900/30'
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
            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
          >
            {/* En-tête du projet */}
            <div className="p-8 border-b border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span 
                        key={`${tech}-${index}`}
                        className="px-3 py-1 text-sm font-medium bg-indigo-900/40 text-indigo-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-300 rounded-full">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  
                  {project.live && project.link && (
                    <a      
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center shadow-md hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Voir le projet
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Onglets de navigation */}
            <div className="border-b border-gray-700">
              <div className="flex overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'overview' 
                      ? 'text-indigo-400 border-b-2 border-indigo-400' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Aperçu
                </button>
                <button 
                  onClick={() => setActiveTab('technologies')}
                  className={`px-6 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'technologies' 
                      ? 'text-indigo-400 border-b-2 border-indigo-400' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Technologies
                </button>
                <button 
                  onClick={() => setActiveTab('gallery')}
                  className={`px-6 py-4 text-sm font-medium transition-colors duration-300 ${
                    activeTab === 'gallery' 
                      ? 'text-indigo-400 border-b-2 border-indigo-400' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Galerie
                </button>
              </div>
            </div>
            
            {/* Contenu des onglets */}
            <div className="p-8">
              {/* Onglet Aperçu */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              )}
              
              {/* Onglet Technologies */}
              {activeTab === 'technologies' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 hover:border-indigo-500/50 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <ImageWithFallback
                              src={`/icons/${tech.toLowerCase().replace(/ /g, '-')}.png`}
                              alt={tech}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white">{tech}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Onglet Galerie */}
              {activeTab === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={image}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          toggleFullscreen();
                        }}
                      >
                        <ImageWithFallback
                          src={`/${image}`}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Projets connexes */}
          {relatedProjects.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-white mb-8">Projets connexes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 group hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/projet/${encodeURIComponent(relatedProject.title.toLowerCase().replace(/ /g, '-'))}`}>
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={`/${relatedProject.images[0]}`}
                          alt={relatedProject.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{relatedProject.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {relatedProject.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span 
                              key={`${tech}-${techIndex}`}
                              className="px-2 py-1 text-xs font-medium bg-indigo-900/40 text-indigo-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {relatedProject.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
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