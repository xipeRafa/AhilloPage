import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <p className='menuX'>{isActive ? "MENU" : "✘"}</p>
            </div>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>

                <NavLink to="/AhilloPage"> Inicio </NavLink>
                <NavLink to="/AhilloPage/informacion"> Información </NavLink>
                <NavLink to="/AhilloPage/gobierno">    Gobierno </NavLink>

                <NavLink to="/AhilloPage/directorio"> Directorio </NavLink>
                <NavLink to="/AhilloPage/documentos"> Documentos </NavLink>
                <NavLink to="/AhilloPage/blog">       Blog </NavLink>

                <a href='https://www.flickr.com/photos/193091184@N03/albums' target='_blanck'>Galeria</a>
                <a href='https://www.diezmohmo.com' target='_blanck'>Diezmo</a>

                <NavLink to="/AhilloPage/contacto"> Contacto </NavLink>

                <NavLink to="/AhilloPage/visitaPastoral"> Visita pastoral </NavLink>

            </div>
        </div>
    );
}


