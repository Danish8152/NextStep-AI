import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate(); 

  const goToCareerAdvisor = () => navigate("/ai-career-finder");
  const goToCareerTrack = () => navigate("/career-track");

  return (
    <div id="hero">
      <h1>Discover. Learn. Grow.</h1>
      <h1>Your AI-Powered Career Navigator</h1>
      <p>
        Transform your career aspirations into reality with personalized AI
        guidance, curated learning paths, and comprehensive skill development.
      </p>
      <div className="hero-buttons">
        <button onClick={goToCareerAdvisor}>AI Career Finder</button>
        <button onClick={goToCareerTrack}>Career Track</button>
      </div>
    </div>
  );
}

export default Hero;
