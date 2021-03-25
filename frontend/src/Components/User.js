import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import YodlrApi from "../API/api";
import Alert from "../Helpers/Alert";
import "./User.css";

const User = () => {
    const history = useHistory();
    const goBack = () => {
        history.push("/users")
    }
    const { id } = useParams();

    const [formData, setFormData] = useState({});

    useEffect(() => {
        async function getUserInfo() {
            try {
                let resp = await YodlrApi.getUser(id);
                setFormData(resp);
            } catch (err) {
                console.error("Unable to retrieve user data.", err);
            }
        }
        getUserInfo();
    }, []);


    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();

        let updatedUser;

        try {
            updatedUser = await YodlrApi.updateUser(id, formData);
        } catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(updatedUser);
        setSaveConfirmed(true);
        setFormErrors([]);
    }

    return (
        <div className="User my-5">
            <h1 className="mb-3">User Editor Form</h1>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <h5><label>First Name</label></h5>
                            <input
                                name="firstName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <h5><label>Last Name</label></h5>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <h5><label>Email</label></h5>
                            <input
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <h5><label>State</label></h5>
                            <input
                                name="state"
                                className="form-control"
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>

                        {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null}

                        {saveConfirmed
                            ?
                            <Alert type="success" messages={["Updated successfully."]} />
                            : null}

                        <button
                            className="btn btn-success btn-block mt-4"
                            onClick={handleSubmit} >
                            Save Changes
                        </button>
                        <button
                            onClick={goBack} 
                            className="btn btn-info btn-block">
                                Back
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;