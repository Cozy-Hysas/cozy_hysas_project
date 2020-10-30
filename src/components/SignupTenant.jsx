import React, { Component } from "react";
import axios from "axios";
import LoginTenant from "./LoginTenant.jsx";
import { MDBContainer, MDBInput, MDBInputGroup } from 'mdbreact';
class SignupTenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      numeroCart: "",
      cvv2: "",
      check: "",
    };
    this.tenantInfoChange = this.tenantInfoChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  tenantInfoChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  }

  signup(event) {
    event.preventDefault();
    axios

      .post("/tenants/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        numeroCart: this.state.numeroCart,
        cvv2: this.state.cvv2,
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          address: "",
          numeroCart: "",
          cvv2: "",
          check: "loginTenant",
        });
      })
      .catch((err) => console.log(err, "errrrr"));
  }
  render() {
    if (this.state.check === "") {
      return (
        <div className="signup">
          <center>
          <form className="form-signup" onSubmit={(event) => this.signup(event)}>
          <MDBContainer>
								Name <br></br>
								<MDBInput
                  type="text"
									className="input"
									label="Please enter your name "
									outline
									size="lg"
									required
								  minLength="6"
								  value={this.state.name}
                  onChange={this.tenantInfoChange}
									
								/>
                   Password <br></br>
								<MDBInput
									type="password"
									label="Please enter your Passeword "
									name="password"
									outline
									size="lg"
									required
                  value={this.state.password}
                  onChange={this.tenantInfoChange}
                  minLength="6"
                  required
									
								/>
                 	Email <br></br>
								<MDBInput
                  className="email"
                  type="email"
									label="Please enter your E-mail "
									name="Email"
									outline
									size="lg"
									required
                  value={this.state.email}
                  onChange={this.tenantInfoChange}
                  required
									
								/>
                 
                 Phone number<br></br>
								<MDBInput
									type="number"
									label="Please enter your phone number "
									outline
									name="phoneNumber"
									size="lg"
									required
                  value={this.state.phoneNumber}
                  onChange={this.tenantInfoChange}
                  minLength="8"
									
								/>
                
                Address <br></br>
								<MDBInput
									type="text"
									label="Please enter your address "
									outline
									size="lg"
									required
									name="address"
								  minLength="10"
								  value={this.state.address}
                  onChange={this.tenantInfoChange}
									
								/>
                  credit Card number<br></br>
								<MDBInput
									type="number"
									label="Please enter your credit card number "
									outline
                  name="numeroCart"
									size="lg"
									required
                  value={this.state.phoneNumber}
                  onChange={this.tenantInfoChange}
                  minLength="8"
									
								/>
                  CVV2 <br></br>
								<MDBInput
									type="number"
									label="Please enter your CVV2 number "
									outline
                  name="cvv2"
									size="lg"
									required
                  value={this.state.phoneNumber}
                  onChange={this.tenantInfoChange}
                  minLength="3"
                  maxLength="3"
									
								/>
            <br></br>
								<button className="btn btn-outline-secondary">
									Sign up
								</button>
							</MDBContainer>
          </form>
          </center>
        </div>
      );
    } else {
      return (
        <div>
          <LoginTenant />
        </div>
      );
    }
  }
}

export default SignupTenant;
