import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Header = (props) => {
	let userOptions;
	if (props.user.is_authenticated === true) {
		userOptions = <SignedInLinks />
	}
	else {
		userOptions = <SignedOutLinks />
	}
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../../../static/images/logo/logo.png")}
                alt="Question Bank"
                className="logo"
              /> <span className="app-name">Q-bank</span>
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
            { userOptions }
          </div>
        </nav>
      </div>
    );
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(Header);