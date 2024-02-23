import './App.css';
import imagen1 from './img/imagen1.png';
import Boton from './comps/Boton';
import Contador from './comps/Contador';
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0);

  const mas1 = () => {
    setNumClick(numClick+1);
  };

  const menos1 = () => {
    setNumClick(numClick-1);
  };

  const mas10 = () => {
    setNumClick(numClick+10);
  };
  const menos10 = () => {
    setNumClick(numClick-10);
  };

  const reiniciarContador = () => {
    setNumClick(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo' 
          src={imagen1} 
          alt='logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClick={numClick}
        />
        <div className='botones-contenedor'>
        <Boton 
          texto='+1'
          esBotonClick={true}
          gestionClick={mas1}
        />
        <Boton 
          texto='-1'
          esBotonClick={true}
          gestionClick={menos1}
        />
        <Boton 
          texto='+10'
          esBotonClick={true}
          gestionClick={mas10}
        />
        <Boton 
          texto='-10'
          esBotonClick={true}
          gestionClick={menos10}
        />
        </div>
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          gestionClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;