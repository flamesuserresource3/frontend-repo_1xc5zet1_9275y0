import { AlertTriangle, FileText, Factory, Euro } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: AlertTriangle,
    title: "Triple crise structurelle",
    desc:
      "Le secteur fait face à des défis économiques, technologiques et écologiques, aggravés par un manque de digitalisation.",
  },
  {
    icon: FileText,
    title: "Outils et données dispersés",
    desc:
      "Beaucoup d'acteurs opèrent encore avec du papier et des fichiers isolés : faible visibilité, pertes de temps et coordination limitée.",
  },
  {
    icon: Euro,
    title: "Tissu de TPE fragiles",
    desc:
      "Près de 70 % d'acteurs sont des TPE, excellents sur le terrain mais peu outillés pour piloter marges, coûts et clients.",
  },
  {
    icon: Factory,
    title: "Machines coûteuses et inadaptées",
    desc:
      "Engins lourds, souvent importés, dépassant 500 k€ et peu adaptés aux petites structures et aux sols fragiles.",
  },
];

const cardVariants = {
  hidden: { y: 18, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.08 * i, type: "spring", stiffness: 180, damping: 20 },
  }),
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Quel problème voulons-nous résoudre ?
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Une filière stratégique mais sous-dotée : faible digitalisation, dépendance économique et machines inadaptées freinent l'attractivité et la durabilité.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white/60 dark:bg-neutral-900/60"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="h-10 w-10 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 grid place-items-center"
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
