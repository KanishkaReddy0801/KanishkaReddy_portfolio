import { motion, useScroll, useTransform } from "motion/react";
import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef } from "react";

const IMG_WHISKEY = "https://images.unsplash.com/photo-1666266677237-a9bc244148fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGlza2V5JTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzQ0Mzc5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_NOTED = "https://images.unsplash.com/photo-1504520169123-768da2d62b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwbm90ZWJvb2slMjBtaW5pbWFsfGVufDF8fHx8MTc3NDQzNzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// We mock some additional images for the case studies to make them look rich.
const MOCK_IMAGES_WHISKEY = [
  "https://images.unsplash.com/photo-1627072522511-c9998ea32cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3aGlza2V5JTIwZ2xhc3N8ZW58MHx8fHwxNzgwOTY5ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1599839619722-39751411ea63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3aGlza2V5JTIwYmFycmVsfGVufDB8fHx8MTc4MDk2OTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
];

const MOCK_IMAGES_NOTED = [
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxqb3VybmFsJTIwbWluaW1hbHxlbnwwfHx8fDE3ODA5Njk5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1522881113591-b52f6b8ce811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxuYXR1cmUlMjBjYWxtfGVufDB8fHx8MTc4MDk2OTk0NHww&ixlib=rb-4.1.0&q=80&w=1080"
];


const projectsData = {
  scotchmaltwhiskey: {
    title: "Scotch Malt Whiskey UX Report",
    subtitle: "UX Case Study",
    description: "UX evaluation and interface improvements for a premium whiskey e-commerce experience.",
    htmlFile: "/scotchmaltwhiskey.html",
    tags: ["UX Report", "Whiskey", "E-commerce"],
    link: "https://scotchmaltwhiskey.netlify.app/",
  },
  sivakumarportfolio: {
    title: "Siva Kumar Portfolio UX Report",
    subtitle: "UX Case Study",
    description: "Portfolio UX review for Siva Kumar, highlighting strengths and areas for improvement in personal branding.",
    htmlFile: "/SivaKumar Portfolio/sivakumarportfolio.html",
    tags: ["UX Report", "Portfolio", "Case Study"],
    link: "https://sivakumar-photographyportfolio.netlify.app/",
  },
  aiops: {
    title: "AIOps UX Report",
    subtitle: "UX Case Study",
    description: "A comprehensive UX analysis and recommendations for an AIOps platform, focusing on usability, workflow, and actionable insights.",
    htmlFile: "/AIOps.html",
    tags: ["UX Report", "AIOps", "Case Study"],
    link: "https://vanguard-aiops.netlify.app/",
  },
  ats: {
    title: "ATS UX Report",
    subtitle: "UX Case Study",
    description: "User experience review and design suggestions for an Applicant Tracking System, emphasizing clarity and recruiter efficiency.",
    htmlFile: "/ATS.html",
    tags: ["UX Report", "ATS", "Case Study"],
    link: "https://ats-bootlabs.netlify.app/",
  },
  still: {
    title: "Still UX Report",
    subtitle: "UX Case Study",
    description: "Detailed UX review for Still, with a focus on visual clarity and user journey.",
    htmlFile: "/still.html",
    tags: ["UX Report", "Still", "Case Study"],
    link: "https://still-onlinejournalandblog.netlify.app/",
  },
};

export function CaseStudy() {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);


  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link to="/projects" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider">
            <MoveLeft size={16} /> Back to Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div ref={containerRef} className="relative w-full bg-background min-h-screen pb-32">
        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto border-b border-border">
          <div className="flex flex-col gap-6">
            <Link to="/projects" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 mb-4 hover:text-accent hover:border-accent transition-colors uppercase text-xs tracking-widest text-muted-foreground">
              <MoveLeft size={14} /> Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9]">{project.title}</h1>
            <h2 className="text-2xl md:text-4xl font-serif leading-relaxed mb-2 max-w-4xl">{project.subtitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors uppercase text-sm tracking-wider mb-4"
            >
              View Live Project <MoveLeft size={14} className="rotate-180" />
            </a>
            {/* <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        </section>

        {/* UX REPORT - structured and authored in-app (no external HTML embeds) */}
        <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <main className="col-span-2 ux-report">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Executive Summary</h3>
              <p className="mt-3 text-lg text-foreground leading-relaxed">This report provides a focused UX & accessibility evaluation of <strong>{project.title}</strong>. It covers usability heuristics, accessibility (WCAG) findings, cognitive and interaction laws, information architecture, visual hierarchy, and prioritized recommendations for implementation.</p>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Heuristic Evaluation</h4>
                <ul className="list-disc pl-5 text-base leading-relaxed text-foreground">
                  <li><strong>Visibility of system status:</strong> Provide clear progress indicators for long-running actions and loading states to satisfy Nielsen heuristics.</li>
                  <li><strong>Match between system and the real world:</strong> Use familiar domain language and consistent affordances across flows.</li>
                  <li><strong>Error prevention & recovery:</strong> Include inline validation, clear error messages, and undo affordances where destructive actions exist.</li>
                </ul>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Accessibility (WCAG) Analysis</h4>
                <p className="text-base text-foreground leading-relaxed">Checked against <strong>WCAG 2.1 AA</strong> principles — key points below reference specific success criteria and recommended fixes.</p>
                <ul className="mt-3 space-y-2 text-base">
                  <li><strong>Contrast (1.4.3):</strong> Ensure text and interactive elements meet a contrast ratio of at least 4.5:1 for normal text and 3:1 for UI components. Use the theme variables and test with automated tools (axe, Lighthouse).</li>
                  <li><strong>Keyboard accessibility (2.1):</strong> All interactive controls must be reachable and operable via keyboard. Ensure visible focus states, skip links, and semantic HTML (button, nav, heading structure).</li>
                  <li><strong>Labels & instructions (3.3):</strong> Inputs and form controls require explicit labels and helpful error text. Use ARIA only when semantic HTML is insufficient.</li>
                </ul>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Interaction & Cognitive Laws</h4>
                <ul className="list-disc pl-5 text-base leading-relaxed text-foreground">
                  <li><strong>Fitts' Law:</strong> Target interactive elements that are frequently used should be larger and placed near likely pointer paths to reduce movement time.</li>
                  <li><strong>Hick's Law:</strong> Limit options in primary decision points. Use progressive disclosure for complex tasks to reduce decision time.</li>
                  <li><strong>Gestalt Principles:</strong> Apply proximity, similarity and visual hierarchy to group related items and reduce cognitive load.</li>
                </ul>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Information Architecture & Content</h4>
                <p className="text-base leading-relaxed">Improve discoverability by tightening navigation labels, creating predictable pathways for top tasks, and ensuring metadata (titles, descriptions) reflect task intent. Add breadcrumbs for deep flows and ensure heading structure (H1→H2→H3) maps to content hierarchy.</p>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Performance & Technical Notes</h4>
                <ul className="list-disc pl-5 text-base leading-relaxed text-foreground">
                  <li><strong>Performance budgets:</strong> Keep first contentful paint under 1.5s for primary landing, lazy-load offscreen images, and use compression + modern image formats (AVIF/WebP).</li>
                  <li><strong>SPA considerations:</strong> Use route-level code-splitting, preserve focus on navigation, and ensure server-side rendering provides meaningful meta for SEO and social sharing.</li>
                  <li><strong>Testing:</strong> Integrate automated accessibility checks (axe-core), Lighthouse CI, and user testing with assistive technology (NVDA/VoiceOver).</li>
                </ul>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Prioritized Recommendations</h4>
                <ol className="list-decimal pl-5 text-base leading-relaxed text-foreground">
                  <li>Fix color-contrast failures across primary CTAs and body text (WCAG 2.1 AA).</li>
                  <li>Replace non-semantic wrappers for controls with native elements and add ARIA where necessary.</li>
                  <li>Design and document a keyboard interaction spec for all components (focus order, shortcuts, traps).</li>
                  <li>Audit performance and apply lazy-loading, responsive images, and minimized bundles for improved LCP.</li>
                </ol>
              </article>

              <article className="mt-8 ux-section">
                <h4 className="text-xl font-serif mb-3">Success Metrics</h4>
                <p className="text-base leading-relaxed">Measure outcomes with a combination of qualitative and quantitative metrics: task completion rate, time-on-task, error rate, SUS score, accessibility compliance score, and performance indicators (LCP, TTI).</p>
              </article>
            </main>

            <aside className="col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card p-4 rounded-md shadow-sm">
                  <h5 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Project Details</h5>
                  <p className="text-base"><strong>Tags:</strong> {project.tags.join(", ")}</p>
                  <p className="mt-2 text-sm text-muted-foreground">Source: <a href={project.link} target="_blank" rel="noreferrer" className="text-accent hover:underline">Live site</a></p>
                </div>

                <div className="bg-card p-4 rounded-md shadow-sm">
                  <h5 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Implementation Notes</h5>
                  <p className="text-sm text-muted-foreground">Recommend implementing fixes in incremental sprints and validating each change with accessibility and UX regression tests.</p>
                </div>

                <div className="bg-card p-4 rounded-md shadow-sm">
                  <h5 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Image Gallery</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <img src={IMG_WHISKEY} alt="screenshot 1" className="w-full h-24 object-cover rounded" />
                    <img src={MOCK_IMAGES_WHISKEY[0]} alt="screenshot 2" className="w-full h-24 object-cover rounded" />
                    <img src={MOCK_IMAGES_WHISKEY[1]} alt="screenshot 3" className="w-full h-24 object-cover rounded" />
                    <img src={IMG_NOTED} alt="screenshot 4" className="w-full h-24 object-cover rounded" />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}