import React from 'react';
import { Col } from 'react-bootstrap';
import './VolunteerWorkItem.css';
import {Link} from 'react-router-dom';

const VolunteerWorkItem = ({ workItem }) => {
    const { id, name, img, color } = workItem;
    return (
        <Col xs="6" md="4" lg="3" className="mt-3">
           <Link to={"/volunteer-work/" + id}>
           <div className="volunteer-work-item ">
                <img className="img-fluid" src={img} alt={name}/>
                <h5 style={{background: color}} className="text-style"> {name}</h5>
            </div>
           </Link>
        </Col>
    );
};

export default VolunteerWorkItem;