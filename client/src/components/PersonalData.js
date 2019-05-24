import React from "react";
import "../stylesheets/PersonalData.css";

const PersonalData = () => {
  return (
    <div className="container">
      <form>
        <h4>Datos Personales</h4>
        <br />
        <div class="form-group">
          <label for="firstName">Nombre</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="firstName"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Apellidos</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="lastName"
          />
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Fecha de nacimiento</label>
          <input
            type="date"
            class="inputForm form-control form-control-lg"
            id="dateOfBirth"
          />
        </div>
        <div class="form-group">
          <label for="sex">Sexo</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="sex"
          />
        </div>
        <div class="form-group">
          <label for="civilStatus">Estado civil</label>
          <select
            class="inputForm form-control form-control-lg"
            id="civilStatus"
          >
            <option>Soltero</option>
            <option>Casado</option>
            <option>Separado</option>
            <option>Divorciado</option>
            <option>Viudo</option>
            <option>Viviendo con los padres</option>
          </select>
        </div>
        <div class="form-group">
          <label for="dni">DNI</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="dni"
          />
        </div>
        <div class="form-group">
          <label for="type">Tipo de via</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="type"
          />
        </div>
        <div class="form-group">
          <label for="home">Domicilio</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="home"
          />
        </div>
        <div class="form-group">
          <label for="num">Número</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="num"
          />
        </div>
        <div class="form-group">
          <label for="postal">Código postal</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="postal"
          />
        </div>
        <div class="form-group">
          <label for="locality">Municipio o localidad</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="locality"
          />
        </div>
        <div class="form-group">
          <label for="city">Ciudad</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="city"
          />
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            class="inputForm form-control form-control-lg"
            id="email"
          />
        </div>
        <div class="form-group">
          <label for="telephone">Teléfono</label>
          <input
            type="tel"
            class="inputForm form-control form-control-lg"
            id="telephone"
          />
        </div>
        <div class="form-group">
          <label for="iban">IBAN</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="iban"
            placeholder="ES6621000418401234567891"
          />
        </div>
        <div class="form-group">
          <label for="studies">Nivel de estudios terminados</label>
          <select class="inputForm form-control form-control-lg" id="studies">
            <option>Sin estudios</option>
            <option>Estuidos primarios o equivalentes</option>
            <option>Estuidos secundarios o equivalentes</option>
            <option>Enseñanza Profesional de 2 grado</option>
            <option>Enseñanzas profesionales superiores</option>
            <option>Estudios universitarios o equivalentes</option>
          </select>
        </div>
        <br />
        <button type="button" class="save-btn login-btn btn btn-secondary">
          GUARDAR
        </button>
        <button type="submit" class="following-btn login-btn btn btn-success">
          SIGUIENTE
        </button>
      </form>
    </div>
  );
};
export default PersonalData;
