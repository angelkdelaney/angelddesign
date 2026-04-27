import { motion } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import { CASE_STUDIES } from '../data/site';

export default function CaseStudies() {
  return (
    <main className="pt-28">
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-6"
        >
          Featured Work
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight"
        >
          Case <em className="italic text-indigo">Studies</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-muted text-lg max-w-xl leading-relaxed"
        >
          Hands-on across discovery, systems design, and delivery — turning constraints into usable, buildable paths.
        </motion.p>
      </section>

      <div className="border-t border-warm" />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
