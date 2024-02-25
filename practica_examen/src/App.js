import './App.css';
import IniciarSesion from './views/iniciarSesion';
import Principal from './views/principal';
import Header from './comps/header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  const usuarios = [
    {
      username: "jonatan",
      password: "12345678",
      rol: "admin"
    },
    {
      username: "fajardo",
      password: "12345678",
      rol: "admin"
    }
  ]

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<IniciarSesion usuarios={usuarios}></IniciarSesion>}></Route>
          <Route path='/principal' element={<Principal></Principal>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
