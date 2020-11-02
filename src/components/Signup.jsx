
import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import { MDBContainer, MDBInput, MDBInputGroup } from 'mdbreact';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: undefined,
      address: "",
      check: "",
    };
  }

  myChangeHandler(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  SignUp(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
    };
    axios.post(`/users/signup`, { user }).then(() => {
      this.setState({
        name: "",
        email: "",
        password: "",
        phoneNumber: undefined,
        address: "",
      });
      this.setState({
        check: "login",
      });
    });
  }

	render() {
		if (this.state.check === '') {
			return (
				<div className="sign">
					<form className="sign-form" onSubmit={this.SignUp.bind(this)}>
						<center>
						<MDBContainer>
								Name <br></br>
								<MDBInput
									className="input"
									label="Please enter your name "
									name = "name"
									outline
									size="lg"
									required
								    minLength="6"
								    onChange={this.myChangeHandler.bind(this)}
									
								/>
							
							
							Email <br></br>
								<MDBInput
									className="email"
									label="Please enter your E-mail "
									name="email"
									outline
									size="lg"
									required
									id="email"
								    minLength="6"
								    onChange={this.myChangeHandler.bind(this)}
									
								/>

						
                                Password <br></br>
								<MDBInput
									type="password"
									label="Please enter your Passeword "
									name="password"
									outline
									size="lg"
									required
									id="psw"
								    minLength="6"
								    onChange={this.myChangeHandler.bind(this)}
									
								/>
						
						        Phone number<br></br>
								<MDBInput
									type="number"
									label="Please enter your phone number "
									outline
									name="phoneNumber"
									size="lg"
									required
									id="phone"
								    minLength="6"
								    onChange={this.myChangeHandler.bind(this)}
									
								/>
							
							    Address <br></br>
								<MDBInput
									type="text"
									label="Please enter your address "
									outline
									size="lg"
									required
									name="address"
								    id="address"
								    minLength="10"
								    onChange={this.myChangeHandler.bind(this)}
									
								/>
								
								<br></br>
								<button className="btn btn-outline-secondary">
									Sign up
								</button>
							</MDBContainer>
							
						</center>
					</form>
				</div>
			);
		} else if (this.state.check === 'login') {
			return <Login />;
		}
	}

}

export default Signup;
