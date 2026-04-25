import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

export default function CaseStudyCard({ study, index }) {
  return (
    <MotionLink
      to={`/case-studies/${study.slug}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block border border-warm hover:border-accent/40 transition-all duration-500 overflow-hidden bg-paper hover:shadow-lg"
    >
      {/* Image */}
      <div className="overflow-hidden bg-warm aspect-[16/10]">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-7 flex flex-col gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
        {/* Title */}
        <h3 className="font-display text-xl font-medium leading-snug group-hover:text-accent transition-colors duration-300">
          {study.title}
        </h3>
        {/* Description */}
        <p className="text-sm text-muted leading-relaxed">{study.description}</p>
        {/* CTA */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-warm">
          {study.meta && (
            <span className="text-xs font-mono text-muted/70">{study.meta}</span>
          )}
          <span className="text-xs font-medium text-accent group-hover:translate-x-1 transition-transform duration-200 ml-auto">
            Read case study →
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
