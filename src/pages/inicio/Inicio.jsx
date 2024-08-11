
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

    {/*<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />*/}

      <div 
          onClick={()=>handleClick('presbiterio')} 
          className="imgVida"
          style={{backgroundImage: `url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/76_presbiterio.JPG')`}}>
              <NavLink to="/AhilloPage/presbiterio">Presbiterio</NavLink>
      </div>



      <div onClick={()=>handleClick('vidaConsagrada')}  className="imgVida"
          style={{backgroundImage: `url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/90_consagrada%20general.JPG')`}}>
          <NavLink to="/AhilloPage/vidaConsagrada">  Vida Consagrada</NavLink>
      </div>


      <div onClick={()=>handleClick('organismosLaicales')}  className="imgVida"
          style={{backgroundImage: `url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/93_laicos.png')`}}>
          <NavLink to="/AhilloPage/organismosLaicales"> Organismos Laicales</NavLink>
      </div>


      <div onClick={()=>handleClick('parroquias')}  className="imgVida"
          style={{backgroundImage: ` url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/84_catedral.jpg')`}}>
          <NavLink to="/AhilloPage/parroquias">Parroquias y Decanatos</NavLink>
      </div>


      <div onClick={()=>handleClick('institucionesEducativas')}  className="imgVida"
          style={{backgroundImage: ` url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/94_SEMINARIO%202023.png')`}}>
          <NavLink to="/AhilloPage/institucionesEducativas">Instituciones Educativas</NavLink>
      </div>


      <div onClick={()=>handleClick('obrasSociales')}  className="imgVida"
          style={{backgroundImage: ` url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/95_obra%20pagina.png')`}}>
          <NavLink to="/AhilloPage/obrasSociales">Obras Sociales</NavLink>
      </div>


      <div onClick={()=>handleClick('varios')}  className="imgVida"
          style={{backgroundImage: ` url('https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/96_casa%20y%20libros.png')`}}>
          <NavLink to="/AhilloPage/varios"> Varios</NavLink>
      </div>

    </div>
  );
}
