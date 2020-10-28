import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const AdminHeader = () => {
    return (
        <Navbar className="bg-white">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img className="navbar-logo" src={logo} alt="header_logo" /></Link>
                </Navbar.Brand>
                <h5 className=" text-primary ml-5">Admin Panel</h5>
            </Container>
        </Navbar>
    );
};

export default AdminHeader;