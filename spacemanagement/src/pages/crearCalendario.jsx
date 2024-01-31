import "../styles/crearCalendario.css";
import FormCalendar from "../comps/FormCalendar";
import { DatosCalendario } from "../comps/DatosCalendario";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CrearCalendario() {

  const [dates, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setData(res.data);
  }

  const updateData = async () => {
    await getData();
  }

  return (
    <div className="container-form-calendar">
      <h1>Formulario de creación de calendario</h1>
      <div className="container-data-form">
        <div className="form-calendar">
          <FormCalendar dates={dates} updateData={updateData} />
        </div>
        <div className="data-calendar">
          <DatosCalendario dates={dates}/>
        </div>
      </div>
    </div>
  );

}