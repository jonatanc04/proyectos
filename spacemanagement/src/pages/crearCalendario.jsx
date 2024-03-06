import "../styles/crearCalendario.css";
import FormCalendar from "../comps/FormCalendar";
import { DatosCalendario } from "../comps/DatosCalendario";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function CrearCalendario() {

  const [dates, setDates] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setDates(res.data);
  }

  const updateData = async () => {
    await getData();
  }

  const deleteAllData = async () => {
    try {
      await axios.delete("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
      await axios.delete("http://localhost/proyectos/spacemanagement/api/sReservas/gestionReservas.php");
      await updateData();
    } catch (error) {
      console.error("Error al borrar todos los datos:", error);
    }
  };

  const deleteLastLine = async () => {
    try {
      const lastSpace = dates[dates.length - 1].espacio;
      await axios.delete(`http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php?espacio=${lastSpace}`);
      await updateData();
    } catch (error) {
      console.error("Error al borrar la última línea:", error);
    }
  };
  
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
        <button onClick={deleteAllData}>Borrar todo</button>
        <button onClick={deleteLastLine}>Eliminar últ. línea</button>
      </div>
    </div>
  );
}