import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comps/header';
import Footer from './comps/footer';
import Aulas from './comps/aulas';
import Acceso from './comps/acceso';
import User from './comps/user';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;