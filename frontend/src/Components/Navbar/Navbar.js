import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
  const handallogout = () => {};
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "#092635" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="dropstart">
              <button
                className="btn btn-primary d-flex me-2 "
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                User@user.com
              </button>
              <ul className="dropdown-menu userCredential">
                <li>
                  <button className="dropdown-item" type="button">
                    User@user.com
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Setting
                  </button>
                </li>
                <li>
                  <Link to="/login" className="dropdown-item">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
