import React, { Component } from "react";
import './SignIn.css';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}
  render() {
    return (
		<div className="container" id="signInContainer">
			<div className="wrap-login-style">
				<form method="POST" action="" onSubmit={this.onSubmit} className="form-signin">
					<fieldset className="form-group">
						<img className="mb-3" src={require("../../static/images/login.png")} alt="Login" width="60" height="60"/>
						<h1 className="border-bottom mb-4 h3 mb-3 font-weight-normal">Please sign in</h1>
						<div className="form-group">
							<label className="form-control-label" htmlFor="email">Email</label>
							<input className="form-control form-control-sm" id="email" name="email" required="" type="text" value={this.state.email} onChange={this.onChange}/>
						</div>
						<div className="form-group">
							<label className="form-control-label" htmlFor="password">Password</label>
							<input className="form-control form-control-sm" id="password" name="password" required="" type="password" value={this.state.password} onChange={this.onChange}/>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="remember" name="remember" type="checkbox" value="y"/>
							<label className="form-control-label" htmlFor="remember">Remember me</label>
						</div>
					</fieldset>
					<div className="form-group">
						<input className="btn btn-md btn-primary btn-block" id="submit" name="submit" type="submit" value="Sign In"/>
					</div>
					<label id="notaMember">Not a member?&nbsp;<a href="/signup" id="signUp">Join Us</a></label>        
				</form>
			</div>
		</div>
    )
  }
}

export default SignIn;
