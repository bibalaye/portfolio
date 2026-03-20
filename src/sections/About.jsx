import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section ref={sectionRef} className="c-space section-spacing" id="about">
      {/* Section Header */}
      <motion.div
        className="mb-12"
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
          À Propos
        </motion.span>
        <motion.h2
          className="text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Expertise &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-royal">
            Personnalité
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Grid 1 - Intro Card */}
        <motion.div variants={itemVariants} className="flex items-end grid-default-color grid-1 group">
          <motion.div
            className="absolute inset-0 transition-transform duration-700"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="assets/projects/profile.png"
              alt="Code"
              className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo via-indigo/50 to-transparent" />
          <div className="z-10">
            <p className="headtext">Salut, je suis Abiboulaye Sy</p>
            <p className="subtext">
              Ingénieur Full Stack & DevOps diplômé du Master MIAGE à l'UGB, je conçois des solutions
              numériques robustes alliant performance technique et efficacité opérationnelle.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </motion.div>

        {/* Grid 2 - Skills Cards */}
        <motion.div variants={itemVariants} className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 uppercase">
              Le code est un art
            </p>
            {[
              { text: "MIAGE", style: { rotate: "75deg", top: "30%", left: "20%" } },
              { text: "CLEAN CODE", style: { rotate: "-30deg", top: "60%", left: "45%" } },
              { text: "Full Stack", style: { rotate: "90deg", bottom: "30%", left: "70%" } },
              { text: "Agile", style: { rotate: "-45deg", top: "55%", left: "0%" } },
              { text: "DevOps", style: { rotate: "20deg", top: "10%", left: "38%" } },
              { image: "assets/logos/react.svg", style: { rotate: "30deg", top: "70%", left: "70%" } },
              { image: "assets/logos/javascript.svg", style: { rotate: "-45deg", top: "70%", left: "25%" } },
              { image: "assets/logos/python.svg", style: { rotate: "-45deg", top: "5%", left: "10%" } },
              { image: "assets/logos/django.svg", style: { rotate: "15deg", top: "10%", left: "10%" } },
              { image: "assets/logos/docker.svg", style: { rotate: "-15deg", bottom: "10%", left: "40%" } },
              { image: "assets/logos/git.svg", style: { rotate: "45deg", top: "40%", right: "10%" } },
              { image: "assets/logos/postman.svg", style: { rotate: "-20deg", top: "20%", right: "20%" } }
            ].map((item, index) => (
              <Card
                key={index}
                style={item.style}
                text={item.text}
                image={item.image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid 3 - Location */}
        <motion.div variants={itemVariants} className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Localisation</p>
            <p className="subtext">
              Je suis basé à Saint-Louis, Sénégal, et disponible pour des projets à distance partout dans le monde.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 4 - Contact CTA */}
        <motion.div variants={itemVariants} className="grid-special-color grid-4 group">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Vous souhaitez démarrer un projet ensemble ?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CopyEmailButton />
            </motion.div>
          </div>
        </motion.div>

        {/* Grid 5 - Tech Stack */}
        <motion.div variants={itemVariants} className="grid-default-color grid-5 group">
          <div className="z-10 w-[60%]">
            <p className="headtext">Stack Technique</p>
            <p className="subtext">
              Je maîtrise une large gamme de technologies (React, Laravel, Django, Python, Docker)
              pour bâtir des applications robustes et évolutives.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </motion.div>

        {/* Grid 6 - Personal Photo Card (New) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-storm to-indigo p-6 group h-[15rem] md:h-full"
        >
          <motion.div
            className="absolute inset-0 transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="assets/projects/cam.jpg"
              alt="Abiboulaye au travail"
              className="object-cover w-full h-full opacity-50 group-hover:opacity-70 transition-opacity"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo via-indigo/40 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end h-full">
            <p className="headtext">Passion & Engagement</p>
            <p className="subtext">
              Chaque projet est une nouvelle opportunité d'apprendre et d'exceller.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
