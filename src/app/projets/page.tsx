'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ProjectInfo } from '../../utils/user';
import Navbar from '../../components/Navbar';
import ImageWithFallback from '../../components/ImageWithFallback';

export default function AllProjects() {
  const [filteredProjects, setFilteredProjects] = useState(ProjectInfo);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [allTechnologies, setAllTechnologies] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const projectsPerPage = 6;
  
  const projectsRef = useRef<HTMLDivElement>(null);

  // Extraire toutes les technologies uniques
  useEffect(() => {
    const technologies = new Set<string>();
    ProjectInfo.forEach(project => {
      project.technologies.forEach(tech => {
        technologies.add(tech);
      });
    });
    setAllTechnologies(Array.from(technologies).sort());
  }, []);

  // Filtrer les projets en fonction de la technologie sélectionnée et de la recherche
  useEffect(() => {
    let filtered = ProjectInfo;

    if (selectedTechnology) {
      filtered = filtered.filter(project => 
        project.technologies.includes(selectedTechnology)
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.desc.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
    setCurrentPage(1); // Réinitialiser à la première page lors d'un changement de filtre
  }, [selectedTechnology, searchQuery]);

  // Calculer l'index de début et de fin pour la pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Changer de page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent"
            >
              Portfolio de Projets
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-32 h-2 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mx-auto mb-6 rounded-full"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Explorez mes réalisations et découvrez mes compétences techniques à travers ces projets variés. 
              Utilisez les filtres pour trouver les technologies qui vous intéressent.
            </motion.p>
          </div>

          {/* Barre de recherche et filtres */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-1/3 relative">
                <input 
                  type="text" 
                  placeholder="Rechercher un projet..." 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent shadow-sm text-gray-700 dark:text-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Affichage :</span>
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button 
                    className={`p-2 rounded-md transition-colors duration-300 ${isGridView ? 'bg-white dark:bg-gray-600 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setIsGridView(true)}
                    aria-label="Vue en grille"
                    title="Vue en grille"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button 
                    className={`p-2 rounded-md transition-colors duration-300 ${!isGridView ? 'bg-white dark:bg-gray-600 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setIsGridView(false)}
                    aria-label="Vue en liste"
                    title="Vue en liste"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-3">Filtrer par technologie :</div>
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    selectedTechnology === null
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setSelectedTechnology(null)}
                >
                  Tous
                </button>
                
                {allTechnologies.map(tech => (
                  <button 
                    key={tech}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      selectedTechnology === tech
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedTechnology(tech)}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Résumé des filtres */}
          <div className="mb-6 flex justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400">
              {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
              {selectedTechnology && <span> pour <span className="font-medium text-indigo-600 dark:text-indigo-400">{selectedTechnology}</span></span>}
              {searchQuery && <span> contenant <span className="font-medium text-indigo-600 dark:text-indigo-400">&apos;{searchQuery}&apos;</span></span>}
            </div>
            
            {(selectedTechnology || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedTechnology(null);
                  setSearchQuery('');
                }}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1"
              >
                <span>Réinitialiser les filtres</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Liste des projets */}
          <div ref={projectsRef}>
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-md mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Aucun projet trouvé</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Essayez de modifier vos critères de recherche ou de sélectionner une autre technologie.</p>
                  <button 
                    onClick={() => {
                      setSelectedTechnology(null);
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
                  >
                    <span>Voir tous les projets</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="mb-12">
                <AnimatePresence mode="wait">
                  {isGridView ? (
                    <motion.div 
                      key="grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {currentProjects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -10, transition: { duration: 0.3 } }}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-full flex flex-col group"
                        >
                          <div className="relative h-52 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <ImageWithFallback
                              src={`/${project.image}`}
                              alt={project.title}
                              width={500}
                              height={300}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {project.live && (
                              <div className="absolute top-3 right-3 z-20 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded shadow-md">
                                LIVE
                              </div>
                            )}
                          </div>
                          
                          <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{project.desc}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span 
                                  key={`${tech}-${techIndex}`} 
                                  className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                            
                            <Link 
                              href={`/projet/${encodeURIComponent(project.title.toLowerCase().replace(/ /g, '-'))}`}
                              className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 text-center shadow-md hover:shadow-xl"
                            >
                              Voir les détails
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {currentProjects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 relative">
                              <ImageWithFallback
                                src={`/${project.image}`}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {project.live && (
                                <div className="absolute top-3 right-3 z-20 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded shadow-md">
                                  LIVE
                                </div>
                              )}
                            </div>
                            
                            <div className="p-6 md:w-3/4">
                              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.desc}</p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                  <span 
                                    key={`${tech}-${techIndex}`} 
                                    className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex gap-3 mt-2">
                                <Link 
                                  href={`/projet/${encodeURIComponent(project.title.toLowerCase().replace(/ /g, '-'))}`}
                                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 text-center shadow-md hover:shadow-xl inline-flex items-center"
                                >
                                  <span>Voir les détails</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </Link>
                                
                                <Link 
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 font-medium rounded-lg transition-all duration-300 inline-flex items-center"
                                >
                                  <span>GitHub</span>
                                  <svg className="h-4 w-4 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          currentPage === 1 
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                        }`}
                        aria-label="Page précédente"
                        title="Page précédente"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`w-10 h-10 rounded-lg transition-colors duration-300 ${
                            currentPage === number
                              ? 'bg-indigo-600 text-white font-medium'
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                      
                      <button 
                        onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          currentPage === totalPages 
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                        }`}
                        aria-label="Page suivante"
                        title="Page suivante"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Retour à l'accueil */}
          <div className="text-center mt-12">
            <Link href="/" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 