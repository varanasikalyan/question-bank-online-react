import React, { Component } from "react";
import "./Careers.css";

class Careers extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md mx-auto content">
          <div className="row">
            <div className="display-4">Careers</div>
          </div>
          <div className="row row-height">
            <div>
              • Please mail us your updated CV at{" "}
              <a href="mailto:careers@question.bank">careers@question.bank</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;
