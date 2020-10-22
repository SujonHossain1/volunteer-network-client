import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './Login.css';
import logo from '../../images/logo.png';
import google from '../../images/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const location = useLocation();
    const history = useHistory();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let { from } = location.state || { from: { pathname: "/" } };

    const signInGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                setLoggedInUser({
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isSignIn: true
                })
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    return (
        <Container>
            <figure style={{ textAlign: 'center' }} className="pt-5 pb-2">
                <Link to="/">
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </Link>
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