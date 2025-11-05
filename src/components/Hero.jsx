import { Rocket, Leaf, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 220, damping: 22 } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/40 dark:to-neutral-950 pointer-events-none"
      />

      {/* Animated soft blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"
        animate={{ y: [0, 10, -6, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-emerald-300/20 dark:bg-emerald-700/20 blur-3xl pointer-events-none"
        animate={{ y: [0, -8, 6, 0], scale: [1, 1.03, 0.99, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 dark:border-emerald-800/60 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-emerald-700 dark:text-emerald-300 mb-4">
              <Leaf className="h-4 w-4" />
              Smart Forestry européenne
            </motion.div>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Aristée — technologie au service d'une foresterie durable
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Une plateforme pour connecter la forêt, les machines et les humains : planification, traçabilité écologique, IA logistique et modernisation des engins pour une filière plus sobre, efficace et souveraine.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition"
              >
                <Rocket className="h-4 w-4" />
                Demander une démo
              </motion.a>
              <motion.a
                href="#problem"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition"
              >
                <LineChart className="h-4 w-4" />
                En savoir plus
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              animate={{ y: [0, -8, 0], boxShadow: [
                "inset 0 1px 12px rgba(0,0,0,0.04)",
                "inset 0 1px 18px rgba(0,0,0,0.06)",
                "inset 0 1px 12px rgba(0,0,0,0.04)",
              ] }}
              className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-400 dark:from-emerald-900 dark:to-emerald-700 shadow-inner"
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-4 -right-4 w-36 h-36 rounded-full bg-emerald-200/60 dark:bg-emerald-800/40 blur-2xl pointer-events-none"
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
