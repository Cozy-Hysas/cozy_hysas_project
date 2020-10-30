import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                  src="C:\Users\helay\OneDrive\Bureau\cozy_hysas_project\logImg\Cozy hysas1.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=''
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Cozy hysas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home Page</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#Becamerenter">Became a renter</Nav.Link>
                <Nav.Link eventKey={2} href="#login">
                  Create an account
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}

export default Header