import './App.css';
//import ListaDeTareas from '../src/comps/ListaDeTareas';
import titulo from './img/titulo.png';

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
         
      </div>
    </div>
  );
}

export default App;