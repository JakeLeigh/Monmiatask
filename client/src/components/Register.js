import React from "react";
import "../stylesheets/Register.css";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    let progressBarStyle = {
      width: "25%"
    };
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item current">Crea tu cuenta</li>
            <li className="breadcrumb-item">Envie su solicitud</li>
            <li className="breadcrumb-item">Seleccione una oferta</li>
          </ol>
        </nav>
        <div className="container">
          <h5 className="register-part-text">Paso 1 de 3: Crea tu cuenta</h5>
          <div className="progress">
            <div
              className="progress-bar "
              role="progressbar"
              style={progressBarStyle}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
          <p className="login-text">
            Estás ya registrado?{" "}
            <Link className="login-text" to="/register">
              <strong>Iniciar sesión</strong>
            </Link>
          </p>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="inputForm form-control form-control-lg"
                id="firstName"
                value="Peter"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="inputForm form-control form-control-lg"
                id="lastName"
                value="Jones"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="inputForm form-control form-control-lg"
                id="email"
                value="Peterjones@gmail.com"
              />
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="inputForm form-control form-control-lg"
                id="telephone"
                value="075989745812"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="inputForm form-control form-control-lg"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                value="xxxxx"
              />
            </div>
            <button type="submit" class="login-btn btn btn-success btn-block">
              SIGUIENTE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
