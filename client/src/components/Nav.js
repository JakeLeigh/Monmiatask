import React from "react";
import monmia from "../images/monmia(darkbg).png";
import "../stylesheets/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={monmia} />
      </Link>
      <a href="/notifications">
        <i class="fas fa-bell fa-lg" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="link nav-link dropdown-toggle" data-toggle="dropdown">
              Compara
            </a>
            <div className="dropdown-divider" />
            <div className="dropdown-menu">
              <a className="dropdown-item">Cuenta de Ahorro</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Cuenta Bancaria</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Depósitos bancarios</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Hipotecas</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Préstamos personales</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Tarjetas de crédito</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">Corredor de bolsa</a>
              <div className="dropdown-divider" />
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">
              club monmia
            </a>
            <div className="dropdown-divider" />
            <div className="dropdown-menu">
              <a className="dropdown-item">club monmia</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">beneficios del club monmia</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">mScore</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">suscripciones</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">calcula tu mScore</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">registrate</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">calculadora</a>
              <div className="dropdown-divider" />
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">
              El Experto
            </a>
            <div className="dropdown-divider" />
            <div className="dropdown-menu">
              <a className="dropdown-item">guia</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">video</a>
              <div className="dropdown-divider" />
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">
              soporte técnico
            </a>
            <div className="dropdown-divider" />
            <div className="dropdown-menu">
              <a className="dropdown-item">soporte online</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">contacto</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">condiciones generales</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">guia de cookies</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">politica de privacidad</a>
              <div className="dropdown-divider" />
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">
              mi cuenta
            </a>
            <div className="dropdown-divider" />
            <div className="dropdown-menu">
              <a className="dropdown-item">cuadro de mando financiero</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">mis finanzas</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">mi perfil</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">inscribirse</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">ajustes</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item">notificaciones</a>
              <div className="dropdown-divider" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
