import escuela from '../imgs/escuela.jpg';
import '../styles/acceso.css';

function Acceso () {

  const comprobarAcceso = e => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return ( 
    <div className="acceso">
      <div className="formulario">
        <div className='imagen-container'>
          <img src={escuela} alt="error al cargar"></img>
        </div>
        <div className="form-container">
        <form onSubmit={comprobarAcceso}>
          <label>Nombre de usuario:</label>
          <input 
            name="user" 
            type="text" 
            placeholder="Introduce tu nombre de usuario"
          ></input>
          <label>Contraseña:</label>
          <input 
            name="pwd" 
            type="password" 
            placeholder="Introduce tu contraseña"
          ></input>
          <input 
            type="submit"
            defaultValue="Acceder"
            className="button"
          />
          <p id='error'></p>
        </form>
        </div>
      </div>
    </div>
  );
}
 
export default Acceso;