import React from "react";

const Notifications = () => {
  return (
    <div className="container">
      <p>Notificaciones</p>
      <hr />
      <div className="grid-container">
        <div className="grid-item">
          <p>
            <strong>Recibidas</strong>
          </p>
        </div>
        <div className="grid-item">
          <p>
            <strong>Archivadas</strong>
          </p>
        </div>
      </div>
      <hr />
      <i className="" />
      <div>
        <p>Peter, bienvenida a tus notificaciones!</p>
        <p>
          Aqui podrás ver las últimas notificaciones relacionadas con tus
          finanzas.
        </p>
        <p>También podrás archivar tus notificaciones más importantes.</p>
      </div>
    </div>
  );
};

export default Notifications;
