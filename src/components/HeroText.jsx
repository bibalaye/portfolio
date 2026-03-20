import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Sécurisées", "Modernes", "Scalables", "Robustes"];
  const roles = ["Full Stack", "DevOps", "Cloud", "Data"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="z-10 w-full mt-20 text-center lg:mt-32 lg:text-left lg:w-2/3">
      {/* Desktop View */}
      <motion.div
        className="flex-col hidden lg:flex c-space"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full w-fit bg-white/5 border border-white/10"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-mint"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-mint"></span>
          </span>
          <span className="text-sm text-neutral-300">Disponible pour nouvelles opportunités</span>
        </motion.div>

        {/* Main Heading */}
        <motion.p
          variants={itemVariants}
          className="text-lg font-normal text-neutral-400 mb-2"
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            Abiboulaye Sy
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-4"
        >
          <p className="text-xl font-light text-neutral-400 md:text-2xl">
            Ingénieur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint font-medium">
              Full Stack & DevOps
            </span>
          </p>
        </motion.div>

        {/* Flip Words Section */}
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <p className="text-2xl font-light text-neutral-300 md:text-3xl lg:text-4xl">
            Je conçois des solutions{" "}
            <span className="font-medium">
              <FlipWords
                words={words}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender to-royal"
              />
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl mt-6 text-base leading-relaxed text-neutral-400"
        >
          Diplômé Master MIAGE, je combine expertise technique et vision stratégique
          pour transformer vos défis digitaux en solutions performantes. De l'architecture
          cloud au déploiement continu, je construis l'avenir numérique.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mt-8"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 text-base font-medium text-white rounded-full overflow-hidden bg-gradient-to-r from-lavender to-royal hover:shadow-lg hover:shadow-lavender/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Voir mes projets
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 text-base font-medium transition-all duration-300 border rounded-full text-neutral-300 border-white/20 hover:bg-white/5 hover:border-white/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Me contacter
          </motion.a>

          <motion.a
            href="assets/projects/ABIBOULAYE_SY_CV.pdf"
            download="ABIBOULAYE_SY_CV.pdf"
            className="group relative px-8 py-4 text-base font-medium text-white rounded-full overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Télécharger CV
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 mt-12"
        >
          <div className="flex -space-x-3">
            {[
              "assets/projects/crous1.png",
              "assets/projects/django.png",
              "assets/projects/drone.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                className="w-10 h-10 overflow-hidden border-2 rounded-full border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + i * 0.1 }}
              >
                <img src={img} alt="" className="object-cover w-full h-full" />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-neutral-500">
            <span className="font-semibold text-neutral-300">20+</span> projets livrés avec succès
          </p>
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="flex flex-col space-y-4 lg:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center gap-2 px-3 py-1 mx-auto mb-4 rounded-full w-fit bg-white/5"
        >
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-mint"></span>
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-mint"></span>
          </span>
          <span className="text-xs text-neutral-400">Disponible</span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-neutral-400">
          Bonjour, je suis
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold"
        >
          Abiboulaye Sy
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-2">
          <p className="text-lg text-neutral-300">
            Ingénieur{" "}
            <span className="text-aqua font-medium">Full Stack & DevOps</span>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-4">
          <div className="text-2xl font-light">
            Je crée des solutions
            <FlipWords
              words={words}
              className="font-bold text-lavender"
            />
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-md mx-auto mt-4 text-sm text-neutral-400"
        >
          Diplômé Master MIAGE. Je transforme vos défis digitaux en solutions performantes.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3 mt-6 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-white rounded-full bg-gradient-to-r from-lavender to-royal"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium border rounded-full text-neutral-300 border-white/20"
          >
            Me contacter
          </a>
          <a
            href="assets/projects/ABIBOULAYE_SY_CV.pdf"
            download="ABIBOULAYE_SY_CV.pdf"
            className="px-6 py-3 text-sm font-medium border rounded-full text-white bg-white/5 border-white/20"
          >
            CV
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroText;
