import { getDocs, collection } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { useState, useEffect } from "react";



import Inicio from './pages/inicio/Inicio';

import Presbiterio from './pages/inicio/presbiterio/Presbiterio'
import VidaConsagrada from './pages/inicio/vidaConsagrada/VidaConsagrada'
import OrganismosLaicales from './pages/inicio/organismosLaicales/OrganismosLaicales'

import Parroquias from './pages/inicio/parroquias/Parroquias'
import InstitucionesEducativas from './pages/inicio/institucionesEducativas/InstitucionesEducativas'
import ObrasSociales from './pages/inicio/obrasSociales/ObrasSociales'

import Varios from './pages/inicio/varios/Varios'





import Informacion from './pages/informacion/Informacion';
import Gobierno from './pages/gobierno/Gobierno'

import PGP from './pages/pgp/PGP';
import Provincia from './pages/provincia/Provincia'




import Navbar from './components/Navbar';
import Footer from './components/Footer';











export default function App() {

  const location = useLocation();
  console.log(location.pathname);

  const [arrPadres, setArrPadres] = useState([])

   useEffect(() => {
    const data = collection(db, "auctions");
    getDocs(data).then((resp) => {
      //console.log(resp.docs[0].id)
      //console.log(resp.docs[0].data())
      setArrPadres(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);


  return (
    <div className='containerApp'>
      <p className='p-Bienvenidos'>Directorio de la Arquidiócesis de Hermosillo</p>
      <hr className='hr-App'/>
      <h1 className='h1-Arquidiócesis'>Arquidiócesis de Hermosillo</h1>
    
      <Navbar />

      <br />


      <Routes>

        <Route path="/AhilloPage" exact element={<Inicio />} />

            <Route path="/AhilloPage/presbiterio"             element={<Presbiterio         arrPadres={arrPadres} />} />

            <Route path="/AhilloPage/vidaConsagrada"          element={<VidaConsagrada      arrPadres={arrPadres} />} />
            <Route path="/AhilloPage/organismosLaicales"      element={<OrganismosLaicales  arrPadres={arrPadres} />} />
            <Route path="/AhilloPage/parroquias"              element={<Parroquias          arrPadres={arrPadres} />} />

            <Route path="/AhilloPage/institucionesEducativas" element={<InstitucionesEducativas   arrPadres={arrPadres} />} />
            <Route path="/AhilloPage/obrasSociales"           element={<ObrasSociales             arrPadres={arrPadres} />} />
            <Route path="/AhilloPage/varios"                  element={<Varios                    arrPadres={arrPadres} />} />



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




