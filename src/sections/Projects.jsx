import { useState, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 100 });
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featuredProjects = myProjects.filter(p => p.featured);
  const otherProjects = myProjects.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      {/* Section Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/5 text-neutral-400 border border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
        >
          Portfolio
        </motion.span>

        <motion.h2
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Projets qui font{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint">
            la différence
          </span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mt-4 text-lg text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Découvrez une sélection de projets qui démontrent mon expertise technique
          et ma capacité à résoudre des problématiques réelles avec impact mesurable.
        </motion.p>
      </motion.div>

      {/* Featured Projects Section */}
      <motion.div
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3
          variants={itemVariants}
          className="flex items-center gap-2 mb-8 text-sm font-medium tracking-widest uppercase text-neutral-500"
        >
          <span className="w-8 h-px bg-neutral-700"></span>
          Projets Phares
          <span className="w-8 h-px bg-neutral-700"></span>
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-storm/50 to-indigo/50 border border-white/10 hover:border-white/20 transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo via-transparent to-transparent" />

                {/* Impact Badge */}
                {project.impact && (
                  <div className="absolute px-3 py-1 text-xs font-medium rounded-full bottom-3 left-3 bg-mint/20 text-mint border border-mint/30">
                    {project.impact.split(' ').slice(0, 3).join(' ')}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold group-hover:text-aqua transition-colors">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm text-neutral-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag.id}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-neutral-300 border border-white/10"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-aqua hover:text-mint transition-colors group/link"
                  whileHover={{ x: 4 }}
                >
                  Voir le projet
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Projects List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
      >
        <motion.h3
          className="flex items-center gap-2 mb-8 text-sm font-medium tracking-widest uppercase text-neutral-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <span className="w-8 h-px bg-neutral-700"></span>
          Autres Réalisations
          <span className="w-8 h-px bg-neutral-700"></span>
        </motion.h3>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

        {otherProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </motion.div>

      {/* Floating Preview */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-48 rounded-lg shadow-2xl pointer-events-none w-80 border border-white/20"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}
    </section>
  );
};

export default Projects;
