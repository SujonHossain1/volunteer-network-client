import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminDataTable from './AdminDataTable';
import AdminHeader from './AdminHeader';
import './Admin.css';
import users from '../../images/users.png';
import plus from '../../images/plus.png';
import AdminEvent from './AdminEvent';


const Admin = () => {
    const [allRegisterData, setAllRegisterData] = useState([]);
    const [deleteData, setDeleteData] = useState(null);
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/all-register-data')
            .then(res => res.json())
            .then(data => setAllRegisterData(data))
    }, [deleteData, showAlert])

    const handleDeleteUser = (id) => {
        fetch('http://localhost:5000/volunteer-organization-delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => setDeleteData(data));
    }

    return (
        <>
            <AdminHeader />

            <Container>
                <Row>
                    <Col xs={12} md="2" className="bg-white">
                        <div className="h-100 mt-5 register-add">
                            <p className={showAlert ? 'text-primary' : ''} onClick={() => setShowAlert(true)} > <img src={users} alt="" /> volunteer list </p>
                            <p className={showAlert ? '' : 'text-primary'} onClick={() => setShowAlert(false)}> <img src={plus} alt="" /> Add Event</p>
                        </div>
                    </Col>
                    <Col xs={12} md="10"  >
                        {
                            showAlert ? <AdminDataTable
                                allRegisterData={allRegisterData}
                                handleDeleteUser={handleDeleteUser}
                            />
                                :
                                <AdminEvent />
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;