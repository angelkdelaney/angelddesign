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

export default function CSUtilityContactNudge() {
  return (
    <CaseStudyLayout
      label="Case Study"
      title="Introducing Trustworthy Contact Updates"
      subtitle="Nudging utility customers to maintain accurate contact information across web and IVR."
      description="A senior-level product design case study focused on improving customer outreach, regulatory compliance, and operational confidence by enabling secure, self-service contact updates across channels and operating companies."
      heroImage="https://framerusercontent.com/images/D0qpvUmdiodp3davHmQqXyi8o.png"
      role="Role: Senior Product Designer (hands-on lead) · Scope: Web + IVR omnichannel experience · Partners: Product, Business, Engineering, Legal, Regulatory"
      relatedSlugs={['cs-adaptive-ai', 'cs-payment-plan-improvements', 'cs-utility-reconnection', 'cs-figma-ui-documentation-kit']}
    >
      {/* Business Context */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Business Context</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          Customers were missing critical communications due to outdated contact information, leading to safety risks, higher support costs, and eroded trust.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ImpactCard title="Returned Mail" description="Physical mail failing to reach customers due to stale addresses." />
          <ImpactCard title="Undeliverable Email" description="Critical notifications bouncing or going unread." />
          <ImpactCard title="Compliance Risk" description="Regulatory notification requirements going unmet." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeUp(0.1)} className="border-l-2 border-accent pl-6">
            <h4 className="font-display text-base font-medium text-ink mb-2">Primary Driver</h4>
            <p className="text-sm text-muted">Inaccurate contact information causing failed outreach and regulatory risk.</p>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="border-l-2 border-warm pl-6">
            <h4 className="font-display text-base font-medium text-ink mb-2">Secondary Drivers</h4>
            <BulletList items={[
              'Regulatory notification requirements',
              'Inconsistent data handling across operating companies and channels',
            ]} />
          </motion.div>
        </div>
        <motion.p {...fadeUp(0.3)} className="mt-10 font-display italic text-xl text-ink max-w-2xl">
          Goal: Introduce a scalable, self-service way for customers to update contact information — reducing failed outreach while ensuring accuracy, compliance, and consistency across web and IVR.
        </motion.p>
      </section>

      {/* The Problem */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>The Problem</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          Customers <em>could</em> update contact information, but only through fragmented, error-prone paths that varied by channel, operating company, and account configuration.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Multiple Data Levels</h4>
            <BulletList items={[
              'Contact information could exist at both the customer and account level',
              'Customers had no visibility into which level they were updating',
            ]} />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Operating Company Differences</h4>
            <BulletList items={[
              'Phone and email rules varied by state and OpCo',
              'Some allowed multiple emails or phones; others did not',
            ]} />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Accounts Without Online Profiles</h4>
            <BulletList items={[
              'Customers could have valid contact data even without a web account',
              "Agent updates didn't always map cleanly to digital experiences",
            ]} />
          </div>
        </div>
        <motion.blockquote {...fadeUp(0.2)} className="border-l-2 border-accent pl-6 py-2 max-w-2xl">
          <p className="font-display text-lg italic text-ink">
            "Customers unknowingly updated the 'wrong' data, agents corrected it later, and the system quietly drifted back into inconsistency."
          </p>
        </motion.blockquote>
      </section>

      {/* Design Strategy */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Design Strategy</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          Because this was a net-new self-service capability touching regulated data, the strategy focused on creating shared logic that could scale safely — balancing customer clarity, operational trust, and regulatory constraints.
        </motion.p>
        <div className="flex flex-col gap-8">
          <PrincipleCard title="System Clarity">
            Abstracted complex data hierarchies into clear, step-by-step update flows. Removed the need for customers to understand customer vs. account-level distinctions.
          </PrincipleCard>
          <PrincipleCard title="Channel-Agnostic Design">
            Defined contact update logic once and shared it across web and IVR. Allowed each channel to express the same rules using its own affordances.
          </PrincipleCard>
          <PrincipleCard title="Clarity Under Stress">
            Treated contact updates as trust-sensitive moments, not routine form edits. Used progressive disclosure and plain language to reduce confusion and error.
          </PrincipleCard>
        </div>
        <motion.p {...fadeUp(0.3)} className="mt-10 text-sm text-muted font-mono">
          Each principle reflects deliberate tradeoffs between customer flexibility, operational risk, and regulatory requirements.
        </motion.p>
      </section>

      {/* Navigating Complexity */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Navigating Complexity</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          Updating contact information touched nearly every system boundary: customer identity, account hierarchy, channel ownership, and regulatory rules.
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="font-display italic text-ink mb-10">
          Progress depended on alignment more than pixels.
        </motion.p>
        <div className="flex flex-col gap-10">
          <ProcessStep number="01" title="Balancing Flexibility with Guardrails">
            I facilitated working sessions with Product, Engineering, and Business stakeholders to map data ownership, update paths, and failure scenarios — aligning on which rules were non-negotiable and where flexibility could safely exist.
          </ProcessStep>
          <ProcessStep number="02" title="Shared Logic Across Web and IVR">
            I partnered with web and IVR teams to define a shared, channel-agnostic decision framework, ensuring consistent outcomes while respecting different technical constraints.
          </ProcessStep>
          <ProcessStep number="03" title="Making Requirements Usable">
            I worked closely with Regulatory, Compliance, and Legal to translate requirements into plain language and validate customer understanding through usability testing.
          </ProcessStep>
        </div>
      </section>

      {/* Cross-Channel Process Alignment */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Cross-Channel Process Alignment</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          These flows translate complex, regulated decision logic into consistent customer journeys across web and IVR. Rather than designing separate solutions per channel, the work focused on shared decision logic that could adapt to different interfaces without diverging in behavior.
        </motion.p>
        <CaseStudyImage
          src="https://framerusercontent.com/images/zlQTGgtUcfYF8tm9V5k4LMjRsGE.png"
          alt="Cross-channel process alignment overview"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div>
            <h4 className="font-display text-lg font-medium mb-2">1. Eligibility & Data Ownership</h4>
            <p className="text-sm text-muted mb-4">Determines which contact fields can be updated based on account linkage and profile status.</p>
            <CaseStudyImage src="https://framerusercontent.com/images/BTVuvJGCRFxt5gW5M7CyS9KPPsw.jpg" alt="Eligibility and data ownership flow" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-2">2. Contact Update Paths</h4>
            <p className="text-sm text-muted mb-4">Routes updates to the correct data level without exposing internal structure to customers.</p>
            <CaseStudyImage src="https://framerusercontent.com/images/VSEflM3ZfCtHp2evErRnSZDUs.jpg" alt="Contact update paths flow" />
          </div>
          <div>
            <h4 className="font-display text-lg font-medium mb-2">3. Confirmation</h4>
            <p className="text-sm text-muted mb-4">Ensures the customer receives confirmation and captures when contact information is not updated or explicitly confirmed.</p>
            <CaseStudyImage src="https://framerusercontent.com/images/GRI5IjOKNS8RJkf2GhMFouSCuw.jpg" alt="Confirmation flow" />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Outcomes and Impact</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-xs text-muted font-mono tracking-widest uppercase mb-10">
          Status: Delivered and in development across operating companies
        </motion.p>
        <h3 className="font-display text-2xl font-medium mb-6">Customer Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ImpactCard title="Clear, Guided Contact Updates" description="Customers update contact information without needing to understand internal data models." />
          <ImpactCard title="Reduced Confusion and Rework" description="Fewer silent overwrites or mismatched updates across accounts." />
          <ImpactCard title="Improved Trust in Digital Channels" description="Clear confirmation of what was updated and where it applies." />
        </div>
        <motion.p {...fadeUp(0.1)} className="font-display italic text-ink mb-10">
          Validated through usability testing across multiple account and profile scenarios.
        </motion.p>
        <h3 className="font-display text-2xl font-medium mb-6">Business and Operational Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ImpactCard status="Launched" title="Improved Deliverability" description="Fewer returned mail pieces and undeliverable emails." />
          <ImpactCard status="Early indicators positive" title="Reduced Agent Correction" description="Less manual cleanup of mismatched contact data." />
          <ImpactCard status="Early indicators positive" title="Regulatory Confidence" description="More reliable delivery of required customer communications." />
          <ImpactCard status="Early indicators positive" title="Scalable Framework" description="Shared logic supports rollout across operating companies and future journeys." />
        </div>
        <motion.blockquote {...fadeUp(0.2)} className="border-l-2 border-accent pl-6 py-2 max-w-2xl">
          <p className="font-display text-xl italic leading-snug text-ink">
            "This project reinforced that clarity in complex systems comes from aligning logic and constraints first — not screens."
          </p>
          <p className="mt-4 text-muted text-sm leading-relaxed">
            By treating contact updates as a trust-sensitive system rather than a simple form, the work created a foundation that supports customers, operations, and compliance without sacrificing scalability.
          </p>
        </motion.blockquote>
      </section>
    </CaseStudyLayout>
  );
}
