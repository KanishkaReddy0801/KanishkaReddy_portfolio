import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router";
import { PageTransition } from "../components/PageTransition";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projects } from "./projectsData";

export function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  const projectIndex = projects.findIndex((item) => item.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">Selected work</p>
          <h1 className="mb-6 font-serif text-4xl">This project could not be found.</h1>
          <Link to="/projects" className="inline-flex items-center gap-2 border-b border-foreground/30 pb-2 font-sans text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent">
            <ArrowLeft size={15} /> Back to projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-6 py-20 md:px-12 md:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
            <aside className="md:w-1/3">
              <div className="md:sticky md:top-32">
                <Link to="/projects" className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent">
                  <ArrowLeft size={14} /> All projects
                </Link>
                <p className="mb-4 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {String(projectIndex + 1).padStart(2, "0")} / {project.category}
                </p>
                <h1 className="mb-7 font-serif text-5xl leading-tight md:text-6xl">{project.title}</h1>
                <p className="mb-10 font-serif text-2xl italic leading-relaxed text-muted-foreground">{project.summary}</p>
                <dl className="mb-10 grid gap-5 border-t border-border pt-5 font-sans text-sm sm:grid-cols-2 md:grid-cols-1">
                  <div>
                    <dt className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">My part</dt>
                    <dd className="font-light leading-relaxed">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">Alongside</dt>
                    <dd className="font-light leading-relaxed">{project.team}</dd>
                  </div>
                </dl>
              </div>
            </aside>

            <main className="min-w-0 md:w-2/3">
              <figure className="mb-14 aspect-[16/10] overflow-hidden bg-secondary/30 md:mb-20">
                <ImageWithFallback src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />
              </figure>
              {project.sections.map((section, index) => {
                const isResultsSection = section.title === "Results and learning";

                return (
                  <section id={`study-section-${index}`} key={section.title} className="scroll-mt-28 border-b border-border py-10 first:pt-0 md:py-14">
                    <div className="mb-5 flex items-baseline gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.title}</span>
                    </div>
                    <div className="max-w-3xl">
                      <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">{section.title}</h2>
                      <div className="space-y-5">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="font-sans text-lg font-light leading-relaxed text-muted-foreground">{paragraph}</p>
                        ))}
                      </div>
                      {isResultsSection && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-foreground/40 pb-2 font-sans text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
                        >
                          View live project <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </section>
                );
              })}
              <footer className="pt-8">
                <Link to="/projects" className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent">
                  <ArrowLeft size={14} /> Back to all projects
                </Link>
              </footer>
            </main>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}