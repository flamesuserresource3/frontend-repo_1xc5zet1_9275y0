import { Rocket, Leaf, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/40 dark:to-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 dark:border-emerald-800/60 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-emerald-700 dark:text-emerald-300 mb-4">
              <Leaf className="h-4 w-4" />
              Smart Forestry européenne
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Aristée — technologie au service d'une foresterie durable
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Une plateforme pour connecter la forêt, les machines et les humains : planification, traçabilité écologique, IA logistique et modernisation des engins pour une filière plus sobre, efficace et souveraine.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition">
                <Rocket className="h-4 w-4" />
                Demander une démo
              </a>
              <a href="#problem" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition">
                <LineChart className="h-4 w-4" />
                En savoir plus
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-400 dark:from-emerald-900 dark:to-emerald-700 shadow-inner" />
            <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-full bg-emerald-200/60 dark:bg-emerald-800/40 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
