import React from 'react';

const AdminTableCell = ({ registerItem, handleDeleteUser }) => {
    const { _id, email, name, date, organization } = registerItem;
    return (
        <tr>
            <td > {name} </td>
            <td>{email}</td>
            <td> {date}</td>
            <td> {organization}</td>
            <td><button onClick={() => handleDeleteUser(_id)} className="btn btn-danger btn-sm">delete</button></td>
        </tr>
    );
};

export default AdminTableCell;