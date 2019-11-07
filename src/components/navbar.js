import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <Link to="/" className="nav-link">Sponsor a Kid</Link>
      <Link to="/" className="navbar-brand">
        <img src="../pics/cons.png" class="nav-img" alt="..."/>
      </Link>
      <Link to="/create" className="nav-link">Donate Today</Link>
    </nav>
  );
}
export default Navbar