import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import './RegisterWorkshop.css';
import { UserContext } from '../../App';

const RegisterWorkshop = () => {
    const [registerWorkshop, setRegisterWorkshop] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/register-workshop?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegisterWorkshop(data))
            .then(err => console.log(err))
    }, [loggedInUser.email, loggedInUser])


    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    {
                        registerWorkshop.map(work => <Col xs="10" md="6" lg="6">
                            <div class="d-flex justify-content-around p-4 bg-white rounded">
                                <img style={{ width: '200px', height: '200px' }} class="img-fluid" src="https://i.postimg.cc/J0PvKd8T/school-Suffiles.png" alt="" />
                                <div>
                                    <h4 className="font-weight-bolder">{registerWorkshop.organization}</h4>
                                    <h6 className="font-weight-bolder">{registerWorkshop.date}</h6>

                                </div>
                                <div className="mt-auto">
                                    <Button>Cancel</Button>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default RegisterWorkshop;