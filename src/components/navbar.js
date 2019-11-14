
<<<<<<< HEAD
import React from "react";

=======
import React from 'react';
>>>>>>> 0c71bc6c361416ef48a06e85cd1ecc1a3663bf76
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
<<<<<<< HEAD
=======
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <Link to="/" className="header__nav-button btn">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/survey" className="header__nav-button btn">Survey</Link>
          </li>
          <li className="nav-item">
            <Link to="/link" className="header__nav-button btn">Link</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-item dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
>>>>>>> 0c71bc6c361416ef48a06e85cd1ecc1a3663bf76
    </nav>
  );
}
export default Navbar