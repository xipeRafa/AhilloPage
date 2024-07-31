import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { useState, useEffect } from "react";

import "./parroquias.css";

export default function Parroquias() {

  const [arrPadres, setArrPadres] = useState([])


  const [parroquiaState, setParroquiaState] = useState('parroquia');


  const [selectState, setSelectState] = useState('clasificacion');

  const [finderState, setFinderState]=useState('')



  const captureSelect = (e) => {
      setSelectState('decanato')
      setParroquiaState(e.target.value);   
  }

  const handleFinder = (e) =>{

      setFinderState(e.target.value)

      if(finderState.length > 3){
          setSelectState('nombre')
          let a = arrPadres.filter((el) => el.nombre.indexOf(e.target.value.replace(/\b\w/g, l => l.toUpperCase())) > -1)
          setParroquiaState(a[0].nombre)
      }
      
  }


 

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



        <div className='parroquiasButtons'>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('parroquia')}}>Parroquias</button>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('cuasiparroquia')}}>Causiparroquias</button>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('santuario')}}>Santuarios</button>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('rectoria')}}>Rectorias</button>

            <select name="select" onChange={captureSelect}>
                <option selected disabled>Buscar por Decanato</option>

                <option value="Nuestra Señora de la Asunción">Nuestra Señora de la Asunción</option>
                <option value="Sagrado Corazón de Jesús">Sagrado Corazón de Jesús</option>
                <option value="Nuestra Señora de Fátima">Nuestra Señora de Fátima</option>

                <option value="Inmaculada Concepción de María">Inmaculada Concepción de María</option>
                <option value="San Isidro Labrador">San Isidro Labrador</option>
                <option value="Nuestra Señora de la Candelaria">Nuestra Señora de la Candelaria</option>

                <option value="Santo Niño de Atocha">Santo Niño de Atocha</option>
                <option value="La Asunción, Pueblos del Río">La Asunción, Pueblos del Río</option>
                <option value="Santa María Magdalena">Santa María Magdalena</option>
            </select>

            <input type='search' placeholder=' buscar' onChange={(e)=>handleFinder(e)}/>
        </div>


<hr />

      {arrPadres.filter(el => el[selectState] == parroquiaState).map((item, i) => (

        <div key={i}>

          <div style={{ backgroundImage: `url(${item.imgUrl})`}} className="imgParroquias" />

          <div className="listParroquias">
             <h5>Ultima Actualización: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</h5> 
            <h5>{/* {milisegundosComoFecha(item.duration)} */} </h5>
            <p>{item.email}</p>
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
              Horario de Oficina:<span> {item.oficina}</span>
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
                <div key={i + "koko"} className='borderX'>
                  <p>{el.slice(2).replace("_", " ").replace("_", " ").replace("_", " ")}:<span> {item.centros[el]}</span></p>
                </div>
              ))}


            {Object.keys(item.grupos).sort().map((el, i) => (
                <div key={i + "kok"} className='borderX'>
                  <p>{el.slice(2).replace("_", " ").replace("_", " ").replace("_", " ")}:<span> {item.grupos[el]}</span></p>
                </div>
              ))}


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
