import React, { useState } from "react";
import "./Signup.css";
import { useHistory } from "react-router-dom";

function Signup({ signUp }) {
    const history = useHistory();
    const [email, setEmail] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        signUp(email.trim());
        history.push("/admin");
    }

    function handleChange(evt) {
        setEmail(evt.target.value);
    }

    return (
        <div className="Signup my-5 mx-0">
            <h1 className="my-5">Yodlr Registration Portal</h1>
            <form className="Signup-form form-inline" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    className="form-control form-control-lg flex-grow-1 ml-3"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <button type="submit" className="Signup-btn btn btn-lg btn-info m-1">
                    Signup
            </button>
            </form>
            <a className="Signup-adminlink" href="/admin">Admin Page</a>
        </div>
    );
}

export default Signup;