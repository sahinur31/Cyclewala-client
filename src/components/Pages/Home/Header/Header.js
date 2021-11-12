import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Header.css';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import Slide from "react-reveal/Slide";

const Header = () => {
    const {user, logout} = useAuth() || {};
    return (
        <Navbar bg="white" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <Slide left>
                            <img width="60px" src={logo} alt="" />
                        </Slide>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Slide right>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/explore">Explore</Nav.Link>
                       { 
                       (user?.email) &&
                       <>
                       <Nav.Link as={Link} className="text-dark" to="/dashboard">Dashboard</Nav.Link>
                        {/* <Nav.Link as={Link} className="text-dark" to="/addFood">Add Food</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/myorders">My Orders</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/manageorders">Manage All Orders</Nav.Link> */}
                        </>
                        }

                        <Navbar.Text className="text-dark me-2">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text> 
                        {
                            (!user?.email) ?
                            <Nav.Link as={Link} className="btn theme-bg text-white" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logout} className="btn theme-bg text-white">Logout</button>
                        }
                       
                    </Navbar.Collapse>
                    </Slide>
                </Container>
            </Navbar>
    );
};

export default Header;