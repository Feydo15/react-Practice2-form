import React, { useState } from "react";
import List from "./components/List.jsx";
import logo from "./images/icon.png";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
  });

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname } = form;
    if (firstname === "" || lastname === "") {
      return;
    } else {
      setList([...list, form]);
    }
    setForm({
      firstname: "",
      lastname: "",
    });
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        maxWidth: "500px",
        margin: "0 auto",
        border: "5px solid #e6e6e6",
        padding: "40px 25px",
        marginTop: "50px",
        backgroundColor: "lightgrey",
      }}
    >
      <h1>My Practice Form</h1>
      <div><img src={logo} style={{ maxWidth: "200px" }} alt="logo"/></div> 

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col, m-5">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
            ></input>
            <br></br>
          </div>
          <div className="col, m-5">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <br></br>
        <button type="submit">submit</button>
      </form>
      <List list={list} />
    </div>
  );
};

export default App;
