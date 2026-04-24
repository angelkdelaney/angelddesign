import { motion } from 'framer-motion';
import CaseStudyLayout, {
  SectionLabel,
  ImpactCard,
  PrincipleCard,
  ProcessStep,
  CaseStudyImage,
  BulletList,
} from '../components/CaseStudyLayout';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function CSUtilityReconnection() {
  return (
    <CaseStudyLayout
      label="Case Study"
      title="Designing Omnichannel Utility Reconnection"
      subtitle="Designing a 24/7 self-service reconnection experience across web and IVR — built for clarity under stress."
      heroImage="https://framerusercontent.com/images/dKFK36XObRusLdtNj6HRmLI6As.png"
      relatedSlugs={['cs-payment-plan-improvements', 'cs-utility-contact-nudge', 'cs-figma-ui-documentation-kit']}
    >
      {/* Overview */}
      <section className="py-20 border-b border-warm">
        <motion.div {...fadeUp(0)}>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10">
            Utility disconnections are high-stress moments for customers and high-cost moments for business. Customers had no digital path to restore service on their own.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ImpactCard title="Operational Cost" description="Reconnection calls required trained agents and often involved complex account and eligibility checks." />
          <ImpactCard title="Revenue Delay" description="Customers were unable to pay and restore service until an agent was available, extending time-to-revenue." />
          <ImpactCard title="Erosion of Trust" description="Reconnection can be emotionally sensitive for customers, making long waits and unclear next steps especially damaging to trust." />
        </div>
        <motion.p {...fadeUp(0.1)} className="font-display text-xl italic text-ink mb-10">
          The goal wasn't just usability — it was operational reliability.
        </motion.p>
        <motion.div {...fadeUp(0.2)}>
          <h3 className="font-display text-2xl font-medium mb-4">My Role</h3>
          <BulletList items={[
            'Led end-to-end design across product, engineering, business, and IVR stakeholders',
            'Defined eligibility logic, customer messaging, and cross-channel flow sequencing',
            'Owned usability testing strategy and synthesis',
            'Facilitated cross-functional alignment with Legal and Compliance',
          ]} />
        </motion.div>
      </section>

      {/* Design Strategy */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Design Strategy</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          Because this was a net-new self-service feature, the design strategy focused on creating a system that could scale safely — balancing customer clarity, operational trust, and strict business rules across channels.
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="font-display italic text-ink mb-10">
          Each principle reflects deliberate tradeoffs between customer flexibility, operational risk, and regulatory requirements.
        </motion.p>
        <div className="flex flex-col gap-8">
          <PrincipleCard title="System Clarity">
            Complex rules and dependencies were distilled into clear, step-by-step flows without exposing internal complexity.
          </PrincipleCard>
          <PrincipleCard title="Channel-Agnostic Design">
            Reconnection logic was defined once and shared across web and IVR to ensure consistent eligibility decisions and outcomes.
          </PrincipleCard>
          <PrincipleCard title="Clarity Under Stress">
            The experience was designed for moments of urgency and anxiety, prioritizing accessibility and reduced cognitive load.
          </PrincipleCard>
        </div>
      </section>

      {/* Navigating Complexity */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Navigating Complexity</SectionLabel>
        <motion.p {...fadeUp(0)} className="font-display italic text-ink mb-10">
          These constraints shaped how the system was designed and implemented across channels.
        </motion.p>
        <div className="mb-12">
          <BulletList items={[
            'Navigating state-specific, regulated eligibility rules across multiple operating companies',
            'Ensuring automated reconnection was accurate and safely recoverable',
            'Designing for customers making decisions under high stress',
          ]} />
        </div>
        <div className="flex flex-col gap-10">
          <ProcessStep number="01" title="Balancing Flexibility with Guardrails">
            I partnered with business and product to map eligibility rules and risk scenarios, aligning on non-negotiable safeguards and safe simplifications.
          </ProcessStep>
          <ProcessStep number="02" title="Aligning Logic Across Web and IVR">
            I partnered with web and IVR teams to define shared decision logic, ensuring consistent outcomes while allowing each channel to adapt to its technical constraints.
          </ProcessStep>
          <ProcessStep number="03" title="Making Regulated Requirements Usable">
            I translated regulatory and legal requirements into plain language and validated comprehension through usability testing in high-stress scenarios.
          </ProcessStep>
        </div>
      </section>

      {/* Cross-Channel Process Alignment */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Cross-Channel Process Alignment</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          These flows translate complex, regulated decision logic into consistent customer journeys across web and IVR.
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="text-muted leading-relaxed max-w-2xl mb-10">
          I designed separate but aligned process flows for web and IVR to ensure eligibility logic, decision points, and outcomes remained consistent across channels.
        </motion.p>
        <CaseStudyImage
          src="https://framerusercontent.com/images/DZtm0ai4uH0882W3gjTzwk9PHHg.png"
          alt="Cross-channel process flow overview"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div>
            <h4 className="font-display text-lg font-medium mb-4">1. Eligibility Logic</h4>
            <CaseStudyImage src="https://framerusercontent.com/images/0BIS8X7PAgt28VygyY8IigH3GHg.png" alt="Eligibility Logic" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-4">2. Financial Assistance Paths</h4>
            <CaseStudyImage src="https://framerusercontent.com/images/WERPvdLNkVaBouqGdidTrbwIyY.png" alt="Financial Assistance Paths" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-4">3. Safety and Confirmation Logic</h4>
            <CaseStudyImage src="https://framerusercontent.com/images/Z7j5soueDv2yFHi5VBefmvUAto.png" alt="Safety and Confirmation Logic" />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Outcomes and Impact</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          This project introduced the first self-service reconnection experience for utility customers — providing a clear, predictable path through a high-stress moment that previously required live agent support.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <CaseStudyImage
            src="https://framerusercontent.com/images/NvtKZVIW6qngBa5SB3vn1Qixw.gif"
            alt="Self-service reconnection experience"
            caption="Simulated, simplified experience."
          />
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-medium">Customer Impact</h3>
            <ImpactCard title="Reduced Cognitive Load" description="Progressive disclosure of complex rules and edge cases." />
            <ImpactCard title="Clear Guidance During High-Stress Moments" description="Step-by-step eligibility, payment, and safety requirements." />
            <ImpactCard title="Immediate Reconnection for Eligible Customers" description="No wait for agent availability, including off-hours." />
          </div>
        </div>
        <motion.p {...fadeUp(0.1)} className="font-display italic text-ink mb-10">
          Validated through usability testing across multiple reconnection scenarios, including partial payment and assistance paths.
        </motion.p>
        <h3 className="font-display text-2xl font-medium mb-6">Business and Operational Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ImpactCard status="Metrics in progress" title="Faster Time to Revenue" description="Enabling 24/7 reconnection and targeting same day reconnection reduces delays." />
          <ImpactCard status="Early indicators positive" title="Reduced Call Volume" description="Designed to reduce service reconnection call volume." />
          <ImpactCard status="Launched" title="Operational Consistency" description="Monitoring equity across standard, partial payment, and assistance paths." />
        </div>
        <motion.blockquote {...fadeUp(0.2)} className="border-l-2 border-accent pl-6 py-2 max-w-2xl">
          <p className="font-display text-xl italic leading-snug text-ink">
            "Designing for moments of vulnerability requires thinking beyond screens. This project reinforced that clarity in regulated systems comes from aligning logic and constraints first — interface clarity follows."
          </p>
        </motion.blockquote>
      </section>
    </CaseStudyLayout>
  );
}
