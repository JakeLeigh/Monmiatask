import React from "react";
import "../stylesheets/Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <p>Iniciar sesión</p>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              aria-describedby="passwordHelp"
              placeholder="Contraseña"
            />
            <small id="passwordHelp">Has olvidado de tu contraseña?</small>
          </div>
          <button type="submit" class="login-btn btn btn-success btn-block">
            INCIAR SESIÓN
          </button>
        </form>

        <p>o login con</p>
      </div>
    );
  }
}

export default Login;
