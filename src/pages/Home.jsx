import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import { CASE_STUDIES, SKILLS, TOOL_LOGOS } from '../data/site';
import HeroImageStack from "../components/HeroImageStack";
import profilePic from "../assets/profile-image.png";

// In your hero section:
<div className="text-center px-4 py-16 md:py-24">
  <h1 className="text-5xl md:text-7xl font-bold mb-6">
    UX + Product Designer
  </h1>
  <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
    Where systems thinking meets accessible, human-centered design.
  </p>

  <HeroImageStack src={profilePic} alt="Angel Delaney" />

  <p className="mt-12 text-2xl md:text-3xl text-green-800 font-medium max-w-2xl mx-auto">
    I design resilient systems that support real people in complex moments.
  </p>
</div>

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <main className="pt-28">
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh] pb-16">
        <div className="flex flex-col gap-7">
          <motion.span custom={0} initial="hidden" animate="show" variants={fadeUp} className="section-label">
            Senior UX + Product Designer
          </motion.span>

          <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight"
          >
            UX + Product
            <br />
            <em className="italic text-indigo">Designer</em>
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="show" variants={fadeUp}
            className="text-lg text-muted leading-relaxed max-w-sm"
          >
            Where systems thinking meets accessible, human-centered design.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp}
            className="flex items-center gap-6 pt-2"
          >
            <Link to="/case-studies" className="btn-primary">
              View Case Studies
            </Link>
            <Link to="/about" className="link-rust">
              About me →
            </Link>
          </motion.div>
        </div>

        {/* Profile image */}
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
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-indigo/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-warm -z-10" />
          </div>
        </motion.div>
      </section>

      <div className="border-t border-warm" />

      {/* ── What I do ── */}
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
            <motion.h2 variants={fadeUp} custom={1}
              className="font-display text-3xl md:text-4xl font-medium leading-snug"
            >
              Systems-Driven Design in Practice
            </motion.h2>
          </div>

          <div className="flex flex-col gap-6">
            <motion.p variants={fadeUp} custom={2} className="text-muted leading-relaxed">
              Hands-on across discovery, systems design, and delivery — turning constraints into usable, buildable paths.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-rust flex-shrink-0" />
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
          <Link to="/case-studies" className="hidden md:inline-flex link-rust">
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
      <section className="border-t border-b border-warm py-10 overflow-hidden bg-white">
        <p className="section-label text-center mb-8">Design Stack</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-10 items-center animate-marquee">
            {[...TOOL_LOGOS, ...TOOL_LOGOS].map((tool, i) => (
              <img
                key={i}
                src={tool.src}
                alt={tool.name}
                className="h-8 w-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
          className="btn-outline"
        >
          Get in touch via LinkedIn
        </a>
      </section>
    </main>
  );
}
