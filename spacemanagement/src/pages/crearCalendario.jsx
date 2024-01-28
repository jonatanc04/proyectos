import "../styles/crearCalendario.css";
import FormCalendar from "../comps/FormCalendar";

export default function CrearCalendario() {

  return (
    <div className="container-form-calendar">
      <h1>Formulario de creación de calendario</h1>
      <div className="container-data-form">
        <div className="form-calendar">
          <FormCalendar />
        </div>
        <div className="data-calendar">
          
        </div>
      </div>
    </div>
  );

}