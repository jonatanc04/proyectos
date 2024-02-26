import './App.css';
import IniciarSesion from './views/iniciarSesion';
import Principal from './views/principal';
import Header from './comps/header';
import ProtectedRoutes from './comps/ProtectedRoutes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useState } from 'react';
import Administrar from './views/administrar';

function App() {

  const usuarios = [
    {
      username: "jonatan",
      password: "12345678",
      rol: ['user']
    },
    {
      username: "fajardo",
      password: "12345678",
      rol: ['admin']
    }
  ]

  const [usuario, setUsuario] = useState(null);

  const manejarLogin = usuario => {
    setUsuario(usuario);
  }

  return (
    <Router>
      <div className="App">
        <Header usuario={usuario} manejarLogin={manejarLogin} />
        <Routes>
          <Route path='/' element={<IniciarSesion usuarios={usuarios} manejarLogin={manejarLogin} />} />
          <Route element={<ProtectedRoutes estaLogueado={usuario}></ProtectedRoutes>}>
            <Route path='/principal' element={<Principal />} />
          </Route>

          <Route path='/administrar' element={
            <ProtectedRoutes
              estaLogueado={!!usuario && usuario.rol.includes('admin')}
              redirectTo='/principal'
            >
              <Administrar />
            </ProtectedRoutes>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
