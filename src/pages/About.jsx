import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <motion.span {...fadeUp(0)} className="section-label block mb-6">
          About Me
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl"
        >
          Turning Complex Problems Into Clear, Reliable Digital Experiences
        </motion.h1>
      </section>

      <div className="border-t border-warm" />

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src="https://framerusercontent.com/images/3aTlMf9f5PCf6edCWXezl2NsjR4.png"
            alt="Angel Delaney"
            className="w-full max-w-sm object-cover"
          />
          <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-accent/25" />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-8">
          <motion.p {...fadeUp(0.1)} className="text-lg text-muted leading-relaxed">
            I'm a UX + Product Designer with over two decades of experience designing and building for the web, spanning front-end development and user experience design.
          </motion.p>

          <motion.p {...fadeUp(0.2)} className="text-base text-muted leading-relaxed">
            I care deeply about <strong className="text-ink font-medium">usability, accessibility, and thoughtful interaction</strong> — especially in products people rely on every day.
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="text-base text-muted leading-relaxed">
            I approach design as both a craft and a systems-oriented, collaborative practice. My background in front-end development allows me to work fluently with engineers, anticipate implementation challenges, and deliver practical, scalable, build-ready designs.
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.4)}
            className="border-l-2 border-accent pl-6 py-2"
          >
            <p className="font-display text-xl font-medium italic leading-snug">
              "Good UX should feel intuitive, respectful, and quietly effective."
            </p>
          </motion.blockquote>

          <motion.div {...fadeUp(0.5)} className="pt-4">
            <a
              href="https://www.linkedin.com/in/angelkdelaney/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-accent transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
