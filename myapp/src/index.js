import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShowName, ShowSurname } from './NameSurname';
import Paco from './Edad';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
  return <div>
    <h1> SOY UN PUTO PRO </h1>
    <h2> LO QUE JUEGO CHAVAL </h2>
    <h3> CON LA COLETA </h3>
  </div>
}

function IsWhite() {

  const white = true;
  return <h1>{white ? 'Is White' : 'Is Not White'}</h1>;

}

function Mostrar() {

  function Suma(a,b) {
    return a+b;
  }

  return <h1>{Suma(19,14)}</h1>;

}

root.render(<>
  <ShowName/>
  <ShowSurname/>
  <Paco.ShowAge2/>
</>);