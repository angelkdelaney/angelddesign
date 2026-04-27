import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="pt-28">
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-6"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl"
        >
          Designing resilient systems in{' '}
          <em className="italic text-indigo">complex moments.</em>
        </motion.h1>
      </section>

      <div className="border-t border-warm" />

      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
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
          <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-indigo/20" />
        </motion.div>

        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            <span className="section-label">Location</span>
            <p className="text-ink font-medium">Easton, PA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <span className="section-label">Connect</span>
            <a
              href="https://www.linkedin.com/in/angelkdelaney/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              LinkedIn →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed">
              Always open to thoughtful conversations about product and design.
              Whether you're looking for collaboration, consultation, or just want to connect — reach out on LinkedIn.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
