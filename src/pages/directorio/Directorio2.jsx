
import { NavLink, useNavigate } from "react-router-dom";
import "./directorio.css"


export default function Directorio() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/AhilloPage/parroquias', {
      //replace: true,
    });
  };


  return (

    <div className="directorio">
      <div className="itemDirectorio" onClick={handleClick}>
          <NavLink className='parroquiasDirectorio' to="/AhilloPage/parroquias">4.- Parroquias y Decanatos</NavLink>
      </div>


      <div className="itemDirectorio" onClick={handleClick}>
          <NavLink className='parroquiasDirectorio' to="/AhilloPage/parroquias">4.- Parroquias y Decanatos</NavLink>
      </div>
    </div>

  );
}








