import { motion } from 'framer-motion';
import CaseStudyLayout, {
  SectionLabel,
  ImpactCard,
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

export default function CSPaymentPlanImprovements() {
  return (
    <CaseStudyLayout
      label="Case Study"
      title="Streamlining Payment Plan Activation"
      subtitle="Reducing incorrect customer behavior in a high-stakes, multi-step payment flow."
      description="Customers enrolling in payment plans frequently failed to complete required activation steps, resulting in invalid states and confusion. I redesigned the flow to clarify activation requirements, prevent invalid states, and improve confidence in a compliance-sensitive financial experience."
      heroImage="https://framerusercontent.com/images/5YIFIPRhc73N5X3KliIY7ZZdcEI.png"
      heroCaption="Aligning system logic and user behavior in a high-stakes payment flow."
      relatedSlugs={['cs-figma-ui-documentation-kit', 'cs-adaptive-ai', 'cs-utility-reconnection', 'cs-utility-contact-nudge']}
    >
      {/* Context & Stakes */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Context & Stakes</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
          This experience supported customers managing payment plans in high-stakes financial situations, where clarity and correctness were essential.
        </motion.p>
        <BulletList items={[
          'Payment plans were not active until a required down payment was submitted',
          'Enrollment confirmation appeared before activation requirements were satisfied',
          'Users often believed they had finished when they had not',
          'Errors had real consequences for both customers and the business',
        ]} />
      </section>

      {/* The Problem */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>The Problem</SectionLabel>
        <motion.p {...fadeUp(0)} className="font-display italic text-ink mb-6">
          Customer behavior data and stakeholder feedback revealed two consistent failure modes:
        </motion.p>
        <div className="flex flex-col gap-6 mb-10">
          <PrincipleCard title="Insufficient Down Payments">
            Users successfully enrolled in payment plans but often submitted payments that did not meet the required down payment amount.
          </PrincipleCard>
          <PrincipleCard title="Premature Confirmation">
            Despite incomplete activation, the experience confirmed "you're enrolled" — creating false confidence that the plan was active.
          </PrincipleCard>
        </div>
        <motion.p {...fadeUp(0.2)} className="text-muted leading-relaxed max-w-2xl mb-10">
          In both cases, users believed they had completed the process successfully, even though their payment plans were not active. An existing "Down Payment Due" section was already present, but it was not effectively guiding users toward the required next step.
        </motion.p>
        <h4 className="font-display text-lg font-medium mb-4 text-muted">Before: Users could believe they were finished without paying.</h4>
        <CaseStudyImage
          src="https://framerusercontent.com/images/MS9rMFkZTKxcodl8c7ALEZ3Wsa0.png"
          alt="Before state: payment plan flow before redesign"
        />
      </section>

      {/* Evidence & Insights */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Evidence & Insights</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          Existing behavior data and stakeholder analysis indicated that the issue was not missing functionality, but <strong className="text-ink font-medium">misaligned guidance and hierarchy</strong> within the flow.
        </motion.p>
        <BulletList items={[
          'Enrollment and activation were treated as distinct system states but were not clearly differentiated in the UI',
          'The down payment requirement lacked urgency, clarity, and contextual timing',
          'The "Down Payment Due" component existed but did not effectively communicate that full payment was required to activate the plan',
          'The flow allowed users to proceed without reinforcing the remaining requirement',
        ]} />
        <motion.p {...fadeUp(0.2)} className="mt-8 text-sm text-muted italic">
          Stakeholders hypothesized that confusion stemmed from flow sequencing, visual hierarchy, and messaging — rather than user error.
        </motion.p>
      </section>

      {/* Hypotheses */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Hypotheses</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          Based on observed behavior, we defined the following hypotheses:
        </motion.p>
        <div className="flex flex-col gap-6 mb-10">
          <BulletList items={[
            'The down payment requirement was surfaced too late and with insufficient emphasis',
            'The experience allowed inactive states without clearly guiding users toward resolution',
            'Users interpreted enrollment confirmation as completion, regardless of payment amount',
            'Partial payments were not clearly communicated as insufficient for activation',
          ]} />
        </div>
        <CaseStudyImage
          src="https://framerusercontent.com/images/rZi2qBP58gLYLy8uTiEx4mYwnw.png"
          alt="Hypothesis mapping"
        />
      </section>

      {/* Design Approach */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Design Approach</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          I approached this as a funnel correction and activation integrity problem, mapping the end-to-end experience across multiple entry points — including reconnection flows, payment assistance, account summary, and direct payment paths.
        </motion.p>
        <h4 className="font-display text-lg font-medium mb-4">Key Design Interventions</h4>
        <BulletList items={[
          'Reordering the flow to surface the down payment requirement immediately after enrollment',
          'Clarifying copy to explicitly connect activation with meeting the full down payment amount',
          'Redesigning and repositioning the "Down Payment Due" component to increase visibility and urgency',
          'Reinforcing required next steps before allowing users to exit or assume completion',
          'Ensuring consistent behavior, messaging, and logic across all entry points',
        ]} />
        <motion.p {...fadeUp(0.2)} className="mt-8 text-muted leading-relaxed max-w-2xl mb-10">
          The goal was to align system behavior with user mental models and prevent incomplete activation.
        </motion.p>
        <h4 className="font-display text-lg font-medium mb-4 text-muted">After: Customers can't reach the success screen without making the required down payment.</h4>
        <CaseStudyImage
          src="https://framerusercontent.com/images/5rezzHhCEIuVPqNBC8e2REbx4Aw.png"
          alt="After state: redesigned payment plan flow"
        />
      </section>

      {/* Execution */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Execution & Collaboration</SectionLabel>
        <motion.p {...fadeUp(0)} className="font-display italic text-ink mb-6">
          The final Figma file served as the single source of truth for:
        </motion.p>
        <BulletList items={[
          'Updated flows and screen states',
          'Conditional logic and edge cases',
          'Developer annotations and implementation notes',
          'Supporting documentation for business stakeholders',
        ]} />
        <div className="mt-10">
          <CaseStudyImage
            src="https://framerusercontent.com/images/eFfRSVPk4W0M9BXnrnq7z9UEW0.png"
            alt="Figma documentation overview"
          />
        </div>
        <motion.p {...fadeUp(0.2)} className="mt-8 text-muted leading-relaxed max-w-2xl">
          I worked closely with product managers, engineers, and business partners to validate assumptions, address edge cases, and ensure the solution was feasible, scalable, and aligned with technical constraints.
        </motion.p>
      </section>

      {/* Outcome */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Outcome</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          The redesigned payment plan activation flow was delivered in the fall of 2025. While precise quantitative metrics were not available, the solution eliminated known paths that allowed users to assume completion without meeting activation requirements.
        </motion.p>
        <motion.blockquote {...fadeUp(0.1)} className="border-l-2 border-accent pl-6 py-2 max-w-2xl mb-10">
          <p className="font-display text-xl italic font-medium leading-snug text-ink">
            "Stakeholders expressed strong confidence in the updated experience, noting improved clarity, reduced ambiguity, and better alignment between system logic and user expectations."
          </p>
        </motion.blockquote>
      </section>

      {/* What I Learned */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>What I Learned</SectionLabel>
        <BulletList items={[
          'Small gaps in hierarchy and sequencing can create significant downstream confusion',
          'Preventing invalid states is often more effective than recovering from them',
          'Clear activation requirements are especially critical in financial and compliance-sensitive workflows',
          'Well-documented, shared artifacts significantly improve cross-functional alignment',
        ]} />
        <motion.p {...fadeUp(0.2)} className="mt-8 text-sm text-muted italic">
          If iterating further, I would focus on instrumenting activation completion metrics and testing additional copy and hierarchy variations to further reinforce correct behavior.
        </motion.p>
      </section>

      {/* My Role */}
      <section className="py-20">
        <SectionLabel>My Role</SectionLabel>
        <BulletList items={[
          'End-to-end product design for a multi-step payment plan activation flow',
          'Behavioral analysis and hypothesis generation',
          'Flow restructuring, interaction design, and visual hierarchy',
          'Cross-functional collaboration with Product, Engineering, and Business',
          'Delivery of production-ready designs and documentation',
        ]} />
      </section>
    </CaseStudyLayout>
  );
}
