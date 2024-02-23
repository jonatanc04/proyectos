import './App.css';
import Opinion from './comps/opiniones';
import datos from './comps/info/info.json';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Opiniones de nuestros mejores alumnos ( top élite )</h1>
        {datos.map( opinion => 
        <Opinion 
          foto = {opinion.foto}
          nombre = {opinion.nombre}
          equipo = {opinion.equipo}
          posicion = {opinion.posicion}
          opinion = {opinion.opinion}
        />
        )}
      </div>
    </div>
  );
}

export default App;
