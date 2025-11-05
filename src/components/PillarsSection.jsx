import { Map, Cpu, Truck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Map,
    title: "Logiciels de gestion forestière",
    desc:
      "Cartographie, planification, traçabilité écologique, suivi des coûts et génération automatique de devis et rapports.",
    badge: "Plateforme SaaS",
  },
  {
    icon: Cpu,
    title: "Kits d'autonomisation",
    desc:
      "Modules pour moderniser les engins existants, valider les briques technologiques et connecter les données terrain.",
    badge: "Retrofit intelligent",
  },
  {
    icon: Truck,
    title: "Véhicules autonomes",
    desc:
      "Machines forestières plus légères, modulaires et abordables, conçues en Europe pour réduire coûts et impact au sol.",
    badge: "Robots responsables",
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Trois piliers pour une filière connectée
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Un écosystème intégré mêlant logiciel, IA et robotique pour accompagner pas à pas la transformation du secteur.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc, badge }, i) => (
            <motion.div
              key={title}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 * i, type: "spring", stiffness: 180, damping: 18 }}
              whileHover={{ y: -6, rotate: -0.25, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-sm/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 border border-emerald-200/60 dark:border-emerald-800/60">
                  <Leaf className="h-3.5 w-3.5" /> {badge}
                </span>
              </div>
              <motion.div
                initial={{ rotate: -8, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="mt-4 h-12 w-12 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 grid place-items-center"
              >
                <Icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mt-4 font-semibold text-lg text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div id="solution" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="mt-16 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
          <h3 className="font-semibold text-neutral-900 dark:text-white">Approche par étapes</h3>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            1) Digitaliser et connecter la gestion forestière. 2) Optimiser la logistique et les flux de bois grâce à l'IA. 3) Concevoir des machines plus intelligentes et responsables.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
