import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Profile from "./components/profile";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={Profile} />
        <Route path="/students/" component={StudentInfo} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
