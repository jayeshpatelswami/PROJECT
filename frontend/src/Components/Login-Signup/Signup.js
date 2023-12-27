import React, { useState } from "react";
// import{ useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const [information, setinformation] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handalsubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:5000/api/auth/createuser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({username : information.username, email : information.email, password : information.password })
    // });
    // const json = await response.json();
    //  console.log(json);
    // if (json.success) {
    // localStorage.setItem('token',json.authtoken);
    // localStorage.setItem('email',information.email);
    history.push("/");
    // } else {
    // alert("invalid username or password");
    // }
  };

  const onchanged = (e) => {
    setinformation({ ...information, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container " style={{ color: "white" }}>
        <form
          onSubmit={handalsubmit}
          className="border border-3 rounded  p-3  my-5"
        >
          <fieldset>
            <legend>SignUp Form</legend>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="username"
                onChange={onchanged}
                value={information.username}
                name="username"
                minLength={4}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                required
                minLength={6}
                onChange={onchanged}
                value={information.email}
                name="email"
                autoComplete="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                minLength={4}
                onChange={onchanged}
                value={information.password}
                name="password"
                autoComplete="current-password"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <div className="container mx-3 my-4">
          <Link to="/login">Already have an Account</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
