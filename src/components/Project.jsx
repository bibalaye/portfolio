import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  gallery,
  tags,
  impact,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-10 space-y-6 sm:flex sm:space-y-0 group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1">
          <motion.p
            className="text-2xl font-medium transition-colors duration-300 group-hover:text-aqua"
          >
            {title}
          </motion.p>
          <p className="mt-2 text-sm text-neutral-400 max-w-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <motion.span
                key={tag.id}
                className="text-sm text-sand"
                whileHover={{ scale: 1.05, color: "#57db96" }}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>

          {impact && (
            <motion.div
              className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              {impact}
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-neutral-300 hover:bg-white/5 hover:border-white/40 transition-all duration-300 group/btn"
          whileHover={{ scale: 1.02, x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          Voir le projet
          <motion.img
            src="assets/arrow-right.svg"
            className="w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
            whileHover={{ x: 4 }}
          />
        </motion.button>
      </motion.div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          gallery={gallery}
          tags={tags}
          href={href}
          impact={impact}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
