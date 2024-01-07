import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "#092635" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MY Schema
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
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
                  <Link to="setting" className="dropdown-item">
                    Setting
                  </Link>
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
