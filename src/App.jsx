import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PillarsSection from "./components/PillarsSection";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PillarsSection />

        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white/70 dark:bg-neutral-950/70 backdrop-blur"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">Intéressé pour co-construire la Smart Forestry ?</h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    Nous échangeons avec des exploitants, transporteurs, coopératives et investisseurs pour prioriser les premiers modules et cas d'usage.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <motion.a
                    href="mailto:contact@aristee.eu"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 hover:bg-emerald-700 transition shadow-sm"
                  >
                    contact@aristee.eu
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            © {new Date().getFullYear()} Aristée — Smart Forestry européenne
          </motion.p>
          <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            Fabriqué avec sobriété numérique
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
