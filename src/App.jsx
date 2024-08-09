
import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';



import Inicio from './pages/inicio/Inicio';
import Directorio from './pages/inicio/Directorio'

import Informacion from './pages/informacion/Informacion';
import Gobierno from './pages/gobierno/Gobierno'

import PGP from './pages/pgp/PGP';
import Provincia from './pages/provincia/Provincia'

import Navbar from './components/Navbar';
import Footer from './components/Footer';







export default function App() {
  const location = useLocation();
  console.log(location.pathname);


  return (
    <div className='containerApp'>
      <p className='p-Bienvenidos'>Directorio de la Arquidiócesis de Hermosillo</p>
      <hr className='hr-App'/>
      <h1 className='h1-Arquidiócesis'>Arquidiócesis de Hermosillo</h1>
    
      <Navbar />

      <br />

      <Routes>
        <Route path="/AhilloPage" exact element={<Inicio />} />
        <Route path="/AhilloPage/directorio" element={<Directorio />} />

        <Route path="/AhilloPage/Informacion" element={<Informacion />} />
        <Route path="/AhilloPage/gobierno" element={<Gobierno />} />

        <Route path="/AhilloPage/PGP" element={<PGP />} />
        <Route path="/AhilloPage/provincia" element={<Provincia />} />

        <Route path="*" element={ <Inicio />} />
      </Routes>

      <Footer/>

    </div>
  );
}




