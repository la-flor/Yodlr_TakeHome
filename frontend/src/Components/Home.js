import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    function openSignup() {
        history.push("/signup")
    }

    function openAdmin() {
        history.push("/admin")
    }

    return (
        <div className="Home my-5 mx-0">
            <h1 className="my-5">Your design challenge</h1>
            <button className="btn btn-info m-2" onClick={openSignup}>Registration</button>
            <button className="btn btn-warning m-2" onClick={openAdmin}>Admin</button>
        </div>
    )
}

export default Home;