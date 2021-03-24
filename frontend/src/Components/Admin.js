import React from "react";
import "./Admin.css";
import { useHistory } from "react-router-dom";

const Admin = ({ users }) => {
    const history = useHistory();

    return (
        <div className="Admin my-5 mx-0">
            <h1 className="my-5">Yodlr Admin Page</h1>

            {users.length === 0
                ? <p>There are no users available.</p>
                : (
                    <table className="Admin-table table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr className="Admin-userRow" onClick={() => history.push(`/user/${user.id}`)} >
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.state}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}

export default Admin;