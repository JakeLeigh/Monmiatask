import React from "react";
import "../stylesheets/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h4 className="home-title">
        Jake Leighs rendition of the designs presented
      </h4>
      <hr />
      <p className="home-text">
        Due to the fact that not all pages were shown to be connected to one
        another, I took the libity of creating hot links to each page of the
        design that has been created.
      </p>
      <p className="home-text">
        Some pages can be selected through links such as the notification/login
        and register page.
      </p>
      <hr />
      <Link to="/notifications">Notification Page</Link>
      <br />
      <Link to="/login">Login Page</Link>
      <br />
      <Link to="/register">Register Page</Link>
      <br />
      <Link to="/passwordreset">Forgot Password Page</Link>
      <br />
      <Link to="/savedetails">Save Details Page</Link>
    </div>
  );
};
export default Home;
