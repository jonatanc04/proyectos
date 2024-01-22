import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comps/header';
import Footer from './comps/footer';
import Aulas from './pages/aulas';
import Acceso from './pages/acceso';
import User from './pages/user';
import Crear from './pages/crear';
import CrearUsers from './pages/crearUsers';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Aulas />} />
            <Route path='/acceso' element={<Acceso />} />
            <Route path='/user' element={<User/>} />
            <Route path='/crear' element={<Crear/>} />
            <Route path='/crearUsers' element={<CrearUsers/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;