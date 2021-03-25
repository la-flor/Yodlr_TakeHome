import React from "react";
import "./Admin.css";
import { useHistory } from "react-router-dom";
import YodlrApi from "../API/api";

const Admin = ({ users, setUsers }) => {
    const history = useHistory();

    async function deleteUser(e) {
        try {
            const id = e.target.id
            await YodlrApi.deleteUser(id);
            const updatedUsers = await YodlrApi.getUsers();
            setUsers(updatedUsers);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="Admin my-3 mx-0">
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
                                <tr className="Admin-userRow" >
                                    <td onClick={() => history.push(`/user/${user.id}`)}>{user.firstName}</td>
                                    <td onClick={() => history.push(`/user/${user.id}`)}>{user.lastName}</td>
                                    <td onClick={() => history.push(`/user/${user.id}`)}>{user.email}</td>
                                    <td onClick={() => history.push(`/user/${user.id}`)}>{user.state}</td>
                                    <td><i id={user.id} onClick={deleteUser} class="fas fa-trash-alt"></i></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}

export default Admin;