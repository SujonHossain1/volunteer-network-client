import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const AdminEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [loggedInUser] = useContext(UserContext)

    const onSubmit = (data, event) => {

        fetch('https://vol-network2.herokuapp.com/register-works/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((result) => {
                setShowAlert(true);
                console.log(result);
                event.target.reset();
            })
            .catch(err => console.log(err))

    }

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
        <div className="p-5 mt-4 rounded bg-white">

            <div style={alertShow} className="alert alert-success w-25 mt-3 ml-auto" role="alert">
                <h6>Register Successful</h6>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="form-group col-md-6 mt-3">
                        <label className="h6">Event Title</label>
                        <input
                            ref={register({
                                required: "This Field is a required",

                            })}
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Event title"
                        />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label className="h6" >Email</label>
                        <input
                            ref={register({
                                required: "This Field is a required",

                            })}
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            defaultValue={loggedInUser.email}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="form-row">

                    <div className="form-group col-md-6 mt-3">
                        <label className="h6" >Date</label>
                        <input
                            ref={register({
                                required: "This Field is a required",

                            })}
                            name="date"
                            type="date"
                            className="form-control"
                            placeholder="Date"
                        />
                        {errors.date && <span className="error">{errors.date.message}</span>}
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label className="h6">Description</label>
                        <input
                            ref={register({
                                required: "This Field is a required",

                            })}
                            name="organization"
                            type="text"
                            className="form-control"
                            placeholder="Description"
                        />
                        {errors.organization && <span className="error">{errors.organization.message}</span>}
                    </div>

                    <div className="form-group col-md-6 mt-3 mt-auto">
                        <button type="submit" className="btn btn-primary">Register Event</button>
                    </div>

                    <div className="form-group col-md-6 mt-3 ml-auto">
                        <label className="h6" >Upload Image</label>
                        <input
                            name="uploadImage"
                            type="file"
                            className="btn btn-primary mt-3"
                            placeholder="Add New Image"
                        />

                    </div>
                </div>

            </form>
        </div >
    );
};

export default AdminEvent;