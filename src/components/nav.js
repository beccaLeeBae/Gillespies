import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md p-0 justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <i className="mt-2 fas fa-bars"></i>
        </button>
        <p className="mt-2 navbar-toggler"
          aria-expanded="false">Grace & Damon</p>
        <div className="collapse navbar-collapse text-left" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link">
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rsvp" className="nav-link">
                RSVP
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registry" className="nav-link">
                Registry
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;