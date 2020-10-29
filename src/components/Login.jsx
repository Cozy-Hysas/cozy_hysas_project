import React, { Component } from 'react';
import axios from 'axios';
import Signup from './Signup.jsx';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            email: '',
            password: '',
            check : ''
        }
        this.check = this.check.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);

    }
    componentDidMount(){
        axios.get("http://localhost:3000/users")
        .then(res => {
            this.setState({
                data : res.data,
                email : "",
                password : "",
                check: ""
            })
        })
        .catch(err => console.log(err,'errrrr'));
    }
    changePassword(event) {
        this.setState({ password: event.target.value})
    }
    changeEmail(event) {
        this.setState({ email: event.target.value})
    }
    check(event) {
        event.preventDefault();
        const listEmail = this.state.data.map((adress) => adress.email);
        const listPassword = this.state.data.map((pass) => pass.password);
        if (listEmail.indexOf(this.state.email) === -1) {
          alert("don't have an account yet please create one");
          this.setState({ check: "signin" });
        } else if (
          listEmail.indexOf(this.state.email) !== -1 &&
          listPassword[listEmail.indexOf(this.state.email)] !==
            this.state.password
        ) {
          alert("wrong password try again");
        } else if (
          listEmail.indexOf(this.state.email) !== -1 &&
          listPassword[listEmail.indexOf(this.state.email)] ===
            this.state.password
        ) {
          alert("Hello " + this.state.email);
          this.setState({ check: "login" });
        }
      }
    render() {
        if (this.state.check === "") {
            return (
              <center>
                <div className="login">
                  <div>
                    <input
                      type="email"
                      placeholder="put your email here"
                      value={this.state.email}
                      onChange={this.changeEmail}
                    />
                    <br></br>
                    <input
                      type="password"
                      placeholder="put your password here "
                      value={this.state.password}
                      onChange={this.changePassword}
                    />
                    <br></br>
                    <button id="bb" onClick={(event) => this.check(event)}>
                      Get Started
                    </button>
                  </div>
                </div>
              </center>
            );
          } else if (this.state.check === "signup") {
            return (
              <center>
                <div>
                  <Signup />
                </div>
              </center>
            );
          } else if (this.state.check === "login") {
            return (
              <center>
                <div>
                  
                </div>
              </center>
            );
          }
        }
}

export default Login;