import { Leaf } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="h-0.5 origin-left bg-emerald-500/80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="h-9 w-9 rounded-md bg-emerald-500 text-white grid place-items-center shadow-sm"
            >
              <Leaf className="h-5 w-5" />
            </motion.div>
            <motion.span
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-semibold tracking-tight text-neutral-900 dark:text-white"
            >
              Aristée
            </motion.span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            {[
              { href: "#problem", label: "Problème" },
              { href: "#solution", label: "Approche" },
              { href: "#pillars", label: "Piliers" },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * (i + 1) }}
                whileHover={{ y: -2 }}
                className="relative hover:text-neutral-900 dark:hover:text-white"
              >
                {item.label}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-px w-full bg-current opacity-0"
                  whileHover={{ opacity: 0.35 }}
                />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-1.5 transition will-change-transform"
            >
              Nous contacter
            </motion.a>
          </nav>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.98 }}
            className="md:hidden rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200"
          >
            Menu
          </motion.button>
        </div>
      </div>
    </header>
  );
}
