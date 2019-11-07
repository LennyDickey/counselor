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

      <Footer />
    </Router>
  );
}

export default App;
