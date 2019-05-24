import React from "react";
import "../stylesheets/Details.css";

const Details = () => {
  return (
    <div className="container">
      <div className="saveSplash">
        <i class="save-icon far fa-save fa-5x" />
        <p className="save-title">Enhorabuena Peter!</p>
      </div>
      <p className="save-text">
        Tus datos han sido almacendos en un lugar seguro, podrás volver en
        cualquier momento a tu cuenta para consultarlos.
      </p>
    </div>
  );
};

export default Details;
