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

                <NavLink to="/AhilloPage"> Directorio </NavLink>
                <NavLink to="/AhilloPage/informacion"> Información </NavLink>
                <NavLink to="/AhilloPage/gobierno">    Gobierno </NavLink>

                <NavLink to="/AhilloPage/parroquias"> PGP 2031-2033 </NavLink>

                <NavLink to="/AhilloPage/contacto"> Provincia Eclesiástica de Hermosillo </NavLink>

            </div>
        </div>
    );
}


