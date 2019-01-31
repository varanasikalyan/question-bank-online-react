import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container" id="signUpContainer">
        <div className="wrap-login-style">
          <form method="POST" onSubmit={this.onSubmit} className="form-signin">
            <fieldset className="form-group">
              <img
                className="mb-3"
                src={require("../../static/images/signup.png")}
                alt="Sign Up"
                width="60"
                height="60"
              />
              <h1 className="border-bottom mb-4 h3 mb-3 font-weight-normal">
                Join Us
              </h1>
              <div className="form-group">
                <label className="form-control-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="form-control form-control-lg"
                  id="username"
                  name="username"
                  required=""
                  type="text"
                  onChange={this.onChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  required=""
                  type="text"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  id="password"
                  name="password"
                  required=""
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <label
                  className="form-control-label"
                  htmlFor="confirm_password"
                >
                  Confirm Password
                </label>
                <input
                  className="form-control form-control-lg"
                  id="confirm_password"
                  name="confirm_password"
                  required=""
                  type="password"
                  onChange={this.onChange}
                  value={this.state.confirm_password}
                />
              </div>
            </fieldset>
            <div className="form-group">
              <input
                className="btn btn-md btn-primary btn-block"
                id="submit"
                name="submit"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <label id="alreadyaMember">
            Already a member?&nbsp;
            <a href="/signin" id="signIn">
              Sign In
            </a>
          </label>
        </div>
      </div>
    );
  }
}

export default SignUp;
