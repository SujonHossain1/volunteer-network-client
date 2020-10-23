import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import { useForm } from 'react-hook-form';
import './VolunteerForm.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-date-picker';

const VolunteerForm = () => {
    const [registerDate, onChangeTo] = useState(new Date());
    const { formId } = useParams();
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();
    const [organization, setOrganization] = useState("");

    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (data, event) => {
        data.date = registerDate;
        fetch('http://localhost:5000/register-works/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(() => {
                setShowAlert(true);           
            })
            .catch(err => console.log(err))

     
    }

    useEffect(() => {
        fetch('http://localhost:5000/volunteer-organization/' + formId)
            .then(res => res.json())
            .then(data => setOrganization(data))
    }, [formId])

    let alertShow = {
        display: 'none',
    };

    if (showAlert) {
        alertShow.display = "block";
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }

    return (
        <Container>
            <img src={loggedInUser.photo} alt=""/>
            <div style={alertShow} className="alert alert-success w-25 mt-3 ml-auto" role="alert">
                <h6>Register Successful</h6>
            </div>
            <figure style={{ textAlign: 'center' }} className="pt-5 pb-2">
                <Link to="/">
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </Link>
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
                        <DatePicker className="form-control"
                            onChange={onChangeTo}
                            value={registerDate}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            ref={register({ required: "Description is required" })}
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
                            name="organization"
                            defaultValue={organization.name}
                        />

                    </Form.Group>
                    <Button type="submit" className="btn-block text-center">Register</Button>
                </Form>
            </Col>
        </Container>
    );
};

export default VolunteerForm;