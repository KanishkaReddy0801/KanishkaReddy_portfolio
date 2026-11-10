import { motion } from "motion/react";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import { PageTransition } from "../components/PageTransition";

type ResumeBullet = { lead: string; detail: string };

const summary = "User-centered UI/UX & Product Designer with over 3 years of experience crafting intuitive, scalable, and accessible visual interfaces for digital products, enterprise B2B SaaS platforms, and AI-driven applications. Skilled across the complete product design lifecycle - from qualitative user research, information architecture, and wireframing to high-fidelity Figma prototyping, design systems, and usability testing. Combines strong visual design sensibility with a technical Computer Science foundation to deliver high-impact user experiences and collaborate seamlessly with cross-functional product and engineering teams.";

const skillGroups = [
  {
    label: "UX & Product Design",
    skills: "User Research, Personas, Journey Mapping, Information Architecture (IA), Wireframing, Low/High-Fidelity Prototyping, Usability Testing, User Flows, Content Hierarchy",
  },
  {
    label: "UI & Visual Design",
    skills: "Figma, Visual Hierarchy, Design Systems, UI Style Guides, Component Libraries, Interactive Dashboards, Data Visualization, Micro-Interactions",
  },
  {
    label: "Standards & Methods",
    skills: "WCAG Accessibility (AA/AAA Standards), Cross-Functional Collaboration, Developer Handoff, Agile/Scrum, Design-to-Code Feasibility (React.js, HTML/CSS, REST APIs)",
  },
];

const experience: { title: string; company: string; date: string; location: string; bullets: ResumeBullet[] }[] = [
  {
    title: "UI/UX Designer & Product Specialist",
    company: "Bootlabs",
    date: "May 2025 - Present",
    location: "India",
    bullets: [
      { lead: "Enterprise Product Design", detail: "Architected end-to-end UX/UI for complex systems, including a Crash Test & AIOps platform, transforming multi-layered telemetry data into clean, intuitive dashboard visualizations." },
      { lead: "User Research & Journey Mapping", detail: "Led end-to-end UX architecture for the HRA Platform and JFS Agentic AI, conducting user research and user mapping that drove measurable increases in user engagement." },
      { lead: "Prototyping & Flow Automation", detail: "Designed frictionless onboarding and SSO authentication flows in Figma, reducing user drop-off and simplifying administrative setup steps." },
      { lead: "Design Systems & Handoff", detail: "Established scalable Figma component libraries and partnered with frontend engineering teams (React.js, Next.js) to ensure pixel-perfect design implementation." },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Ekavarna Technologies",
    date: "June 2023 - May 2025",
    location: "India",
    bullets: [
      { lead: "Multi-Platform Product Development", detail: "Led user experience and developed using Next.js across five major digital platforms (QRated, MSSPL, RucJa, Reson, and EmProject), balancing visual polish with technical requirements." },
      { lead: "User Experience & Workflow Refinement", detail: "Redesigned core user flows and data interaction models, streamlining navigation and reducing user friction across complex web interfaces." },
      { lead: "Enhanced System Security", detail: "Designed seamless JWT and OAuth2 user onboarding experiences, improving authentication completion rates and multi-tenant user access." },
    ],
  },
  {
    title: "UI/UX Design Trainee",
    company: "Codestore Technologies",
    date: "January 2022 - April 2022",
    location: "India",
    bullets: [
      { lead: "End-to-End Design Lifecycle", detail: "Executed user research, wireframing, and interactive high-fidelity prototyping in Figma for responsive web applications." },
      { lead: "Design Systems & Accessibility", detail: "Built reusable UI component libraries and established style guidelines conforming to WCAG digital accessibility standards." },
      { lead: "Usability Testing & Feedback Loops", detail: "Conducted usability evaluations with key stakeholders, iterating design solutions to align with user goals and brand standards." },
      { lead: "Developer Handoff Documentation", detail: "Prepared comprehensive design specs and visual guidelines to ensure accurate implementation by engineering teams." },
    ],
  },
];

function sectionTitle(title: string) {
  return (
    <h2 className="mb-3 border-l-4 border-[#293f75] bg-[#eef1f7] px-3 py-1.5 font-sans text-sm font-bold uppercase tracking-wider text-[#293f75]">
      {title}
    </h2>
  );
}

export function Resume() {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let cursor = 14;

    pdf.setProperties({ title: "Kanishka Reddy - Resume", author: "Kanishka Reddy" });

    const keepOnPage = (height: number) => {
      if (cursor + height > pageHeight - margin) {
        pdf.addPage();
        cursor = margin;
      }
    };

    const addSectionHeading = (title: string) => {
      keepOnPage(11);
      pdf.setFillColor(238, 241, 247);
      pdf.rect(margin, cursor, contentWidth, 7, "F");
      pdf.setFillColor(41, 63, 117);
      pdf.rect(margin, cursor, 1.5, 7, "F");
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9.5);
      pdf.setTextColor(41, 63, 117);
      pdf.text(title.toUpperCase(), margin + 4, cursor + 4.8);
      cursor += 10;
    };

    const addParagraph = (text: string, size = 8.5, indent = 0) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(43, 52, 67);
      const lines = pdf.splitTextToSize(text, contentWidth - indent);
      const lineHeight = size * 0.45;
      keepOnPage(lines.length * lineHeight + 1);
      pdf.text(lines, margin + indent, cursor);
      cursor += lines.length * lineHeight + 1;
    };

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(21);
    pdf.setTextColor(24, 37, 61);
    pdf.text("KANISHKA REDDY", margin, cursor + 7);
    cursor += 12;
    pdf.setFontSize(11);
    pdf.setTextColor(41, 63, 117);
    pdf.text("UI/UX & PRODUCT DESIGNER", margin, cursor);
    cursor += 5;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.5);
    pdf.setTextColor(91, 103, 120);
    pdf.text("India (Open to Remote / Relocation) | +91 7091413444", margin, cursor);
    cursor += 4;
    pdf.text("krishnakanishkareddyalla@gmail.com | kanishkareddy.space", margin, cursor);
    cursor += 4;
    pdf.setDrawColor(41, 63, 117);
    pdf.setLineWidth(0.7);
    pdf.line(margin, cursor, pageWidth - margin, cursor);
    cursor += 5;

    addSectionHeading("Professional Summary");
    addParagraph(summary);

    addSectionHeading("Core Competencies & Skills");
    skillGroups.forEach((group) => {
      const labelWidth = 37;
      pdf.setFontSize(8.25);
      const lines = pdf.splitTextToSize(group.skills, contentWidth - labelWidth);
      const lineHeight = 8.25 * 0.45;
      keepOnPage(lines.length * lineHeight + 2);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(24, 37, 61);
      pdf.text(group.label + ":", margin, cursor);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(43, 52, 67);
      pdf.text(lines, margin + labelWidth, cursor);
      cursor += lines.length * lineHeight + 2;
    });

    addSectionHeading("Professional Experience");
    experience.forEach((job) => {
      keepOnPage(9);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.7);
      pdf.setTextColor(24, 37, 61);
      pdf.text(`${job.title} | ${job.company}`, margin, cursor);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(91, 103, 120);
      pdf.text(`${job.date} | ${job.location}`, pageWidth - margin, cursor, { align: "right" });
      cursor += 4.5;
      job.bullets.forEach((bullet) => addParagraph(`- ${bullet.lead}: ${bullet.detail}`, 8.1, 1));
      cursor += 1;
    });

    addSectionHeading("Education");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(24, 37, 61);
    pdf.text("Bachelor of Technology (B.Tech) in Computer Science Engineering", margin, cursor);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8.5);
    pdf.setTextColor(91, 103, 120);
    pdf.text("Graduated: 2022 | Dehradun, India", pageWidth - margin, cursor + 4.5, { align: "right" });
    cursor += 5;
    addParagraph("ICFAI Tech School, Dehradun - ICFAI University | CGPA: 7.86/10", 8.5);

    pdf.save("Kanishka_Reddy_Resume.pdf");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f3f4f6] px-4 pb-16 pt-20 text-slate-900 sm:px-6">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="fixed inset-x-0 top-20 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[210mm] justify-end px-4 py-3 sm:px-6">
            <button onClick={handleDownloadPDF} className="inline-flex min-h-10 items-center gap-2 bg-[#293f75] px-4 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#1d2f5b]">
              <Download size={16} /> Download PDF
            </button>
          </div>
        </motion.div>

        <motion.article
          id="resume-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-4 min-h-[297mm] w-full max-w-[210mm] bg-white px-6 py-8 shadow-sm sm:px-10 md:px-12 md:py-12"
        >
          <header className="mb-5 border-b-2 border-[#293f75] pb-4 font-sans">
            <h1 className="text-3xl font-bold uppercase tracking-wide text-[#18253d]">Kanishka Reddy</h1>
            <p className="mt-1 text-base font-bold uppercase tracking-wide text-[#293f75]">UI/UX & Product Designer</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              India (Open to Remote / Relocation) <span className="px-1">|</span> +91 7091413444 <span className="px-1">|</span>
              <a className="hover:text-[#293f75]" href="mailto:krishnakanishkareddyalla@gmail.com">krishnakanishkareddyalla@gmail.com</a>
              <span className="px-1">|</span> kanishkareddy.space
            </p>
          </header>

          <section className="mb-5 font-sans">
            {sectionTitle("Professional Summary")}
            <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
          </section>

          <section className="mb-5 font-sans">
            {sectionTitle("Core Competencies & Skills")}
            <dl className="space-y-2 text-sm leading-relaxed">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-1 sm:grid-cols-[190px_1fr] sm:gap-3">
                  <dt className="font-bold text-slate-900">{group.label}:</dt>
                  <dd className="text-slate-700">{group.skills}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mb-5 font-sans">
            {sectionTitle("Professional Experience")}
            <div className="space-y-4">
              {experience.map((job) => (
                <article key={job.company}>
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{job.title} <span className="text-[#293f75]">| {job.company}</span></h3>
                    <p className="shrink-0 text-xs text-slate-500">{job.date} <span className="px-1">|</span> {job.location}</p>
                  </div>
                  <ul className="space-y-1 pl-3 text-sm leading-relaxed text-slate-700">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.lead} className="list-disc pl-0.5">
                        <strong className="text-slate-900">{bullet.lead}:</strong> {bullet.detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="font-sans">
            {sectionTitle("Education")}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-sm font-bold text-slate-900">Bachelor of Technology (B.Tech) in Computer Science Engineering</h3>
              <p className="shrink-0 text-xs text-slate-500">Graduated: 2022 <span className="px-1">|</span> Dehradun, India</p>
            </div>
            <p className="mt-1 text-sm text-slate-700">ICFAI Tech School, Dehradun - ICFAI University <span className="px-1">|</span> <strong>CGPA: 7.86/10</strong></p>
          </section>
        </motion.article>
      </div>
    </PageTransition>
  );
}
