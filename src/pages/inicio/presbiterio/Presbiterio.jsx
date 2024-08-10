


import './presbiterio.css'


export default function Presbiterio({arrPadres}) {
	return(
			<>
				{
					arrPadres.filter(ele => ele.clasificacion === 'otro').map((el, i)=>(
							<div key={i}>
							<div style={{ backgroundImage: `url(${el.imgUrl})`}} className="imgVida" />
								<p>padres</p>
							</div>	

					))
				}
			</>
	)
}
