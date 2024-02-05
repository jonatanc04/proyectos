import '../styles/aulas.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VistaCalendar } from '../comps/VistaCalendar';

const Aulas = () => {

  const [calendar, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return ( 
    <div className="aulas">
      <VistaCalendar calendar={calendar} />
    </div>
  );
}
 
export default Aulas;