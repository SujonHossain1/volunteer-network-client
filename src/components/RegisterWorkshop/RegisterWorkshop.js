import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import './RegisterWorkshop.css';
import { UserContext } from '../../App';

const RegisterWorkshop = () => {
    const [registerWorkshop, setRegisterWorkshop] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    const [deleteWorkshop, setDeleteWorkshop] = useState();

    useEffect(() => {
        fetch(`https://vol-network2.herokuapp.com/register-workshop?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRegisterWorkshop(data));

    }, [loggedInUser.email, deleteWorkshop])

    const workshopDeleteHandler = (id) => {
        fetch('https://vol-network2.herokuapp.com/volunteer-organization-delete/' + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => setDeleteWorkshop(data));
    }

  

    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    {
                        registerWorkshop.map(work => <Col xs="12" md="6" lg="6" className="pt-4">
                            <div className="d-flex justify-content-around p-4 bg-white rounded">
                                <img style={{ width: '200px', height: '200px' }} class="img-fluid" src={work.img} alt="" />
                                <div className="ml-3">
                                    <h4 className="font-weight-bolder">{work.organization}</h4>
                                    <h6 className="font-weight-bolder">{work.date} </h6>
                                </div>
                                <div className="mt-auto">
                                    <Button onClick={() => workshopDeleteHandler(work._id)}>Cancel</Button>
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