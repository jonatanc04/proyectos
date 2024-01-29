import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Header from './comps/Header';
import Footer from './comps/Footer';
import Aulas from './pages/aulas';
import Acceso from './pages/acceso';
import User from './pages/user';
import CrearAulas from './pages/crearAulas';
import CrearUsers from './pages/crearUsers';
import NotFound from './pages/NotFound';
import CrearCalendario from './pages/crearCalendario';

function App() {

  const cookies = new Cookies(null, { path: '/' });

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Aulas />} />
            <Route path='/acceso' element={<Acceso />} />
            {
              cookies.get('user') !== undefined ? (
                <>
                  <Route path='/user' element={<User/>} />
                  <Route path='/crearAulas' element={<CrearAulas/>} />
                  <Route path='/crearUsers' element={<CrearUsers/>} />
                  <Route path='/crearCalendario' element={<CrearCalendario/>} />
                </>
              ) : (<></>)
            }
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;