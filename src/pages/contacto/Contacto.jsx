import './contacto.css'
// import ImgContacto from './contacto-min.png'

// export default function Contacto() {
//     return (<>
//       <div className='contactoContainer'>

//             <h4>ARZOBISPO, OBISPOS</h4>
//           <h2>Provincia Eclesiástica de Hermosillo</h2>
        
//         <img src='https://www.arquidiocesisdehermosillo.org/images/arquidiocesis/Ruy_Rendon.jpg' />
//         <img src='https://www.arquidiocesisdehermosillo.org/images/arquidiocesis/Felipe_Pozos.jpg' />
//         <img src='https://www.arquidiocesisdehermosillo.org/images/jesus%20jose.png#joomlaImage://local-images/jesus%20jose.png?width=6245&height=8591' />
//         <img src='https://www.arquidiocesisdehermosillo.org/images/arquidiocesis/Nogales.jpg' />
        
//       </div>
//       <div className='contacto'>

//  <img  src={ImgContacto} />
// </div>

     
//    </> )
//   }





import img1 from './1.png'
import img2 from './2.png'

import img3 from './3.png'
import img4 from './4.png'





import { useState } from "react";





export default function Contacto() {


  const[displayState, setDisplayState]=useState('1')

  return (
    <div className='inicioContainer'>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>Mons Ruy Rendon</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>Mons Rutilo Felipe</button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}>Mons Jesus Jose Herrera</button>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('4')}>Mons Jose Leopoldo</button>
        </div>


        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
            <div>
              <img src={img4} />
            </div>             
            <div>
                   <h2>PAPA FRANCISCO</h2>
                  <h3>Elección</h3>
                  <p>
                            El 13 de marzo de 2013 los millones de cristianos católicos en todo el mundo recibían con 
                            júbilo la noticia de la elección de su nuevo pontífice, 
                            el cardenal Jorge Mario Bergoglio quien eligió como nombre: Francisco
                  </p>
                   <button>
                     BIOGRAFÍA
                   </button>
            </div>                    
        </div>

        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
        <div>
              <img src={img3} />
            </div>  
            
            <div>
                   <h2>MONS. RUY RENDÓN LEAL</h2>
                  <h3>Arzobispo de Hermosillo</h3>
                  <p>
                           El 26 de abril de 2016 es nombrado por el PAPA Francisco como cuarto arzobispo
                            de Hermosillo. Y tomó posesión de la arquidiócesis el 8 de junio de 2016.
                  </p>
                   <button>
                     ARZOBISPO RUY
                   </button>
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>

             <div>
                <img src={img1}/>
            </div>             
            <div>
                  <h2>MONS. JOSÉ ULISES MACIAS SALCEDO</h2>
                  <h3>Arzobispo Emérito de Hermosillo</h3>
                  <p>
                            Nació en León, Guanajuato, el 29 de octubre de 1940.
                            Su ordenación sacerdotal fue en León, Guanajuato, el 10 de abril de 1966.
                            Es nombrado obispo de la Diócesis de Mexicali por el Papa Juan Pablo II.
                            Es nombrado tercer arzobispo de la Arquidiócesis de Hermosillo el 19 de agosto de 1996, por S.S Juan Pablo II.
                            Su renuncia es aceptada el 26 de abril de 2016.
                  </p>
                   <button>
                     ARZOBISPO EMÉRITO
                   </button>

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>

             <div>
                <img src={img2}/>
            </div>             
            <div>
                  <h2>MONS. JOSÉ ULISES MACIAS SALCEDO</h2>
                  <h3>Arzobispo Emérito de Hermosillo</h3>
                  <p>
                            Nació en León, Guanajuato, el 29 de octubre de 1940.
                            Su ordenación sacerdotal fue en León, Guanajuato, el 10 de abril de 1966.
                            Es nombrado obispo de la Diócesis de Mexicali por el Papa Juan Pablo II.
                            Es nombrado tercer arzobispo de la Arquidiócesis de Hermosillo el 19 de agosto de 1996, por S.S Juan Pablo II.
                            Su renuncia es aceptada el 26 de abril de 2016.
                  </p>
                   <button>
                     ARZOBISPO EMÉRITO
                   </button>

            </div> 
        </div>

    </div>
  )
}

  