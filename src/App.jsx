import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WhyNSA from "./component/WhyNSA";
import BottomCTA from "./component/BottomCTA";
import Footer from "./component/Footer";
import CareerTrackPg from "./pages/CareerTrackPg"; // ✅ Your only extra page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyNSA />
              <BottomCTA />
            </>
          }
        />

        {/* Career Track Page */}
        <Route path="/career-track" element={<CareerTrackPg />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
