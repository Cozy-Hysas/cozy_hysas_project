import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import img from './logImg/CozyHysas1.png'

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			check: ''
		}
	}
	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						<img 
							src="https://cdn1.vectorstock.com/i/1000x1000/89/70/house-with-heart-blue-line-icon-love-home-vector-23308970.jpg" 
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt=""
						/>
					</Navbar.Brand>
					<Navbar.Brand href="#home">Cozy hysas</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home Page</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#Becamerenter">Become a renter</Nav.Link>
							<Nav.Link eventKey={2} href="#login">
								Become a tenant
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
