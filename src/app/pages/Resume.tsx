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
      <div className="min-h-screen bg-white text-black py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6 sm:mb-8 md:mb-10"
        >
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded text-black bg-white hover:bg-gray-100 hover:border-gray-400 transition-colors uppercase text-xs sm:text-sm tracking-wider"
          >
            <Download size={18} />
            Download PDF
          </button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={resumeRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black rounded shadow-lg overflow-hidden"
            id="resume-content"
          >
            {/* Header */}
            <div className="bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 text-black">
              <p className="text-xs font-mono tracking-widest text-gray-600 uppercase mb-2 sm:mb-3">
                Creative technologist bridging design and development
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-0 text-black" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Kanishka
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 text-black" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Reddy
              </h1>
              <div className="text-xs sm:text-sm font-mono text-gray-600 space-y-1">
                <p>Portfolio: <a
                  href="https://www.kanishkareddy.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline hover:text-gray-800"
                >
                  kanishkareddy.space
                </a></p>
                <p>Email: krishnakanishkareddyalla@gmail.com</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Left Column */}
              <div className="md:col-span-2 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:border-r border-gray-200">
                
                {/* Bootlabs */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                    <h2 className="text-xl sm:text-2xl font-light text-black" style={{ fontFamily: "'Manrope', sans-serif" }}>Bootlabs</h2>
                    <span className="text-xs font-mono text-gray-600 flex-shrink-0">May 2025 – Present</span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-gray-600 mb-2">UI/UX Designer</p>
                  <p className="text-xs sm:text-sm italic text-gray-600 mb-3 font-light">
                    "Brought in to solve real problems for real clients. Designing systems that work as beautifully as they look."
                  </p>
                  
                  <div className="mb-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-600 mb-2">Projects & Platforms</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Mahindra Crash Test Platform</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Vanguard AIOps</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• HRA Platform</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• JFS Agentic AI</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Cloud & Inventory Systems</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Enterprise Operations</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-600 mb-2">Contributions</p>
                    <ul className="space-y-1">
                      <li className="text-xs sm:text-sm font-light text-gray-800">• UI/UX Design for complex systems</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Development support (SSO, workflows)</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Website maintenance & SEO</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Analytics integration</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Brand assets (email signatures, backgrounds)</li>
                    </ul>
                  </div>
                </div>

                {/* Ekavarna */}
                <div className="mb-6 sm:mb-8 md:mb-10 pb-6 sm:pb-8 md:pb-10 border-t border-gray-200 pt-6 sm:pt-8 md:pt-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                    <h2 className="text-xl sm:text-2xl font-light text-black" style={{ fontFamily: "'Manrope', sans-serif" }}>Ekavarna Technologies</h2>
                    <span className="text-xs font-mono text-gray-600 flex-shrink-0">Jun 2023 – Jun 2024</span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-gray-600 mb-2">Junior Developer</p>
                  <p className="text-xs sm:text-sm italic text-gray-600 mb-3 font-light">
                    "The bridge between my two worlds. Learned that great code and great design speak the same language."
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-600 mb-2">Projects</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="text-xs sm:text-sm font-light text-gray-800">• QRated Resources</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• MSSPL</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• RucJa</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Reson</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• EmProject</div>
                      <div className="text-xs sm:text-sm font-light text-gray-800">• Ekavarna Code</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-600 mb-2">Work Included</p>
                    <ul className="space-y-1">
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Full-stack development</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• API integration</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Performance optimization</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• Authentication systems</li>
                      <li className="text-xs sm:text-sm font-light text-gray-800">• AWS & S3 integrations</li>
                    </ul>
                  </div>
                </div>

                {/* Codestore */}
                <div className="border-t border-gray-200 pt-6 sm:pt-8 md:pt-10">
                  <div className="mb-2">
                    <h2 className="text-xl sm:text-2xl font-light text-black" style={{ fontFamily: "'Manrope', sans-serif" }}>Codestore Technologies</h2>
                  </div>
                  <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-gray-600 mb-2">Design Trainee</p>
                  <p className="text-xs sm:text-sm italic text-gray-600 font-light">
                    "Where it all started. Learning that design is about listening first, and creating with intention."
                  </p>
                </div>
              </div>

              {/* Right Column - Skills */}
              <div className="col-span-1 px-4 sm:px-6 md:px-6 py-6 sm:py-8 md:py-6 bg-gray-50 md:border-l border-gray-200">
                
                {/* Development Skills */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono tracking-wider uppercase text-gray-600 mb-3 pb-2 border-b-2 border-gray-300">Development</h3>
                  <ul className="space-y-1">
                    <li className="text-xs sm:text-sm font-light text-gray-800">JavaScript (ES6+)</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">React.js</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Next.js</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Node.js</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">MongoDB</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">REST APIs</li>
                  </ul>
                </div>

                {/* Design Skills */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono tracking-wider uppercase text-gray-600 mb-3 pb-2 border-b-2 border-gray-300">Design</h3>
                  <ul className="space-y-1">
                    <li className="text-xs sm:text-sm font-light text-gray-800">Figma</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">UI/UX Design</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Wireframing</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Prototyping</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Visual Design</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Interaction Design</li>
                  </ul>
                </div>

                {/* Thinking Skills */}
                <div>
                  <h3 className="text-xs font-mono tracking-wider uppercase text-gray-600 mb-3 pb-2 border-b-2 border-gray-300">Thinking</h3>
                  <ul className="space-y-1">
                    <li className="text-xs sm:text-sm font-light text-gray-800">User-Centered Design</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Problem Solving</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Iteration</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Attention to Detail</li>
                    <li className="text-xs sm:text-sm font-light text-gray-800">Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gray-50 border-t border-gray-200">
              <p className="text-xs sm:text-sm font-light text-gray-600 leading-relaxed">
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
