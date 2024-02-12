import '../styles/aulas.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VistaCalendar } from '../comps/VistaCalendar';

const Aulas = () => {

  const [calendar, setCalendar] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [aulas, setAulas] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setCalendar(res.data);
  }

  const getReservas = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sReservas/gestionReservas.php");
    setReservas(res.data);
  }

  const getAulas = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sClases/gestionClases.php");
    setAulas(res.data);
  }

  useEffect(() => {
    getData();
    getReservas();
    getAulas();
  }, []);

  return ( 
    <div className="aulas">
      {!calendar ? (
        <p>No existe un calendario</p>
      ) : (
        <VistaCalendar calendar={calendar} reservas={reservas} aulas={aulas}/>
      )}
    </div>
  );
}
 
export default Aulas;