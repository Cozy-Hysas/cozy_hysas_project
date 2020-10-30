import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HouseRenter from './components/HouseRenter.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';
import HousesList from './components/HousesList.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/Store.js';
import LoginTenant from './components/LoginTenant.jsx';
import SignupTenant from './components/SignupTenant.jsx';
import House from './components/House.jsx';
class Index extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header />
					<HomePage />
					<HouseRenter />
					<Login />
					<Signup />
					<HousesList />
					<LoginTenant/>
					<SignupTenant/>
					<House/>
					<Footer />
				</div>
			</Provider>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
