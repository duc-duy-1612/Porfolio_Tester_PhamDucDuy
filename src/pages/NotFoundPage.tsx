import { ArrowLeft, FileWarning } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function NotFoundPage() {
  useSEO({
    title: "404 - Out of Scope | Phạm Đức Duy",
    description: "The portfolio page you are looking for could not be found.",
  });

  return (
    <main id="main-content" className="not-found-page flex items-center justify-center min-h-[70vh]">
      <section className="section w-full text-center">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="section-container not-found-card flex flex-col items-center justify-center py-16 px-6 max-w-2xl mx-auto border border-gray-800 rounded-2xl bg-gray-900/30 overflow-hidden relative"
        >
          {/* Animated Icon to represent a broken process / missing requirement */}
          <motion.div variants={item} className="mb-6 relative">
             <div className="relative flex items-center justify-center w-20 h-20 bg-gray-800/40 rounded-2xl border border-gray-700 shadow-lg">
                <FileWarning size={32} className="text-blue-400" />
                <motion.div 
                   className="absolute -bottom-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-gray-900"
                   initial={{ scale: 0, rotate: -45 }}
                   animate={{ scale: 1, rotate: 0 }}
                   transition={{ delay: 0.7, type: "spring", stiffness: 250, damping: 15 }}
                >
                  !
                </motion.div>
             </div>
          </motion.div>

          <motion.p variants={item} className="eyebrow text-blue-500 mb-2 font-bold tracking-widest uppercase">
            Error 404
          </motion.p>
          <motion.h1 variants={item} className="text-5xl font-extrabold mb-6">
            Out of Scope!
          </motion.h1>
          <motion.p variants={item} className="text-xl text-gray-400 mb-2">
            Oops! It looks like this page wasn't in the Business Requirements Document.
          </motion.p>
          <motion.p variants={item} className="text-md text-gray-500 mb-10">
            Don't worry, we can always add it to the backlog for Phase 2.
          </motion.p>
          
          <motion.div variants={item}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link className="button button--primary flex items-center gap-2 px-6 py-3" to="/">
                <ArrowLeft aria-hidden="true" size={18} />
                Return to MVP (Home)
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
