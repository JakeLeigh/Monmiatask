import React from "react";
import "../stylesheets/Login.css";
import Facebook from "../images/fb.png";
import Instagram from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Twitter from "../images/twitter.png";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <p>Iniciar sesión</p>
          <div class="form-group">
            <input
              type="email"
              class="inputForm form-control form-control-lg"
              id="exampleInputEmail1"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="inputForm form-control form-control-lg"
              id="exampleInputPassword1"
              aria-describedby="passwordHelp"
              placeholder="Contraseña"
            />
            <Link to="/passwordreset">
              <small id="passwordHelp">Has olvidado de tu contraseña?</small>
            </Link>
          </div>
          <Link to="/notifications">
            <button class="login-btn btn btn-success btn-block">
              INCIAR SESIÓN
            </button>
          </Link>
        </form>
        <p className="login-text">o login con</p>
        <hr />
        <div className="grid-container">
          <div className="grid-item">
            <a href="https://www.facebook.com">
              <img className="socialIcon" src={Facebook} />
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.instagram.com">
              <img className="socialIcon" src={Instagram} />
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.linkedin.com">
              <img className="socialIcon" src={Linkedin} />
            </a>
          </div>
          <div className="grid-item">
            <a href="https://www.twitter.com">
              <img className="socialIcon" src={Twitter} />
            </a>
          </div>
        </div>
        <p className="login-text">
          No estás registrado?
          <Link className="login-text" to="/register">
            <strong>REGÍSTRATE</strong>
          </Link>
        </p>
      </div>
    );
  }
}

export default Login;
