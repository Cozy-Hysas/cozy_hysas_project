import React, { Component } from "react";
import axios from "axios";
import Signup from "./Signup.jsx";
import House from "./House.jsx";
import { MDBContainer, MDBInput } from 'mdbreact';
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			check: '',
		};
		this.check = this.check.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
	}

	changePassword(event) {
		this.setState({ password: event.target.value });
	}
	changeEmail(event) {
		this.setState({ email: event.target.value });
	}

	check(event) {
		event.preventDefault();
		axios
			.post('http://localhost:3000/users/login', {
				email: this.state.email,
				password: this.state.password,
			})
			.then((res) => this.setState({ check: res.data.message }))
			.catch((err) => console.log(err, 'errrrr'));
	}
	render() {
		if (this.state.check === '') {
			return (
				<center>
					<div className="login">
						<form
							className="form-login"
							onSubmit={(event) => this.check(event)}
						>
							<div>
							<MDBContainer>
							Email <br></br>
								<MDBInput
								    type="email"
									className="email"
									label="Please enter your E-mail "
									name="Email"
									outline
									size="lg"
									required
									value={this.state.email}
									onChange={this.changeEmail}
									
								/>
                               
                                Password <br></br>
								<MDBInput
									type="password"
									label="Please enter your Passeword "
									name="password"
									outline
									size="lg"
								    minLength="6"
								    value={this.state.password}
									onChange={this.changePassword}
									required
									
								/>
									<br></br>
								<button className="btn btn-outline-secondary">
									LogIn
								</button>
							</MDBContainer>
							</div>
						</form>
					</div>
				</center>
			);
		} else if (this.state.check === 'signup') {
			return (
				<center>
					<div>
						<Signup />
					</div>
				</center>
			);
		} else if (this.state.check === 'welcome') {
			return (
				<center>
					<div>
						<House />
					</div>
				</center>
			);
		}
	}

}

export default Login;
