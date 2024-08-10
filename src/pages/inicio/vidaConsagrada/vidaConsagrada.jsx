
import { useState, useEffect } from "react";

import './vidaConsagrada.css'







export default function VidaConsagrada({arrPadres}) {

	  const [parroquiaState, setParroquiaState] = useState('vida consagrada femenina');

	return(
			<>


        <div className='parroquiasButtons'>
            <button onClick={()=>{ setParroquiaState('vida consagrada femenina')}}>Vida Consagrada Femenina</button>
            <button onClick={()=>{ setParroquiaState('vida consagrada masculina')}}>Vida Consagrada Masculina</button>
        </div>

				{
					arrPadres.filter(ele => ele.clasificacion === parroquiaState).map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>{el.clasificacion}</p>
							</div>	

					))
				}
			</>
	)
}
