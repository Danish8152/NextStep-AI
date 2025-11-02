import React, { useState, useRef, useEffect } from "react";

function ResumeAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const extractTextFromPDF = async (file) => {
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + " ";
    }

    return fullText;
  };

  const analyzeResume = (text) => {
    text = text.toLowerCase();

    const skills = {
      technical: [],
      soft: [],
      domain: [],
    };

    const techKeywords = [
      "python",
      "javascript",
      "java",
      "c++",
      "react",
      "node",
      "sql",
      "aws",
      "docker",
      "kubernetes",
      "machine learning",
      "ai",
      "data science",
      "html",
      "css",
      "git",
      "api",
      "cloud",
      "typescript",
      "angular",
      "vue",
      "mongodb",
      "postgresql",
    ];
    const softKeywords = [
      "leadership",
      "communication",
      "teamwork",
      "problem solving",
      "analytical",
      "creative",
      "management",
      "collaboration",
      "critical thinking",
      "adaptability",
    ];
    const domainKeywords = [
      "finance",
      "healthcare",
      "education",
      "marketing",
      "sales",
      "design",
      "research",
      "engineering",
      "consulting",
      "operations",
    ];

    techKeywords.forEach((kw) => {
      if (text.includes(kw)) skills.technical.push(kw);
    });

    softKeywords.forEach((kw) => {
      if (text.includes(kw)) skills.soft.push(kw);
    });

    domainKeywords.forEach((kw) => {
      if (text.includes(kw)) skills.domain.push(kw);
    });

    const careerPaths = generateCareerPaths(skills, text);

    return { skills, careerPaths };
  };

  const generateCareerPaths = (skills) => {
    const paths = [];

    const hasLeadership =
      skills.soft.includes("leadership") || skills.soft.includes("management");
    const hasData = skills.technical.some((s) =>
      ["python", "sql", "machine learning", "data science"].includes(s)
    );
    const hasWeb = skills.technical.some((s) =>
      [
        "javascript",
        "react",
        "html",
        "css",
        "node",
        "typescript",
        "angular",
        "vue",
      ].includes(s)
    );
    const hasCloud = skills.technical.some((s) =>
      ["aws", "docker", "kubernetes", "cloud"].includes(s)
    );
    const hasDesign = skills.domain.includes("design");

    if (hasData) {
      paths.push({
        title: "Data Science & AI Specialist",
        match: 95,
        description:
          "Your strong technical background in data analysis and machine learning positions you perfectly for advanced roles in AI and data science.",
        nextSteps:
          "Consider pursuing certifications in TensorFlow, deep learning, or cloud-based ML platforms. Build a portfolio of data projects on GitHub.",
        salary: "$110K - $180K",
        growth: "High demand (35% growth projected)",
      });
    }

    if (hasWeb) {
      paths.push({
        title: "Full Stack Developer / Tech Lead",
        match: 90,
        description:
          "Your web development skills and experience make you an excellent candidate for senior development or technical leadership roles.",
        nextSteps:
          "Focus on system design, scalability, and team mentorship. Consider learning microservices architecture and DevOps practices.",
        salary: "$95K - $160K",
        growth: "Steady demand (22% growth projected)",
      });
    }

    if (hasCloud) {
      paths.push({
        title: "Cloud Solutions Architect",
        match: 88,
        description:
          "Your cloud infrastructure knowledge is highly valuable. Cloud architects are in extreme demand across all industries.",
        nextSteps:
          "Get AWS/Azure/GCP professional certifications. Build experience with infrastructure as code and multi-cloud strategies.",
        salary: "$120K - $190K",
        growth: "Very high demand (30% growth projected)",
      });
    }

    if (skills.technical.length > 0 && hasLeadership) {
      paths.push({
        title: "Engineering Manager / CTO Track",
        match: 85,
        description:
          "Your combination of technical expertise and leadership skills positions you well for management and executive roles.",
        nextSteps:
          "Develop business acumen, strategic thinking, and people management skills. Consider an MBA or executive leadership courses.",
        salary: "$130K - $250K+",
        growth: "Competitive (15% growth projected)",
      });
    }

    if (hasDesign) {
      paths.push({
        title: "UX/UI Designer → Product Designer",
        match: 82,
        description:
          "Your design background can evolve into strategic product design roles that shape entire user experiences.",
        nextSteps:
          "Build a strong portfolio, learn user research methodologies, and understand business metrics and product strategy.",
        salary: "$85K - $145K",
        growth: "Growing demand (18% growth projected)",
      });
    }

    if (paths.length === 0) {
      paths.push({
        title: "Project Manager / Product Owner",
        match: 75,
        description:
          "Your diverse skill set makes you a great candidate for coordinating teams and driving product success.",
        nextSteps:
          "Consider PMP or Scrum Master certifications. Focus on stakeholder management and agile methodologies.",
        salary: "$80K - $135K",
        growth: "Stable demand (12% growth projected)",
      });

      paths.push({
        title: "Business Analyst / Consultant",
        match: 72,
        description:
          "Leverage your analytical abilities to bridge business needs with technical solutions.",
        nextSteps:
          "Develop industry expertise, improve data analysis skills, and build consulting experience.",
        salary: "$75K - $130K",
        growth: "Moderate growth (15% growth projected)",
      });
    }

    return paths.sort((a, b) => b.match - a.match);
  };

  const handleFile = async (file) => {
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    setIsLoading(true);
    setAnalysis(null);

    try {
      const text = await extractTextFromPDF(file);
      const result = analyzeResume(text);
      setAnalysis(result);
    } catch (error) {
      alert("Error processing PDF. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const resetUpload = () => {
    setAnalysis(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f2ff, #f8f9ff)",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, #7c3aed, #5b21b6)",
            color: "white",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "10px" }}>
            📊 NextStep AI Career Analyzer
          </h1>
          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Upload your resume and discover your perfect career trajectory
          </p>
        </div>

        <div style={{ padding: "40px" }}>
          {/* Upload Section */}
          {!isLoading && !analysis && (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const file = e.dataTransfer.files[0];
                handleFile(file);
              }}
              style={{
                border: "4px dashed #7c3aed",
                borderRadius: "20px",
                padding: "100px 20px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragOver ? "#faf5ff" : "white",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "60px", marginBottom: "20px" }}>📄</div>
              <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#333" }}>
                Drop your resume here or click to browse
              </h2>
              <p style={{ color: "#666", marginTop: "10px" }}>Supports PDF files</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                style={{ display: "none" }}
              />
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  border: "6px solid #eee",
                  borderTop: "6px solid #7c3aed",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 20px",
                }}
              />
              <p style={{ fontSize: "20px", color: "#555" }}>
                Analyzing your resume...
              </p>
            </div>
          )}

          {/* Result Section */}
          {analysis && (
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#6d28d9",
                  marginBottom: "30px",
                }}
              >
                📊 Your Career Analysis
              </h2>

              {/* Technical Skills */}
              {analysis.skills.technical.length > 0 && (
                <div
                  style={{
                    backgroundColor: "#faf5ff",
                    padding: "20px",
                    borderRadius: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#5b21b6",
                      marginBottom: "10px",
                    }}
                  >
                    💻 Technical Skills Detected
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {analysis.skills.technical.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: "#fff",
                          padding: "8px 16px",
                          borderRadius: "50px",
                          border: "2px solid #7c3aed",
                          color: "#6d28d9",
                          fontWeight: "600",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Soft Skills */}
              {analysis.skills.soft.length > 0 && (
                <div
                  style={{
                    backgroundColor: "#faf5ff",
                    padding: "20px",
                    borderRadius: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#5b21b6",
                      marginBottom: "10px",
                    }}
                  >
                    🤝 Soft Skills
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {analysis.skills.soft.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: "#fff",
                          padding: "8px 16px",
                          borderRadius: "50px",
                          border: "2px solid #7c3aed",
                          color: "#6d28d9",
                          fontWeight: "600",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Paths */}
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#4c1d95",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                🚀 Recommended Career Paths
              </h2>

              {analysis.careerPaths.map((path, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "linear-gradient(to right, #f3f4f6, #e5e7eb)",
                    padding: "20px",
                    borderRadius: "16px",
                    marginBottom: "20px",
                    borderLeft: "8px solid #7c3aed",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      background:
                        "linear-gradient(to right, #16a34a, #15803d)",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {path.match}% Match
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#6d28d9",
                      marginBottom: "10px",
                    }}
                  >
                    {path.title}
                  </h3>
                  <p style={{ marginBottom: "8px", color: "#333" }}>
                    <strong>Why this path:</strong> {path.description}
                  </p>
                  <p style={{ marginBottom: "8px", color: "#333" }}>
                    <strong>Next steps:</strong> {path.nextSteps}
                  </p>
                  <p style={{ marginBottom: "5px", color: "#333" }}>
                    <strong>💰 Salary Range:</strong> {path.salary}
                  </p>
                  <p style={{ color: "#333" }}>
                    <strong>📈 Market Outlook:</strong> {path.growth}
                  </p>
                </div>
              ))}

              <button
                onClick={resetUpload}
                style={{
                  marginTop: "30px",
                  background:
                    "linear-gradient(to right, #7c3aed, #5b21b6)",
                  color: "white",
                  padding: "15px 40px",
                  borderRadius: "50px",
                  fontSize: "18px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Analyze Another Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;
