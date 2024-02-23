import './App.css';
import Boton from '../src/comps/Boton';
import Pantalla from './comps/Pantalla';
import imagen from "../src/img/imagen.png";

function App() {

  const gestionClick = () => {

  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo' 
          src={imagen} 
          alt='logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Pantalla 
          resultado={0}
        />
        <Boton 
          texto='1'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='2'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='3'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='+'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='4'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='5'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='6'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='-'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='7'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='8'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='9'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='*'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='='
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='0'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='.'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='/'
          esBotonClick={true}
          gestionClick={gestionClick}
        />
        <Boton 
          texto='Borrar'
          esBotonClick={false}
          gestionClick={gestionClick}
        />
      </div>
    </div>
  );
}

export default App;
