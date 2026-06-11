import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

const contactLinks = [
  { label: "Email", value: "krishnakanishkareddyalla@gmail.com", href: "mailto:krishnakanishkareddyalla@gmail.com" },
  { label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/kanishka-reddy-097a34210/" },
  { label: "Resume", value: "Download PDF", href: "/resume" },
];

export function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Massive Typography Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 md:mb-48"
        >
          <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-serif uppercase tracking-tight">
            Let's <br />
            <span className="italic text-muted-foreground/80">Connect</span>
          </h1>
        </motion.div>

        {/* Split Layout Section */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 border-t border-border pt-16">
          
          {/* Left Column: Context */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full md:w-1/3 md:sticky md:top-32 h-fit"
          >
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">The Inbox</h2>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/90">
              Whether it's a new project, a conversation, or simply sharing ideas—I'm always open to discussing design, code, and everything in between.
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
              Based in Global <br /> Working Worldwide
            </p>
          </motion.div>

          {/* Right Column: Links */}
          <div className="w-full md:w-2/3 flex flex-col">
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Resume" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 md:py-16 border-b border-border/50 hover:border-foreground transition-colors gap-4 sm:gap-0"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    {link.label}
                  </span>
                  <span className="text-4xl md:text-6xl font-serif group-hover:italic transition-all duration-500">
                    {link.value}
                  </span>
                </div>
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-transparent group-hover:border-border group-hover:bg-secondary transition-all duration-500 overflow-hidden">
                  <MoveUpRight className="w-6 h-6 transform translate-y-8 -translate-x-8 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </PageTransition>
  );
}