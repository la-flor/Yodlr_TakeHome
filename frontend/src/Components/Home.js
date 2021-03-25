import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    function openSignup() {
        history.push("/signup")
    }

    function openAdmin() {
        history.push("/users")
    }

    return (
        <div className="Home my-3 mx-0">
            <h1 className="my-5">Your design challenge</h1>
            <button className="btn btn-block btn-info p-3" onClick={openSignup}>Signup</button>
            <button className="btn btn-block btn-warning p-3" onClick={openAdmin}>Admin</button>
        </div>
    )
}

export default Home;