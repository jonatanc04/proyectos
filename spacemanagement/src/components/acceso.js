import escuela from '../imgs/escuela.jpg';
import '../styles/acceso.css';

const Acceso = () => {
  return ( 
    <div className="acceso">
      <div className="formulario">
        <div className='imagen-container'>
          <img src={escuela} alt="error al cargar"></img>
        </div>
        <form>
          <label>Nombre de usuario:</label>
          <input name="user" type="text"></input>
          <label>Contraseña:</label>
          <input name="pwd" type="password"></input>
          <input 
            type="submit"
            defaultValue="Acceder"
            className="button"
          />
          <p id='error'></p>
        </form>
      </div>
    </div>
  );
}
 
export default Acceso;