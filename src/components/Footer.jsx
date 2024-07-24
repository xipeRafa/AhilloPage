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
                <div class="container__footer">
                    <div class="box__footer">
                        <div class="logo">
                            <img src="https://www.arquidiocesisdehermosillo.org/images/chayo/AH-08.png" alt="fff" />
                        </div>
                    </div>
                    <div class="box__footer tar">

                        <a href="https://www.google.com">Desarrollo</a>
                        <a href="#">Marketing</a>
                        <a href="#">Desarrollo</a>
                        <a href="#"> Desarrollo</a>
                    </div>

                    <div class="box__footer tac">

                        <a href="#">Acerca de</a>
                        <a href="#">Trabajos</a>
                        <a href="#">Procesos</a>
                        <a href="#">Servicios</a>
                    </div>

                    <div class="box__footer">

                        <a href="#">
                            {" "}
                            <i class="fab fa-facebook-square"></i> Facebook
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter-square"></i> Twitter
                        </a>
                        <a href="#">
                            <i class="fab fa-youtube"></i> Youtube
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram-square"></i> Instagram
                        </a>
                    </div>
                </div>

                <div class="box__copyright">
                    <p>
                        Todos los derechos reservados © 2024
                    </p>
                </div>
            </footer>
        </div>
    );
}
