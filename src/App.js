import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./style/wave.css";

import Home from "./components/home";


import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <div>
        <Route path="/Home" exact component={Home} />
      </div>
      <svg
            className="waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
      <Footer />
    </Router>
    
  );
}

export default App;
