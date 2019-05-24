import React from "react";

const FinanceData = () => {
  return (
    <div className="container">
      <form>
        <h4>Datos Financieros</h4>
        <br />
        <div class="form-group">
          <label for="desiredAmount">Cantidad deseada</label>
          <input
            type="number"
            class="inputForm form-control form-control-lg"
            id="desiredAmount"
          />
        </div>
        <div class="form-group">
          <label for="term">Plazo</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="term"
          />
        </div>
        <div class="form-group">
          <label for="netIncome">Ingresos netos</label>
          <input
            type="number"
            class="inputForm form-control form-control-lg"
            id="netIncome"
          />
        </div>
        <div class="form-group">
          <label for="payday">Día de pago</label>
          <input
            type="text"
            class="inputForm form-control form-control-lg"
            id="payday"
          />
        </div>
        <div class="form-group">
          <label for="sourceIncome">Fuente de ingresos</label>
          <select
            class="inputForm form-control form-control-lg"
            id="sourceIncome"
          >
            <option>Estudiante</option>
            <option>Prestaciones</option>
            <option>Trabajo de media jornada</option>
            <option>Trabajo jornada completa</option>
            <option>Autónomo</option>
            <option>Jubilado</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="livingPlace">Vivienda</label>
          <select
            class="inputForm form-control form-control-lg"
            id="livingPlace"
          >
            <option>Alquilada</option>
            <option>Comprada</option>
            <option>Con hipoteca</option>
            <option>Sin hipoteca</option>
            <option>Cohabitación</option>
            <option>Viviendo con los padres</option>
            <option>Otro</option>
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

export default FinanceData;
