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
      check: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.signup = this.signup.bind(this);
  }
  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeEmail(event) {
    this.setState({ email: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  changePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
  }
  changeAddress(event) {
    this.setState({ address: event.target.value });
  }
  signup(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/tenant/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
      })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          address: "",
          check:"loginTenant"
        });
      })
      .catch((err) => console.log(err, "errrrr"));
  }
  render() {
    if (this.state.check === "") {
      return (
        <div className="signup">
          <form className="form-signup" onSubmit={(event) => this.signup(event)}>
          <input
            type="text"
            placeholder="put your name here"
            value={this.state.name}
            onChange={this.changeName}
            minLength = "6"
            required
          />
          <input
            type="password"
            placeholder="Put your password here"
            value={this.state.password}
            onChange={this.changePassword}
            minLength = "6"
            required
          />
          <input
            type="email"
            placeholder="Put your email here"
            value={this.state.email}
            onChange={this.changeEmail}
            required
          />
          <input
            type="text"
            placeholder="Put your phone number here"
            value={this.state.phoneNumber}
            onChange={this.changePhoneNumber}
            minLength = "8"
            required
          />
          <input
            type="text"
            placeholder="Put your address here"
            value={this.state.address}
            onChange={this.changeAddress}
            required
          />
          <input type="submit" value="Create An Account"/>
          </form>
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
