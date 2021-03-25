import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Signup from "../Components/Signup";
import Home from "../Components/Home";
import Admin from "../Components/Admin";
import User from "../Components/User";

function Routes({ signUp, users, setUsers }) {

    return (
        <Switch>
            <Route exact path="/signup">
                <Signup signUp={signUp} />
            </Route>
            <Route exact path="/users">
                <Admin users={users} setUsers={setUsers} />
            </Route>
            <Route exact path="/user/:id">
                <User />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;