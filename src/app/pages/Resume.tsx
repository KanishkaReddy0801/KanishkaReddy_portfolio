import { useRef } from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { PageTransition } from "../components/PageTransition";

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      const element = resumeRef.current;
      
      // Create a clone to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Strip all classes to avoid oklch colors
      const removeAllClasses = (el: Element) => {
        el.classList.forEach(cls => el.classList.remove(cls));
        Array.from(el.children).forEach(child => removeAllClasses(child));
      };
      removeAllClasses(clone);
      
      document.body.appendChild(clone);
      
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 0,
        windowWidth: 210 * 3.78, // 210mm to pixels
        windowHeight: 297 * 3.78, // 297mm to pixels
      });
      
      document.body.removeChild(clone);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Kanishka_Reddy_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error downloading PDF. Please try again.");
    }
  };

  return (
    <PageTransition>
      <div style={{ width: "100%", backgroundColor: "#fff", color: "#000", margin: 0, padding: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            padding: "1rem", 
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
            zIndex: 10,
            borderBottom: "1px solid #e5e7eb"
          }}
        >
          <button
            onClick={handleDownloadPDF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.5rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              color: "#000",
              backgroundColor: "#fff",
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              fontWeight: "500",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f3f4f6";
              e.currentTarget.style.borderColor = "#9ca3af";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.borderColor = "#d1d5db";
            }}
          >
            <Download size={18} />
            Download PDF
          </button>
        </motion.div>

        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            height: "297mm", 
            width: "210mm", 
            margin: "0 auto", 
            padding: 0,
            backgroundColor: "#fff",
            color: "#000",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem"
          }}
          id="resume-content"
        >
          {/* Header - Compact */}
          <div style={{ padding: "1rem 1rem", backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb", flexShrink: 0, margin: 0 }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#000", lineHeight: "1.5", margin: "0 0 0.5rem 0" }}>Kanishka Reddy</h1>
            <p style={{ fontSize: "0.875rem", fontFamily: "monospace", color: "#4b5563", lineHeight: "1.2", margin: "0 0 0.4rem 0" }}>UI/UX Designer & Full-Stack Developer</p>
            <div style={{ fontSize: "0.875rem", fontFamily: "monospace", color: "#4b5563", lineHeight: "1.2", margin: 0 }}>
              <p style={{ margin: 0 }}>Portfolio: kanishkareddy.space | Email: krishnakanishkareddyalla@gmail.com</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ padding: "1rem 1rem", backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb", flexShrink: 0, margin: 0 }}>
            <h2 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.8rem 0" }}>Professional Summary</h2>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.5", color: "#1f2937", margin: 0 }}>
              Creative technologist with 2+ years of experience bridging design and development across complex systems. Specialized in UI/UX design, full-stack development, and system architecture with proven track record of delivering scalable solutions. Passionate about solving real problems through user-centered design and technical excellence.
            </p>
          </div>

          {/* Main Content - Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 0, flex: 1, overflow: "hidden", margin: 0 }}>
            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", padding: "1rem", borderRight: "1px solid #e5e7eb", overflow: "auto", margin: 0, gap: "1.2rem" }}>
              
              {/* Education */}
              <div style={{ margin: 0 }}>
                <h2 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.6rem 0" }}>Education</h2>
                <div style={{ fontSize: "0.875rem", lineHeight: "1.5", margin: 0 }}>
                  <p style={{ fontWeight: "600", margin: "0 0 0.05rem 0" }}>Bachelor in Computer Science Engineering</p>
                  <p style={{ color: "#374151", margin: 0 }}>ICFAI University, Dehradun | Graduated 2022 | CGPA: 7.86</p>
                </div>
              </div>

              {/* Experience */}
              <div style={{ margin: 0 }}>
                <h2 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.8rem 0" }}>Professional Experience</h2>
                
                <div style={{ marginBottom: "0.7rem", margin: "0 0 0.7rem 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.25rem", lineHeight: "1.2", margin: "0 0 0.25rem 0" }}>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", margin: 0 }}>UI/UX Designer — Bootlabs</p>
                    <span style={{ fontSize: "0.875rem", color: "#4b5563", flexShrink: 0, margin: 0 }}>May 2025 – Present</span>
                  </div>
                  <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.5", margin: "0.25rem 0 0 0.4rem", paddingLeft: 0 }}>
                    <li style={{ margin: "0.1rem 0" }}>• Designed enterprise-grade systems (Crash Test, AIOps platform) impacting users</li>
                    <li style={{ margin: "0.1rem 0" }}>• Led end-to-end UX for HRA Platform & JFS Agentic AI; improved user engagement</li>
                    <li style={{ margin: "0.1rem 0" }}>• Implemented SSO authentication, workflow automations; reduced onboarding time</li>
                  </ul>
                </div>

                <div style={{ marginBottom: "0.7rem", margin: "0 0 0.7rem 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.25rem", lineHeight: "1.2", margin: "0 0 0.25rem 0" }}>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", margin: 0 }}>Junior Developer — Ekavarna Technologies</p>
                    <span style={{ fontSize: "0.875rem", color: "#4b5563", flexShrink: 0, margin: 0 }}>Jun 2023 – Jun 2024</span>
                  </div>
                  <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.5", margin: "0.25rem 0 0 0.4rem", paddingLeft: 0 }}>
                    <li style={{ margin: "0.1rem 0" }}>• Full-stack development: 5 production platforms (QRated, MSSPL, RucJa, Reson, EmProject)</li>
                    <li style={{ margin: "0.1rem 0" }}>• Optimized API response times by 60%; integrated JWT & OAuth2 authentication systems</li>
                    <li style={{ margin: "0.1rem 0" }}>• Managed AWS S3 infrastructure, automated deployment pipelines, reduced bugs by 45%</li>
                  </ul>
                </div>

                <div style={{ marginBottom: "0.7rem", margin: "0 0 0.7rem 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.25rem", lineHeight: "1.2", margin: "0 0 0.25rem 0" }}>
                    <p style={{ fontWeight: "600", fontSize: "0.875rem", margin: 0 }}>UI/UX Design Trainee — Codestore Technologies</p>
                    <span style={{ fontSize: "0.875rem", color: "#4b5563", flexShrink: 0, margin: 0 }}>Jan 2022 – Apr 2022</span>
                  </div>
                  <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.5", margin: "0.25rem 0 0 0.4rem", paddingLeft: 0 }}>
                    <li style={{ margin: "0.1rem 0" }}>• Mastered UI/UX design fundamentals: user research, wireframing, prototyping in Figma</li>
                    <li style={{ margin: "0.1rem 0" }}>• Designed projects from concept to high-fidelity prototypes; implemented feedback iteration</li>
                    <li style={{ margin: "0.1rem 0" }}>• Collaborated with developers on design handoff; learned design systems & accessibility standards</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column - Skills */}
            <div style={{ display: "flex", flexDirection: "column", padding: "1rem", backgroundColor: "#f9fafb", overflow: "auto", margin: 0, gap: "1.2rem" }}>
              
              {/* Development Skills */}
              <div style={{ margin: 0 }}>
                <h3 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.6rem 0" }}>Development</h3>
                <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.8", margin: 0, paddingLeft: 0 }}>
                  <li style={{ margin: "0.15rem 0" }}>JavaScript (ES6+)</li>
                  <li style={{ margin: "0.15rem 0" }}>React.js</li>
                  <li style={{ margin: "0.15rem 0" }}>Next.js</li>
                  <li style={{ margin: "0.15rem 0" }}>Node.js</li>
                  <li style={{ margin: "0.15rem 0" }}>MongoDB</li>
                  <li style={{ margin: "0.15rem 0" }}>REST APIs</li>
                  <li style={{ margin: "0.15rem 0" }}>AWS & S3</li>
                </ul>
              </div>

              {/* Design Skills */}
              <div style={{ margin: 0 }}>
                <h3 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.6rem 0" }}>Design</h3>
                <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.8", margin: 0, paddingLeft: 0 }}>
                  <li style={{ margin: "0.15rem 0" }}>Figma</li>
                  <li style={{ margin: "0.15rem 0" }}>UI/UX Design</li>
                  <li style={{ margin: "0.15rem 0" }}>Wireframing</li>
                  <li style={{ margin: "0.15rem 0" }}>Prototyping</li>
                  <li style={{ margin: "0.15rem 0" }}>Visual Design</li>
                  <li style={{ margin: "0.15rem 0" }}>Interaction Design</li>
                </ul>
              </div>

              {/* Core Skills */}
              <div style={{ margin: 0 }}>
                <h3 style={{ fontSize: "0.875rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", color: "#000", paddingBottom: "0.5rem", borderBottom: "1px solid #d1d5db", lineHeight: "1.2", margin: "0 0 0.6rem 0" }}>Core Competencies</h3>
                <ul style={{ fontSize: "0.875rem", color: "#1f2937", lineHeight: "1.8", margin: 0, paddingLeft: 0 }}>
                  <li style={{ margin: "0.15rem 0" }}>User-Centered Design</li>
                  <li style={{ margin: "0.15rem 0" }}>Problem Solving</li>
                  <li style={{ margin: "0.15rem 0" }}>Full-Stack Development</li>
                  <li style={{ margin: "0.15rem 0" }}>System Design</li>
                  <li style={{ margin: "0.15rem 0" }}>Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
