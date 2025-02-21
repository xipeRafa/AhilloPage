import "./footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="row">
                <div>
                    <p>ARZOBISPADO DE HERMOSILLO </p>
                    <p>Tel: 662 213 21 38; 662 213 13 27</p>
                    <a href="">arzobispado@arquidiocesisdehermosillo.org</a>
                </div>
                <div>
                    <p>TRIBUNAL ECLESIÁSTICO </p>

                    <p>Tel: 662 212 54 05</p>
                    <a href="" className="email">
                        tribunaleclesiastico@arquidiocesisdehermosillo.org
                    </a>
                </div>
                <div>
                    <p>ECONOMÍA DIOCESANA </p>
                    <p>Tel: 662 213 30 14</p>
                    <a href="">economia@arquidiocesisdehermosillo.org</a>
                </div>
            </div>

            <hr className="hr-Footer" />

            <footer>



            <div className="container__footer">
                <div className="box__footer tar">

<a href="https://www.google.com">Historia</a>
<a href="#">Territorio</a>
<a href="#">Arzobispo</a>
<a href="#"> Gobierno</a>
</div>
                   
                    <div className="box__footer tar">

                        <a href="https://www.google.com">Contacto</a>
                        <a href="#">Aviso de Privacidad</a>
                       
                        <a href="#">La Santa Sede</a>
                        <a href="#">CELAM</a>
                    </div>

                    <div className="box__footer tac">
                         <a href="#">Curia Administrativa</a>
                        <a href="#"> Curia de Justicia</a>
                        <a href="#">Curia Consultiva</a>
                        <a href="#">Curia Pastoral</a>
                        
                    </div>

                    <div className="box__footer">

                        <a href="#">
                            {" "}
                            <i className="fab fa-facebook-square"></i> Facebook <span className='redSocial'> (Arquidiócesis)</span>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter-square"></i> Twitter <span className='redSocial'>(Arquidiócesis)</span>  
                        </a>
                        <a href="#">
                            <i className="fab fa-youtube"></i> Youtube
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram-square"></i> Instagram
                        </a>
                    </div>
                </div>

















                
                <div className="container__footer">
                    <div className="box__footer">
                        <div className="logo">
                            <img src="https://www.arquidiocesisdehermosillo.org/images/chayo/AH-08.png" alt="fff" />
                        </div>
                    </div>
                    <div className="box__footer tar">

                        <a href="#">Episcopado Mexicano</a>
                        <a href="#">Vatican News Español</a>
                        <a href="#">En Marcha</a>
                        <a href="#"> Seminario Mayor</a>
                    </div>

                    <div className="box__footer tac">

                        <a href="#">Vicaría de Pastoral </a>
                        <a href="#">Inicio</a>
                        <a href="#">----</a>
                        <a href="#">----</a>
                    </div>

                    <div className="box__footer">

                        
                        <a href="#">
                            <i className="fab fa-facebook-square"></i> Facebook <span className='redSocial'>(Arzobispo)</span>
                        </a>
                        
                        <a href="#">
                            <i className="fab fa-twitter-square"></i> Twitter <span className='redSocial'>(Arzobispo)</span>
                        </a>
                        <a href="#">
                            <i className="fab fa-youtube"></i> Youtube 
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram-square"></i> Instagram
                        </a>
                    </div>
                </div>












                <div className="box__copyright">
                    <p>
                        Todos los derechos reservados © 2024
                    </p>
                </div>
            </footer>
        </div>
    );
}
