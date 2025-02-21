



import { useState, useEffect } from "react";


import './parroquias.css'






export default function Parroquias({arrPadres}) {


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


 

 



  return (
    <div className="parroquias">



        <div className='parroquiasButtons'>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('parroquia')}}>Parroquias</button>
            <button onClick={()=>{setSelectState('clasificacion'), setParroquiaState('cuasiparroquia')}}>Cuasiparroquias</button>
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

            <input type='search' placeholder=' Buscar por Nombre' onChange={(e)=>handleFinder(e)}/>
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
              Párroco:<span> {item.parroco}</span>
            </p>
            <p>
              Vicario:<span> {item.vicario}</span>
            </p>

            <p>
              Clasificación:<span> {item.clasificacion}</span>
            </p>
            <p>
              Decanato:<span> {item.decanato}</span>
            </p>

            <hr />

            <p>
              Confesiones:<span> {item.confesiones}</span>
            </p>
            <p>
              Dirección:<span> {item.direccion}</span>
            </p>
            <p>
              Horario de Oficina:<span> {item.oficina}</span>
            </p>
            <p>
              Teléfono:<span> {item.telefono}</span>
            </p>

            <p className={!item.sitioWeb ? 'display-none' : ''}>
              <a href={item.sitioWeb} target='_blank'> Sitio Web </a>
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
              Catequesis Adultos: <span> {item.catesismoAdultos}</span>
            </p>
            <p>
              Catequesis Niños: <span> {item.catesismoNinos}</span>
            </p>

            <hr />

            <p>
              Catequesis Prematrimoniales:<span> {item.preMatrimoniales}</span>
            </p>
            <p>
              Catequesis Prebautismales:<span> {item.preBautismales}</span>
            </p>
            <p>
              Eventos: <span> {item.eventos}</span>
            </p>
            <p>
              Horas Santas: <span> {item.HorasSantas}</span>
            </p>

            <p>
              Fiesta Patronal: <span>{item.fiestaPatronal}</span>
            </p>

            <hr />

            {Object.keys(item.centros).sort().map((el, i) => (
                <div key={i + "koko"} className='borderX'>
                  <p>{el.slice(2).replace("_", " ").replace("_", " ").replace("_", " ").replace('Direccion', 'Dirección')}:<span> {item.centros[el]}</span></p>
                </div>
              ))}


            {Object.keys(item.grupos).sort().map((el, i) => (
                <div key={i + "kok"} className='borderX'>
                  <p>{el.slice(2).replace("_", " ").replace("_", " ").replace("_", " ").replace('Direccion', 'Dirección')}:<span> {item.grupos[el]}</span></p>
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
