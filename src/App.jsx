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
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">Intéressé pour co-construire la Smart Forestry ?</h3>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    Nous échangeons avec des exploitants, transporteurs, coopératives et investisseurs pour prioriser les premiers modules et cas d'usage.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href="mailto:contact@aristee.eu"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 hover:bg-emerald-700 transition shadow-sm"
                  >
                    contact@aristee.eu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Aristée — Smart Forestry européenne</p>
          <p>
            Fabriqué avec sobriété numérique
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
