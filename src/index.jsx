import ReactDOM from 'react-dom'
import React from "react";
import Header from "./components/Header.jsx"
import HomePage from "./components/HomePage.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HouseRenter from "./components/HouseRenter.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Footer from "./components/Footer.jsx"

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePage/>
                <HouseRenter />
                <Login/>
                <Signup />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));