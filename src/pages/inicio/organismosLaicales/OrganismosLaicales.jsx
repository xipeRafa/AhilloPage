


import './organismosLaicales.css'


export default function OrganismosLaicales({arrPadres}) {

console.log(arrPadres.filter(ele => ele.clasificacion === 'organismo laical'))

	return(
			<>
				{
					arrPadres.filter(ele => ele.clasificacion === 'organismo laical').map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>{el.clasificacion}</p>
							</div>	

					))
				}
			</>
	)
}
