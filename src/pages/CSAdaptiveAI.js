import { motion } from 'framer-motion';
import CaseStudyLayout, {
  SectionLabel,
  PrincipleCard,
  CaseStudyImage,
  BulletList,
} from '../components/CaseStudyLayout';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CSAdaptiveAI() {
  return (
    <CaseStudyLayout
      label="Conceptual Exploration"
      title="Designing Clarity for Overwhelming Moments"
      subtitle="As AI becomes increasingly embedded in digital products, designers face a new challenge: not how much intelligence to add, but when intelligence should remain quiet."
      heroImage="https://framerusercontent.com/images/lqtEx9ROKUE3AcE9c7amUqa7h2g.png"
      relatedSlugs={['cs-payment-plan-improvements', 'cs-utility-reconnection', 'cs-utility-contact-nudge', 'cs-figma-ui-documentation-kit']}
    >
      {/* Conscious Boundaries */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Conscious Boundaries</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-6">
          In this conceptual exploration, we establish <strong className="text-ink font-medium">consent before adaptation</strong>. Pace is adjusted only after the user has chosen a direction.
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="font-display italic text-ink mb-6 max-w-2xl">
          The fork does not fragment, but signals responsiveness rather than direction.
        </motion.p>
        <motion.p {...fadeUp(0.2)} className="text-muted leading-relaxed max-w-2xl mb-4">
          The interface offers three equally weighted directions: <strong className="text-ink">Slow down</strong>, <strong className="text-ink">Reset</strong>, or <strong className="text-ink">Just be here</strong>. No flashy features or recommendations. This avoids embedding value judgments and reinforces the idea that there is no "correct" way to arrive.
        </motion.p>
        <motion.p {...fadeUp(0.3)} className="text-sm text-muted font-mono">
          This project is a conceptual exploration, not a production application.
        </motion.p>
      </section>

      {/* Design Principles */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Design Principles</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          My guiding principles were built using constraints that protected the experience from becoming intrusive, performative, or overwhelming.
        </motion.p>
        <div className="flex flex-col gap-8">
          <PrincipleCard title="Restraint as an AI Design Feature">
            Intentional restraint prevents the experience from becoming intrusive or performative.
          </PrincipleCard>
          <PrincipleCard title="User Agency Over Automation">
            The system follows the user's direction without labeling or defining their internal state.
          </PrincipleCard>
          <PrincipleCard title="Accessibility Through Low Cognitive Load">
            Reduced visual noise and predictable pacing help users stay present without effort.
          </PrincipleCard>
        </div>
      </section>

      {/* Concept & AI Behavior */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Concept & AI Behavior</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display text-2xl font-medium mb-6">How the AI Learns</h3>
            <motion.p {...fadeUp(0)} className="text-muted leading-relaxed mb-6">
              This project treats AI as a <strong className="text-ink font-medium">behavioral system</strong>, not an interpretive one. The adaptive system is designed to observe patterns of interaction, not emotional states. This distinction is intentional.
            </motion.p>
            <motion.p {...fadeUp(0.1)} className="text-muted leading-relaxed mb-4">
              Instead of attempting to interpret how a user feels, the AI focuses on:
            </motion.p>
            <BulletList items={[
              'Frequency of engagement',
              'Duration of sessions',
              'Preferences for guided vs. unguided moments',
            ]} />
            <motion.p {...fadeUp(0.2)} className="mt-6 text-sm text-muted italic">
              These signals allow the app to adapt its behavior while avoiding assumptions about the user's internal experience. This approach prioritizes respect and emotional safety over accuracy or prediction.
            </motion.p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium mb-6">What the AI Does <em>Not</em> Do</h3>
            <motion.p {...fadeUp(0.1)} className="text-muted leading-relaxed mb-4">
              Just as important as what the system does is what it explicitly avoids. The AI does not:
            </motion.p>
            <BulletList items={[
              'Label or categorize emotional states',
              'Diagnose stress, anxiety, or wellbeing',
              'Push content to increase engagement',
              'Use streaks, rewards, or gamification',
              'Interpret disengagement as failure',
            ]} />
            <motion.p {...fadeUp(0.2)} className="mt-6 font-display italic text-ink">
              Absence is treated as a valid outcome, not a problem to solve.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Key Design Decisions</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-display text-2xl font-medium mb-4">Language That Does Not Instruct or Judge</h3>
            <motion.p {...fadeUp(0)} className="text-muted leading-relaxed">
              Rather than telling users what to do or how they should feel, the app uses permissive, invitational phrasing. The goal is to remove any sense of obligation or performance from the experience.
            </motion.p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-medium mb-4">Silence as a First-Class Interaction</h3>
            <motion.p {...fadeUp(0.1)} className="text-muted leading-relaxed mb-4">
              Silence is treated as a valid and intentional state, not a gap to be filled. This decision supports emotional safety by allowing users to engage — or disengage — without feeling evaluated.
            </motion.p>
            <motion.p {...fadeUp(0.2)} className="font-display italic text-ink">
              Absence is treated as a valid outcome, not a problem to solve.
            </motion.p>
          </div>
        </div>
        <CaseStudyImage
          src="https://framerusercontent.com/images/K25ETL0koHtDLtADxjcC082exYM.png"
          alt="Non-intrusive interface design"
        />
        <div className="mt-12">
          <h3 className="font-display text-2xl font-medium mb-6">The Non-Intrusive Interface</h3>
          <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-6">
            Accessibility here is treated as emotional as well as functional, prioritizing clarity and softness over feature density.
          </motion.p>
          <BulletList items={[
            'Limited interactive elements',
            'Clear primary actions',
            'Gentle transitions',
          ]} />
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Outcomes & Reflection</SectionLabel>
        <BulletList items={[
          'Developed a framework for designing AI behavior without emotional labeling or performance pressure',
          'Explored how presence-focused experiences can exist without productivity metrics or engagement incentives',
          'Applied accessibility thinking beyond compliance, focusing on cognitive and emotional load',
          'Practiced translating abstract values — such as trust and safety — into concrete product decisions',
        ]} />
        <motion.blockquote
          {...fadeUp(0.2)}
          className="border-l-2 border-accent pl-6 py-2 max-w-2xl mt-12"
        >
          <p className="font-display text-xl italic font-medium leading-snug text-ink">
            "The best AI experiences aren't the ones that do the most — they're the ones that know when to step back."
          </p>
        </motion.blockquote>
      </section>
    </CaseStudyLayout>
  );
}
