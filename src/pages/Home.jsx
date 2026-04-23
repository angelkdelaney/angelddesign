import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import { CASE_STUDIES, SKILLS, TOOL_LOGOS } from '../data/site';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const marqueeItems = [...TOOL_LOGOS, ...TOOL_LOGOS]; // duplicate for seamless loop

  return (
    <main className="pt-28">
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh] pb-16">
        {/* Left */}
        <div className="flex flex-col gap-7">
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="section-label"
          >
            Senior UX + Product Designer
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight"
          >
            UX + Product
            <br />
            <span className="italic text-muted">Designer</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-lg text-muted leading-relaxed max-w-sm"
          >
            Where systems thinking meets accessible, human-centered design.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-6 pt-2"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-accent transition-colors duration-300"
            >
              View Case Studies
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              About me →
            </Link>
          </motion.div>
        </div>

        {/* Right — Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://framerusercontent.com/images/zERT73VmbBCJEJqBvtPE3rhtU.png"
              alt="Angel Delaney"
              className="w-full max-w-md mx-auto object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-warm -z-10" />
          </div>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-warm" />

      {/* ── Systems-Driven Design section ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <motion.span variants={fadeUp} custom={0} className="section-label block mb-6">
              What I do
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-medium leading-snug">
              Systems-Driven Design in Practice
            </motion.h2>
          </div>

          <div className="flex flex-col gap-6">
            <motion.p variants={fadeUp} custom={2} className="text-muted leading-relaxed">
              Hands-on across discovery, systems design, and delivery — turning constraints into usable, buildable paths.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-ink/80">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Case Studies ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label block mb-3">Featured Work</span>
            <h2 className="font-display text-3xl font-medium">Case Studies</h2>
          </div>
          <Link
            to="/case-studies"
            className="hidden md:inline-flex text-sm font-medium text-muted hover:text-ink transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* ── Tool marquee ── */}
      <section className="border-t border-b border-warm py-10 overflow-hidden">
        <p className="section-label text-center mb-8">Design Stack</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-10 items-center animate-marquee">
            {[...TOOL_LOGOS, ...TOOL_LOGOS].map((tool, i) => (
              <img
                key={i}
                src={tool.src}
                alt={tool.name}
                className="h-8 w-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-4xl font-medium leading-snug max-w-2xl mx-auto mb-10"
        >
          I design resilient systems that support real people in complex moments.
        </motion.p>
        <a
          href="https://www.linkedin.com/in/angelkdelaney/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ink text-ink text-sm font-medium px-8 py-3 hover:bg-ink hover:text-paper transition-all duration-300"
        >
          Get in touch via LinkedIn
        </a>
      </section>
    </main>
  );
}
