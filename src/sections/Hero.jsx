import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-center md:justify-start c-space" id="hero">
      {/* Hero Text Content */}
      <HeroText />

      {/* Parallax Background */}
      <ParallaxBackground />

      {/* 3D Astronaut Scene */}
      <figure
        className="absolute inset-0 z-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Astronaut
                scale={isMobile ? 0.18 : 0.25}
                position={isMobile ? [1, -0.5, 0] : [2, -0.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Personal Photo with Parallax Effect */}
      <motion.div
        className="absolute z-10 hidden lg:block"
        style={{
          right: "10%",
          top: "20%",
          y: imageY,
          opacity: imageOpacity,
          scale: imageScale
        }}
        initial={{ opacity: 0, x: 100, rotateY: 15 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-aqua/30 via-lavender/30 to-fuchsia/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Photo Container */}
          <div className="relative overflow-hidden border-2 border-white/20 rounded-2xl w-72 h-80">
            <motion.img
              src="assets/projects/abibou.jpg"
              alt="Abiboulaye Sy"
              className="object-cover w-full h-full transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

            {/* Info Badge */}
            <motion.div
              className="absolute px-4 py-2 rounded-full bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              <p className="text-sm font-medium text-white">Disponible pour projets</p>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <motion.div
            className="absolute flex flex-col gap-2 -right-8 top-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            <div className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint">5+</p>
              <p className="text-xs text-neutral-400">Années d'expérience</p>
            </div>
            <motion.div
              className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender to-royal">20+</p>
              <p className="text-xs text-neutral-400">Projets réalisés</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-10 left-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase text-neutral-500">Découvrir</span>
        <motion.div
          className="w-6 h-10 border-2 rounded-full border-neutral-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 mx-auto mt-2 rounded-full bg-neutral-400"
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
