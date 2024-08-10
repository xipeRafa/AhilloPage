


import './institucionesEducativas.css'


export default function InstitucionesEducativas({arrPadres}) {
	return(
			<>
				{
					arrPadres.filter(ele => ele.clasificacion === 'institucion educativa').map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>{el.clasificacion}</p>
							</div>	

					))
				}
			</>
	)
}
