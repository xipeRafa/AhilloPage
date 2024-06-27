
import { NavLink, useNavigate } from "react-router-dom";










export default function Directorio() {

  const character = {
    textAlign: 'left',  
    width: "350px",
    height:'190px ',
    paddingTop: "10px",
    cursor:'pointer',
    backgroundImage:'url(https://www.arquidiocesisdehermosillo.org/media/com_mtree/images/cats/o/84_catedral.jpg)', 
    backgroundSize: 'contain',
  }

  const character2 = {
    display:'flex',
    justifyContent:'center',
    width: "100%",
  }


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/parroquias', {
      // replace: true,
    });
  };


  return (

   <div style={character2}>

    <div style={character} onClick={handleClick}>
      

        <NavLink  className='parroquias' to="/parroquias">4.- Parroquias y Decanatos</NavLink>
       
    </div>  
    </div>
    
  );
}








