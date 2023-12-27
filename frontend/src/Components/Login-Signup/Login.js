import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [info, setinfo] = useState({ email: "", password: "" });
  let history = useHistory();

  const handalsubmit = async (e) => {
    e.preventDefault();

    //  const response = await fetch("http://localhost:5000/api/auth/login",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type" : "application/json"
    //     },
    //     body : JSON.stringify({email : info.email , password :info.password})
    //  });
    //  const json = await response.json();

    //  if (json.success) {
    //     localStorage.setItem('token',json.authtoken);
    //     localStorage.setItem('email',info.email);
    history.push("/");
    //  }else{
    //     alert("invalid username or password")
    //  }
  };

  const onchange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container" style={{ color: "white" }}>
        <form
          onSubmit={handalsubmit}
          className="border border-3 m-5 p-3 rounded"
        >
          <fieldset>
            <legend>Login Form </legend>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                autoComplete="username"
                onChange={onchange}
                value={info.email}
                name="email"
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
                autoComplete="current-password"
                onChange={onchange}
                value={info.password}
                name="password"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary my-2">
                Login
              </button>
            </div>
          </fieldset>
        </form>

        <div className="container mx-3 my-4">
          <Link to="/signup">Don't have an Account</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
