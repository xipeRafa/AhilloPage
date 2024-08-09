
import { NavLink, useNavigate } from "react-router-dom";
import "./inicio.css"


export default function Directorio() {

  const navigate = useNavigate();

  const handleClick = (arg) => {
    navigate(`/AhilloPage/${arg}`, {
      //replace: true,
    });
  };


  return (

    <div className="gallery">

      <div onClick={()=>handleClick('presbiterio')}>
          <NavLink to="/AhilloPage/presbiterio">1.- Presbiterio</NavLink>
      </div>


      <div onClick={()=>handleClick('vidaConsagrada')}>
          <NavLink to="/AhilloPage/vidaConsagrada"> 2.- Vida Consagrada</NavLink>
      </div>


      <div onClick={()=>handleClick('organismosLaicales')}>
          <NavLink to="/AhilloPage/organismosLaicales">3.- Organismos Laicales</NavLink>
      </div>


      <div onClick={()=>handleClick('parroquias')}>
          <NavLink to="/AhilloPage/parroquias">4.- Parroquias y Decanatos</NavLink>
      </div>


      <div onClick={()=>handleClick('institucionesEducativas')}>
          <NavLink to="/AhilloPage/institucionesEducativas">5.- Instituciones Educativas</NavLink>
      </div>


      <div onClick={()=>handleClick('obrasSociales')}>
          <NavLink to="/AhilloPage/obrasSociales">6.- Obras Sociales</NavLink>
      </div>


      <div onClick={()=>handleClick('varios')}>
          <NavLink to="/AhilloPage/varios">7.- Varios</NavLink>
      </div>

    </div>
  );
}
