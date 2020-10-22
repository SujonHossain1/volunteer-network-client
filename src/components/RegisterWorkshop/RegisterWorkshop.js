import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import './RegisterWorkshop.css';

const RegisterWorkshop = () => {

    return (
        <>
            <Header />
            <Container className="my-5">
                <Row>
                    <Col xs="10" md="6" lg="6">
                        <div class="d-flex justify-content-around p-4 bg-white rounded">
                            <img style={{ width: '200px', height: '200px' }} class="img-fluid" src="https://i.postimg.cc/J0PvKd8T/school-Suffiles.png" alt="" />
                            <div>
                                <h4 className="font-weight-bolder">Humanity More</h4>
                                <h6 className="font-weight-bolder">2020/3/23</h6>

                            </div>
                            <div className="mt-auto">
                                  <Button>Cancel</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RegisterWorkshop;