import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Navigation/Routes";
import YodlrApi from "./API/api";
import Navbar from "./Navigation/Navbar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(function loadUserInfo() {
    async function getUsers() {
      try {
        const usersList = await YodlrApi.getUsers();
        setUsers(usersList);
      } catch (err) {
        console.error("Unable to retrieve users data.", err);
      }
    }

    getUsers()
  }, []);

  async function signUp(email) {
    try {
      const newUser = await YodlrApi.signUp(email);
      setUsers([...users, newUser]);
    } catch (err) {
      console.error("Unable to submit new user data.", err);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <Navbar />
            <Routes users={users} setUsers={setUsers} signUp={signUp} />
          </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
