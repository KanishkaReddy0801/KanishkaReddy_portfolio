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
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 0,
        ignoreElements: (element: Element) => {
          return element.classList && (
            element.classList.contains("navigation") ||
            element.classList.contains("navbar")
          );
        },
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      let heightLeft = imgHeight - 297;
      let position = 0;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      pdf.save("Kanishka_Reddy_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error downloading PDF. Please try again.");
    }
  };

  return (
    <PageTransition>
      <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#000000", paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
        >
          <button
            onClick={handleDownloadPDF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.25rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#f3f4f6";
              (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#ffffff";
              (e.target as HTMLButtonElement).style.borderColor = "#d1d5db";
            }}
          >
            <Download size={18} />
            Download PDF
          </button>
        </motion.div>

        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "0.25rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            id="resume-content"
          >
            {/* Header */}
            <div style={{ backgroundColor: "#ffffff", paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "3rem", paddingBottom: "2rem", color: "#000000" }}>
              <p style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "2px", color: "#4b5563", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Creative technologist bridging design and development
              </p>
              <h1 style={{ fontSize: "3.75rem", fontWeight: 300, marginBottom: "0", color: "#000000", fontFamily: "'Manrope', sans-serif" }}>Kanishka</h1>
              <h1 style={{ fontSize: "3.75rem", fontWeight: 700, marginBottom: "1rem", color: "#000000", fontFamily: "'Manrope', sans-serif" }}>Reddy</h1>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#4b5563" }}>
                <p style={{ margin: "0.2rem 0" }}>krishnakanishkareddyalla@gmail.com</p>
                <p style={{ margin: "0.2rem 0" }}>linkedin.com/in/kanishka-reddy-097a34210</p>
              </div>
            </div>

            {/* Main Content */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
              {/* Left Column */}
              <div style={{ gridColumn: "span 2", paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "2rem", paddingBottom: "2rem", borderRight: "1px solid #e5e7eb" }}>
                
                {/* Bootlabs */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#000000", fontFamily: "'Manrope', sans-serif" }}>Bootlabs</h2>
                    <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#6b7280" }}>May 2025 – Present</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "0.5rem" }}>UI/UX Designer</p>
                  <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "#4b5563", marginBottom: "1.5rem", fontWeight: 300 }}>
                    "Brought in to solve real problems for real clients. Designing systems that work as beautifully as they look."
                  </p>
                  
                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.75rem" }}>Projects & Platforms</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Mahindra Crash Test Platform</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Vanguard AIOps</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• HRA Platform</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• JFS Agentic AI</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Cloud & Inventory Systems</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Enterprise Operations</div>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.75rem" }}>Contributions</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• UI/UX Design for complex systems</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Development support (SSO, workflows)</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Website maintenance & SEO</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Analytics integration</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Brand assets (email signatures, backgrounds)</li>
                    </ul>
                  </div>
                </div>

                {/* Ekavarna */}
                <div style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderTop: "1px solid #e5e7eb", paddingTop: "2.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#000000", fontFamily: "'Manrope', sans-serif" }}>Ekavarna Technologies</h2>
                    <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#6b7280" }}>Jun 2023 – Jun 2024</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "0.5rem" }}>Junior Developer</p>
                  <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "#4b5563", marginBottom: "1.5rem", fontWeight: 300 }}>
                    "The bridge between my two worlds. Learned that great code and great design speak the same language."
                  </p>

                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.75rem" }}>Projects</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• QRated Resources</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• MSSPL</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• RucJa</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Reson</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• EmProject</div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• Ekavarna Code</div>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: "0.75rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6b7280", marginBottom: "0.75rem" }}>Work Included</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Full-stack development</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• API integration</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Performance optimization</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.5rem" }}>• Authentication systems</li>
                      <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>• AWS & S3 integrations</li>
                    </ul>
                  </div>
                </div>

                {/* Codestore */}
                <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "4rem" }}>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#000000", fontFamily: "'Manrope', sans-serif" }}>Codestore Technologies</h2>
                  </div>
                  <p style={{ fontSize: "0.875rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "0.5rem" }}>Design Trainee</p>
                  <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "#4b5563", fontWeight: 300 }}>
                    "Where it all started. Learning that design is about listening first, and creating with intention."
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div style={{ gridColumn: "span 1", paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "2rem", paddingBottom: "2rem", backgroundColor: "#f9fafb" }}>
                
                {/* Development Skills */}
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #d1d5db" }}>Development</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>JavaScript (ES6+)</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>React.js</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Next.js</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Node.js</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>MongoDB</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>REST APIs</li>
                  </ul>
                </div>

                {/* Design Skills */}
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #d1d5db" }}>Design</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Figma</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>UI/UX Design</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Wireframing</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Prototyping</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Visual Design</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>Interaction Design</li>
                  </ul>
                </div>

                {/* Thinking Skills */}
                <div>
                  <h3 style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4b5563", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "2px solid #d1d5db" }}>Thinking</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>User-Centered Design</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Problem Solving</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Iteration</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937", marginBottom: "0.625rem" }}>Attention to Detail</li>
                    <li style={{ fontSize: "0.875rem", fontWeight: 300, color: "#1f2937" }}>Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "1.5rem", paddingBottom: "1.5rem", backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 300, color: "#4b5563", lineHeight: "1.625" }}>
                Designer and developer who sees the complete picture. I build products that solve problems gracefully, 
                creating experiences that feel intuitive and look considered. Every interface is a conversation between 
                aesthetics and function—and I believe they should both win.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
