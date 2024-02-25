import FormInicio from "../comps/formInicio";
import "../styles/iniciarSesion.css";

export default function IniciarSesion({ usuarios }) {

  return (
    <div className="principal-sesion">
      <h1>Iniciar Sesión</h1>
      <FormInicio usuarios={usuarios}></FormInicio>
    </div>
  );
}
