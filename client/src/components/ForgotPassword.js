import React from "react";
import { Link } from "react-router-dom";
import Lock from "../images/lock.png";
import "../stylesheets/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="container">
      <h4 className="forgot-text">Contraseña olvidada</h4>
      <img className="lock-img" src={Lock} />
      <p className="main-text">
        No te preocupes! Introduce tu correo electrónico <br /> y te enviaremos
        un email para restablecer <br />
        tu contraseña:
      </p>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="inputForm form-control form-control-lg"
            id="email"
            aria-describedby="passwordHelp"
            placeholder="Correo electrónico"
          />
        </div>
        <button
          type="submit"
          className="login-btn forgot-btn btn btn-success btn-block"
        >
          SOLICITAR NUEVA CONTRASEÑA
        </button>
      </form>
      <p className="notReceivedText">NO HE RECIBIDO EL CORREO</p>
    </div>
  );
};

export default ForgotPassword;
