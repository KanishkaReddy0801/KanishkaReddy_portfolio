import { motion, useScroll, useTransform } from "motion/react";
import { PageTransition } from "../components/PageTransition";
import { MoveUpRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useRef } from "react";
import logoImage from 'figma:asset/4079d0d9aac833c3c23890d08b2afffd5d27a9a6.png';
import myPortrait from '../../assets/IMG_5096.jpg';

import BootlabsImg from "../../assets/Logo Black 01.png";
import EkavarnaImg from "../../assets/ekavarna.svg";

const IMG_MOCKUP = "../../assets/Logo Black 01.png";
const IMG_CODE = "https://images.unsplash.com/photo-1598978028953-799807c097b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBzZXR1cCUyMGNvZGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDQzNzg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageTransition>
      <div ref={containerRef} className="relative w-full bg-background min-h-screen text-foreground">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 md:px-12 overflow-hidden">
          {/* Logo overlay element for design */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] pointer-events-none"
          >
             <img src={logoImage} alt="" className="w-full h-auto object-contain dark:invert" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-[15%] right-[5%] md:right-[15%] w-[65vw] md:w-[35vw] max-w-lg aspect-[3/4] z-0 pointer-events-none"
            style={{ y: yParallax }}
          >
            <ImageWithFallback 
              src={myPortrait} 
              alt="Portrait of Kanishka Reddy" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
          </motion.div>

          <div className="relative z-10 w-full mt-32 md:mt-0 max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter uppercase font-serif text-foreground break-words relative z-10"
            >
              Kanishka <br className="hidden md:block"/> Reddy
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-border pt-8 gap-8"
            >
              <p className="max-w-md text-foreground font-medium text-lg uppercase tracking-widest font-sans">
                UI/UX Designer <br className="hidden md:block"/> & Full Stack Developer
              </p>
              <div className="md:text-right max-w-sm">
                <p className="text-base text-muted-foreground leading-relaxed font-sans font-light">
                  A painter of pixels,<br/> a sculptor of syntax,<br/> a dreamer in code and color alike.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* POETIC INTRODUCTION */}
        <section className="py-32 md:py-48 px-6 md:px-12 flex flex-col items-center border-t border-border relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-serif leading-tight text-foreground/90 mb-20">
              Experiences that whisper, <br/>
              <span className="text-muted-foreground italic font-light">"stay a little longer."</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
              <div className="space-y-8">
                <p>
                  I read like the world is a letter from the stars,<br/>
                  I write like my words are brushstrokes on the soul.<br/>
                  I sketch what I cannot say,<br/>
                  I design what I cannot find,<br/>
                  I imagine things not yet born.
                </p>
                <p>
                  From the quiet banks of Vijayawada,<br/>
                  to the digital canvas where logic meets light—<br/>
                  I build stories that work, breathe, and sometimes smile.
                </p>
              </div>
              <div className="space-y-8">
                <p>
                  As a full-stack developer who speaks React<br/>
                  and dreams in Figma,<br/>
                  my work bridges intuition with structure—<br/>
                  crafting interfaces that feel like invitations.
                </p>
                <p>
                  If it's beautifully built,<br/>
                  if it makes someone's day softer, smarter,<br/>
                  or simply noticed—<br/>
                  then it carries my signature.
                </p>
                <p className="pt-8 border-t border-border/50 text-foreground">
                  <strong>Welcome to my world.</strong><br/>
                  Take your shoes off.<br/>
                  There's art in the corners.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="px-6 md:px-12 py-32 border-t border-border bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4">The tools that shape my quiet craft</h2>
              <h3 className="text-5xl md:text-7xl font-serif mb-20">Skills & Mastery</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Development */}
              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-2xl font-serif mb-8 border-b border-border/50 pb-4">Development</h4>
                <ul className="space-y-4 mb-8 font-sans text-muted-foreground font-light">
                  {["JavaScript (ES6+)", "React.js", "Next.js", "Node.js", "MongoDB", "REST APIs"].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="italic text-foreground/70 font-serif text-xl">
                  I translate thought into structure, and structure into experience.
                </p>
              </motion.div>

              {/* Design */}
              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-2xl font-serif mb-8 border-b border-border/50 pb-4">Design</h4>
                <ul className="space-y-4 mb-8 font-sans text-muted-foreground font-light">
                  {["Figma", "UI/UX Design", "Wireframing & Prototyping", "Visual Design", "Interaction Design"].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="italic text-foreground/70 font-serif text-xl">
                  I design interfaces that don't demand attention, but gently hold it.
                </p>
              </motion.div>

              {/* Thinking */}
              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-2xl font-serif mb-8 border-b border-border/50 pb-4">Thinking</h4>
                <ul className="space-y-4 mb-8 font-sans text-muted-foreground font-light">
                  {["User-Centered Design", "Problem Solving", "Iteration", "Attention to Detail", "Collaboration"].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <p className="italic text-foreground/70 font-serif text-xl">
                  Good design is not just seen—it is felt.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className="px-6 md:px-12 py-32 border-t border-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="sticky top-32"
               >
                  <h2 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4">Professional Journey</h2>
                  <h3 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Where I've built</h3>
                  <p className="text-xl text-muted-foreground font-light font-sans mb-12">
                    My journey began quietly—with curiosity leaning toward creation.
                  </p>

                  <div className="p-8 bg-secondary/30 border border-border/50 rounded-sm">
                    <p className="font-serif italic text-xl mb-4 text-foreground/80">
                      Across these spaces, I learned:
                    </p>
                    <ul className="space-y-3 font-sans text-sm text-muted-foreground font-light">
                      <li>— Observe before building</li>
                      <li>— Refine before finishing</li>
                      <li>— Leave every interface better than you found it</li>
                    </ul>
                  </div>
               </motion.div>
            </div>

            <div className="md:w-2/3 space-y-32">
              {/* Bootlabs */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-foreground mb-8 pb-4">
                  <div>
                    <h4 className="text-4xl md:text-5xl font-serif group-hover:text-accent transition-colors">Bootlabs</h4>
                    <p className="text-xl text-foreground/80 mt-2 font-light">UI/UX Designer</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground mt-4 md:mt-0 uppercase tracking-widest">May 2025 – Present</span>
                </div>
                
                <p className="text-2xl font-serif italic text-muted-foreground mb-10 leading-relaxed">
                  "I joined through my work—where design spoke before I did."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans font-light">
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-foreground font-medium mb-4">Work Includes</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>Mahindra Crash Test Platform</li>
                      <li>Vanguard AIOps</li>
                      <li>HRA Platform</li>
                      <li>JFS Agentic AI</li>
                      <li>Cloud & Inventory Systems</li>
                      <li>Enterprise Operations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-foreground font-medium mb-4">Contributions</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>UI/UX Design for complex systems</li>
                      <li>Development support (SSO, workflows)</li>
                      <li>Website maintenance & SEO</li>
                      <li>Analytics integration</li>
                      <li>Brand assets (email sigs, backgrounds)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-16 w-full aspect-[21/9] overflow-hidden">
                  <motion.div style={{ y: yParallaxSlow }} className="w-full h-[50%] -mt-[-2%]">
                    <ImageWithFallback src={BootlabsImg} alt="Bootlabs Project Mockup" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Ekavarna Technologies */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-foreground mb-8 pb-4">
                  <div>
                    <h4 className="text-4xl md:text-5xl font-serif group-hover:text-accent transition-colors">Ekavarna Technologies</h4>
                    <p className="text-xl text-foreground/80 mt-2 font-light">Junior Developer</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground mt-4 md:mt-0 uppercase tracking-widest">Jun 2023 – Jun 2024</span>
                </div>
                
                <p className="text-2xl font-serif italic text-muted-foreground mb-10 leading-relaxed">
                  "I moved from sketches into systems—learning how structure supports beauty."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans font-light">
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-foreground font-medium mb-4">Projects</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>QRated Resources</li>
                      <li>MSSPL</li>
                      <li>RucJa</li>
                      <li>Reson</li>
                      <li>EmProject</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-foreground font-medium mb-4">Work Included</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>Full-stack development</li>
                      <li>API integration</li>
                      <li>Performance optimization</li>
                      <li>Authentication systems</li>
                      <li>AWS & S3 integrations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-16 w-full aspect-[21/9] overflow-hidden">
                  <motion.div style={{ y: yParallaxSlow }} className="w-full h-[100%] -mt-[8%]">
                    <ImageWithFallback src={EkavarnaImg} alt="Ekavarna Code" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Codestore Technologies */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-foreground mb-8 pb-4">
                  <div>
                    <h4 className="text-4xl md:text-5xl font-serif group-hover:text-accent transition-colors">Codestore Technologies</h4>
                    <p className="text-xl text-foreground/80 mt-2 font-light">Design Trainee</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground mt-4 md:mt-0 uppercase tracking-widest">Early Career</span>
                </div>
                
                <p className="text-2xl font-serif italic text-muted-foreground mb-10 leading-relaxed">
                  "I learned to listen before designing—understanding how colors and layouts find balance."
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-24 md:mb-32 max-w-3xl"
            >
              <h2 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-6">The Process</h2>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 leading-tight">
                How it comes <br/> <span className="italic font-light text-muted-foreground">together</span>
              </h3>
              <p className="text-xl text-muted-foreground font-light font-sans leading-relaxed">
                For me, process is not a rigid sequence—it is a conversation. A rhythm that changes with every challenge, adapts to every need, and always leaves room for wonder.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-24 md:gap-y-32">
              {[
                { num: "01", title: "Understanding", desc: "Every project begins with listening. Uncovering the quiet needs beneath the obvious requests." },
                { num: "02", title: "Defining", desc: "Breaking complexity into clarity. Structuring ideas so they hold weight and purpose." },
                { num: "03", title: "Exploring", desc: "Rough ideas, wireframes, early thoughts. Finding the boundaries before pushing them." },
                { num: "04", title: "Designing", desc: "Where intention meets expression. Balancing aesthetics with accessibility." },
                { num: "05", title: "Building", desc: "Turning ideas into real, usable systems. Writing code that is as clean as the design." },
                { num: "06", title: "Refining", desc: "Improving the small things that matter most. The invisible details that make a product feel right." }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="text-sm font-mono text-muted-foreground mb-6 border-b border-border pb-4 w-full">
                    {step.num} —
                  </div>
                  <h4 className="text-3xl font-serif mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-lg text-foreground/70 font-sans font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTRO / CTA */}
        <section className="px-6 md:px-12 py-32 md:py-48 border-t border-border flex flex-col items-center text-center bg-foreground text-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <img src={logoImage} alt="Logo" className="w-16 h-16 mx-auto mb-12 object-contain invert dark:invert-0 opacity-80" />
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-12 leading-tight">
              Ready to create something beautiful?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-4 text-background hover:text-accent transition-colors uppercase text-sm tracking-widest font-sans group border-b border-background/30 hover:border-accent pb-2">
              Start a Conversation <MoveUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}