import { motion } from 'framer-motion';

const TAG_COLORS = {
  'Enterprise Utility': 'tag-pill-rust',
  'Systems Design': 'tag-pill-indigo',
  'Accessibility': 'tag-pill-indigo',
  'Design Systems': 'tag-pill-indigo',
  'Internal Tooling': 'tag-pill-rust',
  'Governance': 'tag-pill-rust',
  'Customer Trust': 'tag-pill-indigo',
  'Journey Architecture': 'tag-pill-indigo',
  'Behavioral UX': 'tag-pill-rust',
  'AI Design': 'tag-pill-indigo',
  'Emotional UX': 'tag-pill-rust',
  'Concept Exploration': 'tag-pill-rust',
};

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.a
      href={study.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block border border-warm hover:border-indigo/30 transition-all duration-500 overflow-hidden bg-white hover:shadow-lg"
    >
      {/* Image */}
      <div className="overflow-hidden bg-pearl aspect-[16/10]">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className={TAG_COLORS[tag] || 'tag-pill'}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl font-medium leading-snug group-hover:text-indigo transition-colors duration-300">
          {study.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">{study.description}</p>

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-warm">
          {study.meta && (
            <span className="text-xs font-mono text-muted/70">{study.meta}</span>
          )}
          <span className="text-xs font-medium text-rust group-hover:translate-x-1 transition-transform duration-200 ml-auto">
            Read case study →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
