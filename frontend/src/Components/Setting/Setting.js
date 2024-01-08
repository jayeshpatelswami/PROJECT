import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Setting = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission logic, such as updating the user settings on the server.
  };
  return (
    <>
      <div
        className="container rounded p-3"
        style={{ backgroundColor: "#9EC8B9" }}
      >
        <div>
          <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />

              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
              />

              <button className="btn btn-primary m-2" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </>
  );
};

export default Setting;
