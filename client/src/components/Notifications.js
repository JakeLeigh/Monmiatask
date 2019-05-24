import React from "react";
import "../stylesheets/Notifications.css";

const Notifications = () => {
  return (
    <div className="container">
      <p className="notification-title">Notificaciones</p>
      <hr />
      <div className="grid-container">
        <div className="grid-item">
          <p className="split-text">Recibidas</p>
        </div>
        <div className="grid-item">
          <p className="split-text">Archivadas</p>
        </div>
      </div>
      <hr />
      <i class="bell-icon fas fa-bell fa-9x" />
      <div>
        <p className="welcome-msg">Peter, bienvenida a tus notificaciones!</p>
        <p className="notification-text">
          Aqui podrás ver las últimas notificaciones relacionadas con tus
          finanzas.
        </p>
        <p className="notification-text">
          También podrás archivar tus notificaciones más importantes.
        </p>
      </div>
    </div>
  );
};

export default Notifications;
