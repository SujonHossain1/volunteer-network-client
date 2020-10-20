import React from 'react';
import './Header.css';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <Navbar  expand="md">
            <Container>
                <Navbar.Brand> <img className="navbar-logo" src={logo} alt="header_logo"/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-item" to="/">
                            <span className="nav-link"> Home </span>
                        </Link>
                        <Link className="nav-item" to="/donation">
                            <span className="nav-link"> Donation </span>
                        </Link>
                        <Link className="nav-item" to="/events">
                            <span className="nav-link"> Event </span>
                        </Link>
                        <Link className="nav-item" to="/blog">
                            <span className="nav-link"> Blog </span>
                        </Link>
                        <Link className="nav-item" to="/register">
                            <Button className="rounded mr-3">Register</Button>
                        </Link>
                        <Link className="nav-item" to="/Admin">
                            <Button className="btn btn-dark">Admin</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;