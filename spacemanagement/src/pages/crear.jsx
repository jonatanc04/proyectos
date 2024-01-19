import '../styles/crear.css';
import escuela from '../imgs/escuela.jpg';
import FormCrear from '../comps/formCrear';

const Crear = () => {
  return ( 
    <div className="crearAula">
      <div className='imagenAula'>
        <img src={escuela} alt="error al cargar"></img>
      </div>
      <div className='formularioAulas'>
        <FormCrear />
      </div>
      <div className='listadoAulas'>
        
      </div>
    </div>
  );
}
 
export default Crear;