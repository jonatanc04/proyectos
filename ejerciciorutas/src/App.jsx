import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Homepage from './paginas/Homepage';
import Contact from './paginas/Contact';
import UsPage from './paginas/UsPage';
import UserPage from './paginas/UserPage';
import NotFound from './paginas/NotFound';
import Nav from './comps/nav';
import Dashboard from './paginas/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='container mt-5'>
          <Nav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/nosotros' element={<UsPage />} />
            <Route path='/nosotros/:id' element={<UserPage />} />
            <Route path='/nosotras' element={<Navigate to='/nosotros' />} />
            <Route path='/dashboard/*' element={<Dashboard/>}>
              <Route path='bienvenido' element={<h3>BIENVENIDO</h3>} />
              <Route path='despedida' element={<h3>HASTA ADIOS</h3>} />
            </Route>
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
