import { useState } from "react";
import { motion } from "motion/react";

const navItems = [
  { href: "#hero", label: "Accueil" },
  { href: "#story", label: "Parcours" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#testimonials", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

function Navigation() {
  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li key={item.href} className="nav-li">
          <a className="nav-link" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/60 border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-lavender">
              Abiboulaye
            </span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <motion.img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
              whileTap={{ scale: 0.9 }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="overflow-hidden sm:hidden bg-primary/95 backdrop-blur-lg border-b border-white/5"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="py-4 px-5">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.05 }}
              >
                <a
                  href={item.href}
                  className="block py-2 text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
