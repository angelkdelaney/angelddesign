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

export default function CSFigmaDocumentationKit() {
  return (
    <CaseStudyLayout
      label="Case Study"
      title="Designing Experience Documentation at Scale"
      subtitle="As the design team scaled, inconsistent documentation slowed reviews, increased risk, and made collaboration harder than it needed to be."
      description="I designed a shared UI documentation toolkit in Figma to bring structure, clarity, and accountability to design work — supporting multi-stage reviews, cross-functional alignment, and regulated delivery at scale."
      heroImage="https://framerusercontent.com/images/dxHf36pkrMxdydjZpwgu9MPbqYU.png"
      heroCaption="A standardized abstraction of a documentation layout with annotations, approvals, role-specific notes and review readiness at a glance."
      relatedSlugs={['cs-adaptive-ai', 'cs-payment-plan-improvements', 'cs-utility-reconnection', 'cs-utility-contact-nudge']}
    >
      {/* The Problem */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>The Problem</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed mb-6">
          Existing documentation didn't support:
        </motion.p>
        <BulletList items={[
          'Multi-stage design reviews and approvals',
          'Clear separation between research, design, and development context',
          'Traceability across business requirements, research findings, and final UI',
          'Fast, reliable review across design, product, and engineering',
        ]} />
      </section>

      {/* Role & Scope */}
      <section className="py-20 border-b border-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>My Role</SectionLabel>
            <BulletList items={[
              'Abstracted complex data hierarchies into clear, step-by-step flows',
              'Owned the design end to end',
              'Defined structure, components, and documentation standards',
              'Drove adoption across teams',
              'Iterated based on real feedback',
            ]} />
          </div>
          <div>
            <SectionLabel>Scope</SectionLabel>
            <BulletList items={[
              'Standardized Figma file structure for design documentation',
              'Created components for annotations, status tracking, approvals, and role-specific notes',
              'Built documentation structure of key requirements and supporting resources',
              'Shared and maintained as a living system',
            ]} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ImpactCard status="Launched" title="Governance" description="Multi-stage review & approval across all customer-facing designs." />
          <ImpactCard status="Launched" title="Traceability" description="From requirements to UI — every decision documented and linked." />
          <ImpactCard status="Early indicators positive" title="Reviewability" description="Fast, reliable feedback loops across design, product, and engineering." />
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>Design Principles</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-10">
          My guiding principles were built using constraints that protected the experience from becoming intrusive, performative, or overwhelming.
        </motion.p>
        <div className="flex flex-col gap-8">
          <ImpactCard status="Launched" title="Designed for Review" description="Built for critique and collaboration across Business, Product, and Engineering." />
          <ImpactCard status="Early indicators positive" title="Consistency Over Individual Customization" description="Shared standards over personal patterns." />
          <ImpactCard status="Early indicators positive" title="Clarity at a Glance" description="Key information surfaced immediately — status, annotations, approvals." />
        </div>
      </section>

      {/* 1. File Structure */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>1. File Structure & Layout</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          A standardized layout designed to make review context and documentation status immediately clear. This structure highlights screen headers, status indicators, annotations, and supporting resources.
        </motion.p>
        <CaseStudyImage
          src="https://framerusercontent.com/images/HVC0wdUOSgCnyeTTk8YcxNd4OgI.png"
          alt="Standardized file structure layout"
        />
      </section>

      {/* 2. Annotation System */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>2. Annotation System</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-8">
          The color-coded annotation system standardized the way important information was conveyed for our designs. Annotations were structured, role-aware, and visually distinct — making it easy to understand <em>why</em> a design decision was made, not just <em>what</em> was designed.
        </motion.p>
        <CaseStudyImage
          src="https://framerusercontent.com/images/zaWrDr5MYsDV8wGrDfpLiWmAcbs.png"
          alt="Annotation system"
        />
        <div className="flex flex-col gap-4 mt-8">
          <PrincipleCard title="Prevented assumptions during review">
            Reviewers understood intent without needing a walkthrough.
          </PrincipleCard>
          <PrincipleCard title="Reduced repetitive clarification questions">
            Context lived in the file, not in Slack threads.
          </PrincipleCard>
          <PrincipleCard title="Preserved context as designs evolved">
            Decision rationale remained intact through iteration cycles.
          </PrincipleCard>
        </div>
      </section>

      {/* 3. Status & Approval */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>3. Status and Approval Tracking</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          Because all customer-facing designs required multi-stage approval, the toolkit included clear status and approval indicators at the screen and flow level.
        </motion.p>
        <div className="flex flex-col gap-4 mb-8">
          <BulletList items={[
            'Supported governance without adding more processes',
            'Reduced missed or duplicated reviews',
            'Increased confidence for handoff',
          ]} />
        </div>
        <CaseStudyImage
          src="https://framerusercontent.com/images/HhXhNHRmhrRMmjWshSEAHHtOtLo.png"
          alt="Status and approval tracking"
        />
      </section>

      {/* 4. Role-Specific Notes */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>4. Role-Specific Notes</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          Design documentation needed to work for different audiences simultaneously — designers, product partners, stakeholders, and developers. I introduced role-specific note patterns to separate research insights, design rationale, and development considerations without fragmenting the file.
        </motion.p>
        <BulletList items={[
          'Reviewers can focus on what mattered to them',
          'Reduced noise while preserving important context',
          'Clearer cross-functional collaboration',
        ]} />
        <div className="mt-8">
          <CaseStudyImage
            src="https://framerusercontent.com/images/TTYWQfy4bxgz19sMUfku9YeNZw.png"
            alt="Role-specific notes"
          />
        </div>
      </section>

      {/* 5. Supporting Resources */}
      <section className="py-20 border-b border-warm">
        <SectionLabel>5. Supporting Resources and Traceability</SectionLabel>
        <motion.p {...fadeUp(0)} className="text-muted leading-relaxed max-w-2xl mb-4">
          To improve traceability, the toolkit included structured ways to reference supporting materials like research artifacts, process flows, business requirements, and stakeholder inputs. Additionally, it lists team members and links to their related work items.
        </motion.p>
        <div className="mt-8">
          <CaseStudyImage
            src="https://framerusercontent.com/images/ShDyXNTb5hpQKDDidzGL01aKNHE.png"
            alt="Supporting resources and traceability"
          />
        </div>
      </section>

      {/* Reflection */}
      <section className="py-20">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border-l-2 border-accent pl-6 py-2 max-w-2xl"
        >
          <p className="font-display text-2xl italic font-medium leading-snug text-ink">
            "Clear documentation is infrastructure."
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            This toolkit turned fragmented design files into a shared, review-ready system that scaled with team size, governance needs, and real-world constraints.
          </p>
        </motion.blockquote>
      </section>
    </CaseStudyLayout>
  );
}
