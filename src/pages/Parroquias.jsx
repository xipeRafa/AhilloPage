import { getDocs, collection } from 'firebase/firestore'
import db from '../firebase/firebaseConfig'
import { useState, useEffect } from 'react';


export default function Parroquias() {

  const [arrPadres, setArrPadres] = useState([])

  useEffect(() => {
    const data = collection(db, 'auctions')
    getDocs(data).then((resp) => {
      //console.log(resp.docs[0].id)
      //console.log(resp.docs[0].data())
      setArrPadres(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
    })

  }, [])

    return (
      <div >
        
        {arrPadres.map((el, i) => (
        <div key={i} className='item'> 
            <div className='img'>

            <img src={el.imgUrl} alt='padre' />
            </div>

            <div className='texto'>
                <h3>{el.nombre}</h3>
                <p>Decanato: {el.decanato}</p>
                <p>Parroco: {el.parroco}</p>
                <p>Vicario: {el.vicario}</p>

                <p>Direccion: {el.direccion}</p>
                <p>Telefono: {el.telefono}</p>
                <p>Sitio Web: {el.sitioWeb}</p>
            </div>

            <div className='texto'>
                <p>Misa Lunes a Viernes: {el.horarioDeMisasLV}</p>
                <p>Misa Sabados: {el.horarioDeMisasSabado}</p>
                <p>Misa Domingos: {el.horarioDeMisasDomingo}</p>

                <p>Servicios: {el.servicios}</p>
                <p>Confeciones: {el.confesiones}</p>
                <p>Sacramentos: {el.sacramentos}</p>
            </div>

            <div className='texto'> 
                <p>Eventos: {el.eventos}</p>
                <p>Actividades: {el.actividades}</p>
                <p>Centros: {el.centros}</p>

                <p>Horario Centros: {el.horarioDeCentros}</p>
                <p>Comentarios: {el.comentarios}</p>
            </div>
    
        </div>
      ))}
      </div>
    )
  }
  