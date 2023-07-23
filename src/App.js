import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Loader from "./Loader";
import Partic from "./Partic";
import "./Partic.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as desired
  }, []);

  return (
    <div>
      <div className="pback">
        <Partic />
      </div>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
