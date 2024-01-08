import './App.css';
import titulo from './img/titulo.png';
import ListaDeTareas from './comps/ListaDeTareas';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div className="app-tareas">
      <div className="contenedor-titulo">
        <img
          src={titulo}
          className="titulo"
          alt="imagen-titlulo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;