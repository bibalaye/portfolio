import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Abiboulaye",
          from_email: formData.email,
          to_email: "sybibalaye@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Votre message a été envoyé avec succès !");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Une erreur est survenue. Veuillez réessayer.");
    }
  };

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
    <section ref={sectionRef} className="relative flex items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div
        className="flex flex-col items-center justify-center max-w-md p-8 mx-auto border border-white/10 rounded-2xl bg-primary/80 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 mb-2 text-sm font-medium rounded-full bg-white/5 text-neutral-400 border border-white/10"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold md:text-4xl"
          >
            Parlons de votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-mint">
              projet
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-normal text-neutral-400"
          >
            Que vous souhaitiez créer un nouveau site web, améliorer votre plateforme
            existante ou donner vie à un projet unique, je suis là pour vous aider.
          </motion.p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <motion.div className="mb-5" variants={itemVariants}>
            <label htmlFor="name" className="feild-label">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Votre nom"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="mb-5" variants={itemVariants}>
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="votre@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div className="mb-5" variants={itemVariants}>
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Décrivez votre projet, vos objectifs, vos deadlines..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            className="relative w-full px-1 py-4 text-lg text-center text-white rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal overflow-hidden group"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(122, 87, 219, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </span>
          </motion.button>
        </form>

        {/* Alternative Contact Methods */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-neutral-400">Ou contactez-moi via : </p>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://wa.me/221778649872"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </motion.a>

            <motion.a
              href="mailto:sybibalaye@gmail.com"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/5 text-neutral-300 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
