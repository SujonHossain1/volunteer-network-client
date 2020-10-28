import React from 'react';
import AdminTableCell from './AdminTableCell';

const AdminDataTable = ({ allRegisterData, handleDeleteUser }) => {

    

    return (
        <div className='admin-section p-5 mt-4 rounded bg-white'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Registered Date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col"> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allRegisterData.map(registerItem => <AdminTableCell
                            registerItem={registerItem}
                            handleDeleteUser={handleDeleteUser}
                            key={registerItem._id}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminDataTable;