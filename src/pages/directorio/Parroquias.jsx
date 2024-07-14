import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { useState, useEffect } from "react";

import "./parroquias.css";

export default function Parroquias() {
  const [arrPadres, setArrPadres] = useState([]);

  console.log(arrPadres);

  useEffect(() => {
    const data = collection(db, "auctions");
    getDocs(data).then((resp) => {
      //console.log(resp.docs[0].id)
      //console.log(resp.docs[0].data())
      setArrPadres(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="parroquias">

      {arrPadres.map((item, i) => (

        <div key={i}>

          <div style={{ backgroundImage: `url(${item.imgUrl})`}} className="imgParroquias" />

          <div className="listParroquias">
            {/* <h5>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</h5> */}
            <h5>{/* {milisegundosComoFecha(item.duration)} */} </h5>
            <h5>{item.email}</h5>
            <hr />

            <p>
              Nombre:<span> {item.nombre}</span>
            </p>
            <p>
              Parroco:<span> {item.parroco}</span>
            </p>
            <p>
              Vicario:<span> {item.vicario}</span>
            </p>

            <p>
              Clasificacion:<span> {item.clasificacion}</span>
            </p>
            <p>
              Decanato:<span> {item.decanato}</span>
            </p>

            <hr />

            <p>
              Confesiones:<span> {item.confesiones}</span>
            </p>
            <p>
              Direccion:<span> {item.direccion}</span>
            </p>
            <p>
              Telefono:<span> {item.telefono}</span>
            </p>

            <p>
              Sitio Web:<span> {item.sitioWeb}</span>
            </p>

            <hr />

            <p>
              Horario de Misas Lunes: <span> {item.horarioDeMisasLunes}</span>
            </p>
            <p>
              Horario de Misas Martes: <span> {item.horarioDeMisasMartes}</span>
            </p>
            <p>
              Horario de Misas Miercoles: <span> {item.horarioDeMisasMiercoles}</span>
            </p>

            <p>
              Horario de Misas Jueves:<span> {item.horarioDeMisasJueves}</span>
            </p>
            <p>
              Horario de Misas Viernes: <span> {item.horarioDeMisasViernes}</span>
            </p>
            <p>
              {" "}
              Horario de Misas Sabado: <span> {item.horarioDeMisasSabado}</span>
            </p>

            <p>
              Horario de Misas Domingo: <span> {item.horarioDeMisasDomingo}</span>
            </p>

            <hr />

            <p>
              Catesismo Adultos: <span> {item.catesismoAdultos}</span>
            </p>
            <p>
              Catesismo Niños: <span> {item.catesismoNinos}</span>
            </p>

            <hr />

            <p>
              Platicas Prematrimoniales:<span> {item.preMatrimoniales}</span>
            </p>
            <p>
              Platicas Prebautismales:<span> {item.preBautismales}</span>
            </p>
            <p>
              Eventos: <span> {item.eventos}</span>
            </p>

            <p>
              Fiesta Patronal: <span>{item.fiestaPatronal}</span>
            </p>

            <hr />

            {Object.keys(item.centros).sort().map((el, i) => (
                <p key={i + "koko"}>
                  {el}:<span> {item.centros[el]}</span>
                </p>
              ))}

            <hr />

            {Object.keys(item.grupos).sort().map((el, i) => (
                <p key={i + "kok"}>
                  {el}:<span> {item.grupos[el]}</span>
                </p>
              ))}

            <hr />

            <p>
              Comentarios:<span> {item.comentarios}</span>
            </p>

            <hr />

          </div>

        </div>

      ))}

    </div>
  )
}
