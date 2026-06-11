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

        {/* EMBED UX REPORT */}
        <section className="px-6 md:px-0 py-5 max-w-7xl mx-auto">
          <iframe
            src={project.htmlFile}
            title={project.title}
            width="100%"
            style={{ border: 0, display: "block", height: "80vh", }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </section>
      </div>
    </PageTransition>
  );
}