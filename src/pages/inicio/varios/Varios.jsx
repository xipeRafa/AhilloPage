


import './varios.css'


export default function Varios({arrPadres}) {
	return(
			<>
				{
					arrPadres.filter(ele => ele.clasificacion === 'otro').map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>{el.clasificacion}</p>
							</div>	

					))
				}
			</>
	)
}
