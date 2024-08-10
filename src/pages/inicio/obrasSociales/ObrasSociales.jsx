


import './obrasSociales.css'


export default function ObrasSociales({arrPadres}) {
	return(
			<>
				{
					arrPadres.filter(ele => ele.clasificacion === 'obra social').map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>{el.clasificacion}</p>
							</div>	

					))
				}
			</>
	)
}
