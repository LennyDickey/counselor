import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Survey from "./components/students-survey";
import PathWay from "./components/PathWayCard";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/" exact component={Profile} />
        <Route path="/survey" render={() => <Survey />} />
        <Route path="/pathWay" render={() => <PathWay />} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
