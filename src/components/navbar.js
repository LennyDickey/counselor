
import React from "react";

import { Link } from 'react-router-dom';
import "../style/nav.scss"

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <Link to="/" className="nav-link">Sponsor a Kid</Link>
      <Link to="/" className="navbar-brand">
        <img src="../pics/cons.png" className="nav-img" alt="..."/>
      </Link>
      <Link to="/create" className="nav-link">Donate Today</Link>
    </nav>
  );
}
export default Navbar