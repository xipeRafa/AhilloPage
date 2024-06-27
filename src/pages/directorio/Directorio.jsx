
import { NavLink, useNavigate } from "react-router-dom";
import "./directorio.css"


export default function Directorio() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/parroquias', {
      //replace: true,
    });
  };


  return (

    <div className="container">
      <div className="itemDirectorio" onClick={handleClick}>
          <NavLink className='parroquias' to="/parroquias">4.- Parroquias y Decanatos</NavLink>
      </div>
    </div>

  );
}








