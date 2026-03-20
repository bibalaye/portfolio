import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const storySteps = [
  {
    year: "2020",
    title: "Le Déclic",
    description: "Tout a commencé avec une ligne de code. Fasciné par la magie de transformer des idées en réalité numérique, j'ai plongé dans l'univers du développement web. Chaque bug devenait une énigme à résoudre, chaque projet une nouvelle aventure.",
    image: "assets/projects/abibou.jpg",
    accent: "from-aqua to-mint"
  },
  {
    year: "2022",
    title: "MIAGE & Transformation",
    description: "L'entrée à l'UGB en Master MIAGE a été un tournant. J'ai découvert l'architecture logicielle, la gestion de projets et l'importance de créer des solutions qui répondent réellement aux besoins métier. Le code n'est plus juste du code — c'est de la valeur créée.",
    image: "assets/projects/profile.png",
    accent: "from-lavender to-royal"
  },
  {
    year: "2023",
    title: "Full Stack & DevOps",
    description: "De simple développeur, je suis devenu architecte de solutions complètes. Du frontend React aux microservices Spring Boot, du Docker au déploiement cloud — je construis des écosystèmes numériques robustes et scalables.",
    image: "assets/projects/abibou2.jpeg",
    accent: "from-fuchsia to-coral"
  },
  {
    year: "Aujourd'hui",
    title: "Impact & Innovation",
    description: "Aujourd'hui, je combine expertise technique et vision stratégique. Chaque projet est une opportunité de résoudre des problèmes réels, d'optimiser des processus et de créer des expériences utilisateur mémorables. Prêt pour le prochain défi.",
    image: "assets/projects/abibou3.jpeg",
    accent: "from-orange to-sand"
  }
];

const StoryCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 py-16 md:py-24`}
    >
      {/* Image Container */}
      <motion.div
        className="relative w-full md:w-1/2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-20 blur-3xl rounded-full`} />
        <div className="relative overflow-hidden border border-white/10 rounded-2xl aspect-[4/3]">
          <img
            src={step.image}
            alt={step.title}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <motion.div
            className={`absolute bottom-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${step.accent} text-sm font-bold`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {step.year}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <motion.h3
          className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {step.title}
        </motion.h3>
        <motion.p
          className="text-lg leading-relaxed text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {step.description}
        </motion.p>
        <motion.div
          className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r ${step.accent} ${isEven ? '' : 'md:ml-auto'}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
};

const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative c-space section-spacing" id="story">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.span
          className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-white/5 text-neutral-400 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mon Parcours
        </motion.span>
        <motion.h2
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          De la Curiosité à l'{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-lavender">
            Excellence
          </span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Chaque projet, chaque défi, chaque ligne de code m'a façonné.
          Voici l'histoire de ma transformation en développeur Full Stack & DevOps.
        </motion.p>
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-[300px] bottom-0 w-px bg-white/10 hidden md:block -translate-x-1/2">
        <motion.div
          className="w-full bg-gradient-to-b from-aqua via-lavender to-fuchsia"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Story Steps */}
      <div className="relative max-w-6xl mx-auto">
        {storySteps.map((step, index) => (
          <StoryCard key={step.year} step={step} index={index} />
        ))}
      </div>

      {/* Closing CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-6 text-2xl text-neutral-300">
          "Le code est mon crayon, le web est ma toile"
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-lavender to-royal hover:shadow-lg hover:shadow-lavender/25 hover:scale-105"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Écrivons la prochaine page ensemble
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Story;
