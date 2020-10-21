import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logo.png';
import google from '../../images/google.png';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const history = useHistory();

    let { from } = location.state || { from: { pathname: "/" } };

    const signInGoogle = () => {
        history.replace(from);
    }

    return (
        <Container>
            <figure style={{ textAlign: 'center' }} className="pt-5 pb-2">
                <img style={{ width: "200px" }} src={logo} alt="" />
            </figure>

            <Col md={6} className="mx-auto">
                <div className=" bg-white p-lg-5 text-center p-md-3 p-4 border d-flex justify-content-center align-center flex-column my-5">
                    <h4 className="my-2 font-weight-bolder">Login With</h4>
                    <div onClick={signInGoogle} className="login-with mt-3">
                        <img style={{ width: '28px' }} src={google} alt="" />
                        <span>Continue with Google</span>
                    </div>
                </div>
            </Col>
        </Container>
    );
};

export default Login;