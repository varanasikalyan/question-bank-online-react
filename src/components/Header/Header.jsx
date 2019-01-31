import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../../static/images/logo/logo.png")}
                alt="Question Bank"
                className="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsOptions"
              aria-controls="navbarsOptions"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsOptions">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-item nav-link">
                    <span className="icon-text">HOME</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-item nav-link">
                    <span className="icon-text">ABOUT US</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/careers" className="nav-item nav-link">
                    <span className="icon-text">CAREERS</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-item nav-link">
                    <span className="icon-text">CONTACT US</span>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/signin" className="nav-item nav-link">
                    <img
                      src={require("../../static/images/login.png")}
                      className="icon"
                      alt="q u e s t i o n . b a n k"
                    />
                    <span className="icon-text">LOGIN</span>
                  </Link>
                </li>
                <li className="nav-item border-button">
                  <Link to="/signup" className="nav-item nav-link">
                    <img
                      src={require("../../static/images/signup.png")}
                      className="icon"
                      alt="q u e s t i o n . b a n k"
                    />
                    <span className="icon-text">JOIN US</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
