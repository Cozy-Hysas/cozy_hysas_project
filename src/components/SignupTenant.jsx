import React, { Component } from "react";
import axios from "axios";
import LoginTenant from "./LoginTenant.jsx";
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
      .post("http://localhost:3000/tenants/signup", {
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
          check: "loginTenant"
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
            <input
              type="text"
              name="name"
              placeholder="put your name here"
              value={this.state.name}
              onChange={this.tenantInfoChange}
              minLength="6"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Put your password here"
              value={this.state.password}
              onChange={this.tenantInfoChange}
              minLength="6"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Put your email here"
              value={this.state.email}
              onChange={this.tenantInfoChange}
              required
            />
            <br />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Put your phone number here"
              value={this.state.phoneNumber}
              onChange={this.tenantInfoChange}
              minLength="8"
              required
            />
            <br />
            <input
              type="text"
              name="address"
              placeholder="Put your address here"
              value={this.state.address}
              onChange={this.tenantInfoChange}
              required
            />
            <br />
            <input
              type="text"
              name="numeroCart"
              placeholder="put your numeroCart here"
              value={this.state.numeroCart}
              onChange={this.tenantInfoChange}
              minLength="16"
              required
            />
            <br />
            <input
              type="text"
              name="cvv2"
              placeholder="put your cvv2 here"
              value={this.state.cvv2}
              onChange={this.tenantInfoChange}
              minLength="3"
              maxLength="3"
              required
            />
            <br /><br />
            <input type="submit" value="Create An Account" />
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
