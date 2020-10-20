import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import VolunteerWorkItem from '../VolunteerWorkItem/VolunteerWorkItem';
import './VolunteerWorks.css';

const VolunteerWorks = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/workData')
            .then(res => res.json())
            .then(data => setWorks(data))
            .catch(err => console.log(err))
    }, [])

    console.log(works)

    return (
        <div className="volunteer-works ">
            <Container>
                <div className="text-center my-4">
                    <h2 className=" text-uppercase">I Grow By Help People in Need</h2>
                    <div className="col-md-5 mx-auto py-3">
                        <div className="form-group d-flex justify-content-between">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <Button className=" ml-n2">Search</Button>
                        </div>
                    </div>
                    <Row>
                        {
                            works.splice(0, 20).map((workItem) =>
                                <VolunteerWorkItem
                                    workItem={workItem}
                                    key={workItem._id}
                                />)
                        }
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default VolunteerWorks;