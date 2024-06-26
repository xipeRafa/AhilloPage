
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";



export default function Navbar() {

  const [isActive, setIsActive]=useState(true)

  const windowWidth = window.innerWidth;

  const InWidth =()=>{
    if(windowWidth<999){
      setIsActive(true)
      console.log(windowWidth)
    }
  }


  return (
<>
    <div onClick={()=>setIsActive(!isActive)}  className="v" >
      <div className="menu-bar">
        <div className="uno" />
        <div className="dos" />
        <div className="tres"/>
      </div>
     <p>{isActive ? 'MENU' : '✘'}</p>

    </div>

    <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>
    

        <NavLink to="/"             > Inicio      </NavLink>
        <NavLink to="/informacion"  > Información </NavLink>
        <NavLink to="/gobierno"     > Gobierno    </NavLink>

        <NavLink to="/directorio"   > Directorio  </NavLink>
        <NavLink to="/documentos"   > Documentos  </NavLink>
        <NavLink to="/blog"         > Blog        </NavLink>

        <NavLink to="/galeria"      > Galeria     </NavLink>
        <NavLink to="/diezmo"       > Diezmo      </NavLink>
        <NavLink to="/contacto"     > Contacto    </NavLink>

        <NavLink to="/visitaPastoral"> Visita pastoral </NavLink>
    </div>  

      </>
  );
}





/*  */