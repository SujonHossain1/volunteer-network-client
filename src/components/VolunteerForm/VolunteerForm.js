import React, { useEffect, useState } from 'react';
import { Col, Container, Form,Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useForm } from 'react-hook-form';
import './VolunteerForm.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const VolunteerForm = () => {
    const {formId} = useParams();
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit,  errors } = useForm();
    const [organization, setOrganization] = useState("");


    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setOrganization(data))
    }, [])

    return (
        <Container>
            <h2>id: {formId} </h2>
            <figure style={{textAlign: 'center'}} className="pt-5 pb-2">
                <img style={{width: "200px"}} src={logo} alt="" />
            </figure>
            <Col className="col-md-6 mx-auto  volunteer-form">
                <Form onSubmit={handleSubmit(onSubmit)} className=" bg-white p-lg-5 p-md-3 p-4 border">
                    <Form.Group>
                        <Form.Control
                            ref={register({
                                required: "Name Field is a required",
                                
                            })}
                            type="text"
                            name="name"
                            defaultValue={loggedInUser.name}
                            placeholder="Full Name"
                        />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            ref={register({ required: "Email Address is required" })}
                            type="text"
                            name="email"
                            defaultValue={loggedInUser.email}
                            placeholder="Email Address"
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            ref={register({ required: "Date is required" })}
                            type="date"
                            name="date"
                            placeholder="Date"
                        />
                        {errors.date && <span className="error">{errors.date.message}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            ref={register({ required: "Email Address is required" })}
                            type="text"
                            name="description"
                            placeholder="Description"
                        />
                        {errors.description && <span className="error">{errors.description.message}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            ref={register({ required: "Email Address is required" })}
                            type="text"
                            name="description"
                            defaultValue={organization}
                        />
                      
                    </Form.Group>
                   <Button type="submit" className="btn-block text-center">Register</Button>
                </Form>
            </Col>
        </Container>
    );
};

export default VolunteerForm;