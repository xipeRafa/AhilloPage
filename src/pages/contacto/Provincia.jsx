import './provincia.css'

import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'

import { useState } from "react";

export default function Provincia() {


  const[displayState, setDisplayState]=useState('1')

  return (
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>ARZOBISPO, OBISPOS</h4>
            <h2>Provincia Eclesiástica de Hermosillo</h2>
        </div>


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
                   <h2>ARZOBISPO DE HERMOSILLO</h2>
                  <h3>Mons. Ruy Rendón Leal</h3>
                  <p>
                            arzobispo@arquidiocesisdehermosillo.org
                  </p>
                   <button>
                     Arquidiócesis de Hermosillo 
                   </button>
            </div>                    
        </div>

        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
        <div>
              <img src={img3} />
            </div>  
            
            <div>
                   <h2>OBISPO</h2>
                  <h3>Mons. Rutilo Felipe Pozos Lorenzini</h3>
                  <p>
                           diocesisobrego@prodigy.net.mx
                  </p>
                   <button>
                     Diócesis de Cd. Obregón 
                   </button>
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>

             <div>
                <img src={img1}/>
            </div>             
            <div>
                  <h2>OBISPO </h2>
                  <h3>Mons. Jesús José Herrera Quiñónez </h3>
                  <p>
                            info@diocesisdeculiacan.mx
                  </p>
                   <button>
                     Diócesis de Culiacán
                   </button>

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>

             <div>
                <img src={img2}/>
            </div>             
            <div>
                  <h2>OBISPO</h2>
                  <h3>Mons. José Leopoldo González González</h3>
                  <p>
                            diocesidenogalesar@gmail.com
                  </p>
                   <button>
                     Diócesis de Nogales
                   </button>

            </div> 
        </div>

    </div>
  )
}

  