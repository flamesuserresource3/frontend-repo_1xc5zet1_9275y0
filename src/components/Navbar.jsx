import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-emerald-500 text-white grid place-items-center shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Aristée</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#problem" className="hover:text-neutral-900 dark:hover:text-white">Problème</a>
            <a href="#solution" className="hover:text-neutral-900 dark:hover:text-white">Approche</a>
            <a href="#pillars" className="hover:text-neutral-900 dark:hover:text-white">Piliers</a>
            <a href="#contact" className="rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-1.5 hover:opacity-90 transition">
              Nous contacter
            </a>
          </nav>
          <button className="md:hidden rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
