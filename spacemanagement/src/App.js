import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Aulas from './components/aulas';
import Acceso from './components/acceso';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Aulas />} />
            <Route path='/acceso' element={<Acceso />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;