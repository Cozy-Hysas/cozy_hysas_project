import React, { Component } from 'react';
import axios from 'axios';
import SignupTenant from './SignupTenant.jsx';
import House from './House.jsx'
class LoginTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            check : ""
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.check = this.check.bind(this);
    }
    

    changePassword(event) {
        this.setState({ password: event.target.value})
    }
    changeEmail(event) {
        this.setState({ email: event.target.value})
    }
    check(event) {
        event.preventDefault();
        axios.post("http://localhost:3000/tenant/login",{email: this.state.email,password: this.state.password})
        .then((res)=> this.setState({check : res.data.message}))
        .catch((err)=> console.log(err,'errrrr'));
      }
      render() {
        if (this.state.check === "") {
            return (
              <center>
                <div className="login">
                  <form className="login-form" onSubmit={(event) => this.check(event)}>
                  <div>
                    <input
                      type="email"
                      placeholder="put your email here"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      required
                    />
                    <br></br>
                    <input
                      type="password"
                      placeholder="put your password here "
                      value={this.state.password}
                      onChange={this.changePassword}
                      required
                    />
                    <br></br>
                    <input type="submit" value = "LOGIN"/>
                  </div>
                  </form>
                </div>
              </center>
            );
          } else if (this.state.check === "signup") {
            return (
              <center>
                <div>
                  <SignupTenant />
                </div>
              </center>
            );
          } else if (this.state.check === "welcome") {
            return (
              <center>
                <div>
                  <House/>
                </div>
              </center>
            );
          }
        }
}

export default LoginTenant;