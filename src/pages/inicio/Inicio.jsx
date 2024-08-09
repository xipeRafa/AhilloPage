
import { NavLink, useNavigate } from "react-router-dom";
import "./inicio.css"


export default function Directorio() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AhilloPage/directorio', {
      //replace: true,
    });
  };


  return (

    <div className="directorio">
      <div className="itemDirectorio" onClick={handleClick}>
          <NavLink className='parroquiasDirectorio' to="/AhilloPage/directorio">4.- Parroquias y Decanatos</NavLink>
      </div>
    </div>

  );
}
