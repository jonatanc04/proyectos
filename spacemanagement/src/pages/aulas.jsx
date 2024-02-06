import '../styles/aulas.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VistaCalendar } from '../comps/VistaCalendar';

const Aulas = () => {

  const [calendar, setCalendar] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setCalendar(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return ( 
    <div className="aulas">
      {!calendar ? (
        <p>No existe un calendario</p>
      ) : (
        <VistaCalendar calendar={calendar} />
      )}
    </div>
  );
}
 
export default Aulas;