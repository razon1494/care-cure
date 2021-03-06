import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import './Navbar.css'
import logo from '../../images/logo.png'

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
            <Navbar.Brand>
              <NavLink to='/home' className='navbar-title'>
                <img className='img-fluid w-50' src={logo} alt="logo"/>
                </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to='/home'>Home</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/staffs">About us</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/services">Services</NavLink>
      <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/book">Appointment</NavLink>
                <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/join">Join Us</NavLink>

                            {!user.email && <NavLink className='nav-items fs-6 px-3  py-2 fw-bold text-dark' to="/signup">Sign Up</NavLink>}
                            {user?.email ?
                            <Button onClick={logOut} className='nav-items fs-6 px-3  py-2 fw-bold text-dark text-start' as={Link} to="/login" variant="light">Logout</Button> :
                            <Nav.Link className='nav-items fs-6 px-3  py-2 fw-bold text-dark' as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <p className='text-danger fw-bold'>{user?.displayName}</p>
                        </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavBar;