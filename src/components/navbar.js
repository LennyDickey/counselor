import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Counclr</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Sponser a Kid</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Donate Today</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li> */}
          {/* <li className="navbar-item">
            <Link to="/student" className="nav-link">Create Student</Link>
          </li>
          <li className="navbar-item">
            <Link to="/employee" className="nav-link">Create Employee</Link>
          </li>
          <li className="navbar-item">
            <Link to="/view-student" className="nav-link">View Student</Link>
          </li>
          <li className="navbar-item">
            <Link to="/view-employee" className="nav-link">View Employees</Link>
          </li> */}
          {/* <li className="navbar-item">
            <Link to="/horizontal_bar" className="nav-link">Data</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar