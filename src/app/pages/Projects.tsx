import { motion, useScroll, useTransform } from "motion/react";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef } from "react";

import scotchMaltWhiskeyImg from "../../assets/scotchmaltwhiskey.png";
import sivaKumarImg from "../../assets/sivakumarportfolio.png";
import aiopsImg from "../../assets/aiops.png";
import atsImg from "../../assets/ats.png";
import stillImg from "../../assets/still.png";

export function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const projects = [
    {
      id: "scotchmaltwhiskey",
      title: "Scotch Malt Whiskey UX Report",
      subtitle: "UX Case Study",
      description: "UX evaluation and interface improvements for a premium whiskey e-commerce experience.",
      image: scotchMaltWhiskeyImg,
      tags: ["UX Report", "Whiskey", "E-commerce"],
      htmlFile: "/scotchmaltwhiskey.html"
    },
    {
      id: "aiops",
      title: "AIOps UX Report",
      subtitle: "UX Case Study",
      description: "A comprehensive UX analysis and recommendations for an AIOps platform, focusing on usability, workflow, and actionable insights.",
      image: aiopsImg,
      tags: ["UX Report", "AIOps", "Case Study"],
      htmlFile: "/AIOps.html"
    },
    {
      id: "sivakumarportfolio",
      title: "Siva Kumar Portfolio UX Report",
      subtitle: "UX Case Study",
      description: "Portfolio UX review for Siva Kumar, highlighting strengths and areas for improvement in personal branding.",
      image: sivaKumarImg,
      tags: ["UX Report", "Portfolio", "Case Study"],
      htmlFile: "/SivaKumar Portfolio/sivakumarportfolio.html"
    },
    {
      id: "ats",
      title: "ATS UX Report",
      subtitle: "UX Case Study",
      description: "User experience review and design suggestions for an Applicant Tracking System, emphasizing clarity and recruiter efficiency.",
      image: atsImg,
      tags: ["UX Report", "ATS", "Case Study"],
      htmlFile: "/ATS.html"
    },
    {
      id: "still",
      title: "Still UX Report",
      subtitle: "UX Case Study",
      description: "Detailed UX review for Still, with a focus on visual clarity and user journey.",
      image: stillImg,
      tags: ["UX Report", "Still", "Case Study"],
      htmlFile: "/still.html"
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="relative w-full bg-background min-h-screen">
        
        {/* HEADER SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-border">
          <div className="relative z-10 w-full mt-32 md:mt-0 max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase font-serif text-foreground break-words"
            >
              Selected <br/> Works
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border pt-6 gap-6"
            >
              <p className="max-w-md text-foreground font-medium text-lg uppercase tracking-widest">
                Intentional Design <br className="hidden md:block"/> & Craft
              </p>
              <p className="md:text-right max-w-sm text-sm text-muted-foreground leading-relaxed">
                Each project is a conversation between intention and craft—
                designed to solve real problems while creating meaningful experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS LIST */}
        <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto flex flex-col gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-4/12">
                  <span className="text-xs font-mono text-muted-foreground mb-4 block">{project.subtitle}</span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 hover:text-accent hover:border-accent transition-colors uppercase text-sm tracking-wider">
                    View Case Study <MoveUpRight size={16} />
                  </Link>
                </div>

                <div className="w-full md:w-8/12 aspect-[4/3] md:aspect-video lg:aspect-[12/10] overflow-hidden relative">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    className="w-full h-full"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* OUTRO */}
        <section className="px-6 md:px-12 py-32 border-t border-border bg-secondary/30 flex justify-center text-center">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
           >
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">More stories are being written. More systems are taking shape.</h2>
              <p className="text-muted-foreground text-lg italic">Stay tuned for future updates.</p>
           </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}