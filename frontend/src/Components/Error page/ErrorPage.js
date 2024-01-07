import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="container p-4 rounded"
      style={{ backgroundColor: "#9EC8B9" }}
    >
      <h1>ErrorPage</h1>
      <Link to="/" className="btn btn-primary p-3 m-2">
        Go To Home Page
      </Link>
    </div>
  );
};
export default ErrorPage;
