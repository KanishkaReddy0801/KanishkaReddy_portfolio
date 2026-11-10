import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projects } from "./projectsData";

export function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
            <aside className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:sticky md:top-32"
              >
                <p className="mb-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">Selected work</p>
                <h1 className="mb-8 font-serif text-5xl leading-tight md:text-7xl">Things I wanted to exist.</h1>
                <p className="mb-12 font-sans text-xl font-light leading-relaxed text-muted-foreground">
                  Some began with a question from work. Some began with a feeling I couldn't leave alone.
                </p>
                <div className="rounded-sm border border-border/50 bg-secondary/30 p-8">
                  <p className="mb-4 font-serif text-xl italic text-foreground/80">I design what I cannot find.</p>
                  <p className="font-sans text-sm font-light leading-relaxed text-muted-foreground">
                    A place for the ideas that stayed with me long enough to become something real.
                  </p>
                </div>
              </motion.div>
            </aside>

            <div id="project-list" className="space-y-24 md:w-2/3 md:space-y-32">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="group"
                >
                  <div className="mb-6 flex items-center gap-3 border-b border-foreground pb-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{project.category}</span>
                  </div>
                  <Link to={`/projects/${project.id}`} className="inline-block">
                    <h2 className="mb-5 font-serif text-4xl leading-tight transition-colors group-hover:text-accent md:text-5xl">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="mb-8 font-serif text-2xl italic leading-relaxed text-muted-foreground">{project.summary}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="mb-8 block aspect-[16/10] overflow-hidden bg-secondary/40"
                    aria-label={`Read the ${project.title} case study`}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </Link>
                  <div className="flex flex-wrap items-end justify-between gap-5">
                    <p className="max-w-md font-sans text-sm font-light leading-relaxed text-muted-foreground">
                      {project.tags.join(" · ")}
                    </p>
                    <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 border-b border-foreground/30 pb-2 font-sans text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent">
                      Read the story <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}