import { motion } from "framer-motion";
import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative c-space pt-20 pb-8">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/50 to-transparent" />

      {/* Main Footer Content */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo/Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua via-lavender to-fuchsia">
              Abiboulaye Sy
            </span>
          </h3>
          <p className="mt-2 text-sm text-neutral-400">
            Ingénieur Full Stack & DevOps
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Accueil", href: "#hero" },
            { label: "Parcours", href: "#story" },
            { label: "Projets", href: "#projects" },
            { label: "Contact", href: "#contact" }
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-aqua to-lavender group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {mySocials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-lavender/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <img src={social.icon} className="w-5 h-5" alt={social.name} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-neutral-500 text-sm mb-4">
            Intéressé par une collaboration ?
          </p>
          <motion.a
            href="mailto:sybibalaye@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-lavender/20 to-royal/20 border border-lavender/30 text-white hover:bg-lavender/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            sybibalaye@gmail.com
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

        {/* Copyright */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p>© {currentYear} Abiboulaye Sy. Tous droits réservés.</p>
          <span className="hidden sm:inline">|</span>
          <p>Conçu & Développé avec passion <span className="text-fuchsia">♥</span></p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
