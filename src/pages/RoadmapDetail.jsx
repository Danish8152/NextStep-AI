import React from "react";

function RoadmapDetail() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Front-end Developer Roadmap</h1>
        <p style={styles.subtext}>
          Follow this roadmap to become a skilled Frontend Developer. 
          HTML, CSS and JavaScript are the backbone of web development — 
          make sure to practice by building lots of projects.
        </p>
      </div>

      {/* Legend */}
      <div style={styles.legendContainer}>
        <div style={styles.legendBox}>
          <div style={{ ...styles.dot, backgroundColor: "#8b5cf6" }}></div>
          <span>Personal Recommendation</span>
        </div>
        <div style={styles.legendBox}>
          <div style={{ ...styles.dot, backgroundColor: "#22c55e" }}></div>
          <span>Alternative Option</span>
        </div>
        <div style={styles.legendBox}>
          <div style={{ ...styles.dot, backgroundColor: "#9ca3af" }}></div>
          <span>Order not strict on roadmap</span>
        </div>
      </div>

      {/* Main Roadmap */}
      <div style={styles.roadmapContainer}>
        {/* Left Side */}
        <div style={styles.column}>
          <div style={styles.cardYellow}>Internet</div>
          <div style={styles.line}></div>
          <div style={styles.cardYellow}>HTML</div>
          <div style={styles.line}></div>
          <div style={styles.cardYellow}>CSS</div>
          <div style={styles.line}></div>
          <div style={styles.cardYellow}>JavaScript</div>
        </div>

        {/* Right Side (Internet topics) */}
        <div style={styles.topicColumn}>
          <div style={styles.topicCard}>How does the internet work?</div>
          <div style={styles.topicCard}>What is HTTP?</div>
          <div style={styles.topicCard}>What is Domain Name?</div>
          <div style={styles.topicCard}>What is Hosting?</div>
          <div style={styles.topicCard}>DNS and how it works?</div>
          <div style={styles.topicCard}>Browsers and how they work?</div>
        </div>
      </div>

      {/* Intermediate Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Version Control</h2>
        <div style={styles.row}>
          <div style={styles.cardYellow}>Git</div>
          <div style={styles.connector}></div>
          <div style={styles.cardYellow}>Version Control</div>
          <div style={styles.connector}></div>
          <div style={styles.cardYellow}>VCS Hosting</div>
          <div style={styles.connector}></div>
          <div style={styles.cardYellow}>Package Managers</div>
        </div>

        <div style={styles.grid}>
          <div style={styles.cardLight}>npm</div>
          <div style={styles.cardLight}>yarn</div>
          <div style={styles.cardLight}>pnpm</div>
          <div style={styles.cardLight}>Bun</div>
        </div>
      </div>

      {/* Frameworks Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Frameworks</h2>
        <div style={styles.grid}>
          <div style={styles.cardLight}>React</div>
          <div style={styles.cardLight}>Vue.js</div>
          <div style={styles.cardLight}>Angular</div>
          <div style={styles.cardLight}>Svelte</div>
          <div style={styles.cardLight}>Solid JS</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Testing & Tools</h2>
        <div style={styles.grid}>
          <div style={styles.cardLight}>Vitest</div>
          <div style={styles.cardLight}>Jest</div>
          <div style={styles.cardLight}>Playwright</div>
          <div style={styles.cardLight}>Cypress</div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>More Topics</h2>
        <div style={styles.grid}>
          <div style={styles.cardYellow}>TypeScript</div>
          <div style={styles.cardYellow}>Progressive Web Apps</div>
          <div style={styles.cardYellow}>Next.js</div>
          <div style={styles.cardLight}>GraphQL</div>
          <div style={styles.cardYellow}>CORS</div>
          <div style={styles.cardYellow}>Web Security</div>
        </div>
      </div>

      {/* Footer Note */}
      <div style={styles.footerNote}>
        <p>
          <b>Note:</b> You don’t need to learn everything in strict order. 
          Focus on understanding the core concepts and apply them through projects.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtext: {
    color: "#333",
    fontSize: "16px",
    maxWidth: "700px",
    margin: "0 auto",
  },
  legendContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
  },
  legendBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "15px",
  },
  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
  },
  roadmapContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "50px",
    flexWrap: "wrap",
    marginBottom: "50px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topicColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  cardYellow: {
    backgroundColor: "#fff176",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "2px solid black",
    fontWeight: "600",
    textAlign: "center",
    minWidth: "160px",
  },
  cardLight: {
    backgroundColor: "#fde68a",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "2px solid black",
    fontWeight: "600",
    textAlign: "center",
    minWidth: "140px",
  },
  topicCard: {
    backgroundColor: "#fde68a",
    border: "2px solid black",
    borderRadius: "8px",
    padding: "8px 16px",
    textAlign: "center",
    fontWeight: "500",
  },
  line: {
    width: "3px",
    height: "40px",
    backgroundColor: "#2563eb",
    margin: "6px 0",
  },
  connector: {
    width: "40px",
    height: "2px",
    backgroundColor: "#2563eb",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "15px",
    justifyItems: "center",
    marginTop: "10px",
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  footerNote: {
    backgroundColor: "#fff",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "15px",
  },
};

export default RoadmapDetail;
