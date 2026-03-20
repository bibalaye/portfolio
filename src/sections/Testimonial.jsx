import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <motion.figure
      className={twMerge(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 border-white/10 bg-gradient-to-br from-storm/80 to-indigo/80 hover:border-lavender/50 transition-all duration-300 group"
      )}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-3 right-3 text-lavender/20 group-hover:text-lavender/40 transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="flex flex-row items-center gap-3">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            className="object-cover rounded-full bg-white/10 w-12 h-12 ring-2 ring-white/10 group-hover:ring-lavender/50 transition-all"
            alt={name}
            src={img}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-mint border-2 border-indigo" />
        </motion.div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white group-hover:text-aqua transition-colors">
            {name}
          </figcaption>
          <p className="text-xs text-neutral-400">{username}</p>
        </div>
      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-neutral-300 group-hover:text-white transition-colors">
        "{body}"
      </blockquote>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-aqua via-lavender to-fuchsia opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.figure>
  );
};

export default function Testimonial() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="items-start py-20 mt-25 md:mt-35 c-space" id="testimonials">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
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
          Témoignages
        </motion.span>

        <motion.h2
          className="text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Ce qu'on dit de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint">
            mon travail
          </span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          Des clients satisfaits et des projets réussis. Voici ce que disent ceux
          avec qui j'ai collaboré.
        </motion.p>
      </motion.div>

      {/* Marquee Container */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary" />
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary" />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
      >
        {[
          { value: "20+", label: "Projets Livrés" },
          { value: "15+", label: "Clients Satisfaits" },
          { value: "5+", label: "Années d'Expérience" },
          { value: "100%", label: "Engagement" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <motion.p
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint"
              whileHover={{ scale: 1.1 }}
            >
              {stat.value}
            </motion.p>
            <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
