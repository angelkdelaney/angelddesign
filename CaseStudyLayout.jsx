import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data/site';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function StatBadge({ status, children }) {
  const colors = {
    launched: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    positive: 'bg-amber-50 text-amber-700 border-amber-200',
    progress: 'bg-blue-50 text-blue-700 border-blue-200',
  };
  return (
    <span className={`inline-block text-xs font-mono tracking-widest uppercase border px-3 py-1 ${colors[status] || colors.progress}`}>
      {children}
    </span>
  );
}

export function ImpactCard({ status, title, description }) {
  const statusMap = {
    'Launched': 'launched',
    'Early indicators positive': 'positive',
    'Metrics in progress': 'progress',
  };
  return (
    <motion.div
      {...fadeUp(0.1)}
      className="border border-warm p-6 flex flex-col gap-3"
    >
      {status && <StatBadge status={statusMap[status] || 'progress'}>{status}</StatBadge>}
      <h4 className="font-display text-lg font-medium text-ink">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="section-label block mb-6">{children}</span>
  );
}

export function ProcessStep({ number, title, children }) {
  return (
    <motion.div {...fadeUp(0.1)} className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-10 h-10 border border-accent flex items-center justify-center">
        <span className="font-mono text-sm text-accent">{number}</span>
      </div>
      <div>
        <h4 className="font-display text-lg font-medium text-ink mb-2">{title}</h4>
        <p className="text-muted leading-relaxed text-sm">{children}</p>
      </div>
    </motion.div>
  );
}

export function CaseStudyImage({ src, alt, caption }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="my-2"
    >
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && (
        <figcaption className="mt-3 text-xs text-muted font-mono text-center">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function PrincipleCard({ title, children }) {
  return (
    <motion.div {...fadeUp(0.1)} className="border-l-2 border-accent pl-6 py-1">
      <h4 className="font-display text-base font-medium text-ink mb-1">{title}</h4>
      <p className="text-sm text-muted leading-relaxed">{children}</p>
    </motion.div>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
          <span className="mt-1.5 flex-shrink-0 w-1 h-1 bg-accent rounded-full" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function RelatedStudies({ slugs }) {
  const related = CASE_STUDIES.filter(s => slugs.includes(s.slug));
  return (
    <section className="border-t border-warm mt-20 pt-16 pb-20 max-w-6xl mx-auto px-6">
      <SectionLabel>Featured Case Studies</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {related.map((study, i) => (
          <motion.div key={study.slug} {...fadeUp(i * 0.1)}>
            <Link
              to={`/case-studies/${study.slug}`}
              className="group block border border-warm p-6 hover:border-accent transition-colors duration-300"
            >
              {study.image && (
                <div className="overflow-hidden mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <p className="text-xs text-muted font-mono tracking-widest uppercase mb-1">{study.category}</p>
              <h3 className="font-display text-xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
                {study.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudyLayout({
  label,
  title,
  subtitle,
  description,
  role,
  heroImage,
  heroCaption,
  children,
  relatedSlugs = [],
}) {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <motion.span {...fadeUp(0)} className="section-label block mb-6">
          {label || 'Case Study'}
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p {...fadeUp(0.2)} className="mt-6 text-xl text-muted leading-relaxed max-w-2xl font-display italic">
            {subtitle}
          </motion.p>
        )}
        {description && (
          <motion.p {...fadeUp(0.25)} className="mt-4 text-base text-muted leading-relaxed max-w-2xl">
            {description}
          </motion.p>
        )}
        {role && (
          <motion.p {...fadeUp(0.3)} className="mt-6 text-xs text-muted font-mono tracking-widest uppercase border-t border-warm pt-6">
            {role}
          </motion.p>
        )}
      </section>

      {heroImage && (
        <section className="max-w-6xl mx-auto px-6 pb-8">
          <CaseStudyImage src={heroImage} alt={title} caption={heroCaption} />
        </section>
      )}

      <div className="border-t border-warm" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6">{children}</div>

      {/* Related */}
      {relatedSlugs.length > 0 && <RelatedStudies slugs={relatedSlugs} />}
    </main>
  );
}
