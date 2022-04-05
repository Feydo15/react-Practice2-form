import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [form, setForm] = useState({
    firstname: "",
  });

  const [list, setList] = useState([]);

  const handleChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, form]);
    setForm({
      firstname: "",
    });
  };

  return (
    <div className="App">
      <h1>My Practice Form</h1>
      <form onSubmit={handleSubmit} className="wrapper">
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
      <ul>
        {list.map((item, key) => {
          return <li key={key}>{item.firstname}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
