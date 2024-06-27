
//import './style.css';
import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

//import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import Inicio from './pages/Inicio';
import InformacionPage from './pages/InformacionPage';
import Gobierno from './pages/Gobierno'
import Directorio from './pages/Directorio'
import Documentos from './pages/Documentos'
import Blog from './pages/Blog'
import Galeria from './pages/Galeria'
import Diezmo from './pages/Diezmo'
import Contacto from './pages/Contacto'
import VisitaPastoral from './pages/VisitaPastoral';
//import UsersPage from './pages/UsersPage';
//import UserPage from './pages/UserPage';

import Navbar from './components/Navbar';
//import Search from './components/Search';

import { getDocs,collection} from 'firebase/firestore'
import db from './firebase/firebaseConfig'
import { useState, useEffect } from 'react';




export default function App() {
  const location = useLocation();
  console.log(location.pathname);




const [first, setfirst] = useState([])

useEffect(() => {
  const data = collection(db, 'auctions')
  getDocs(data).then((resp)=>{
    //console.log(resp.docs[0].id)
    //console.log(resp.docs[0].data())

setfirst(
    resp.docs.map((doc)=>{
            return {...doc.data(), id:doc.id }
          })
        
        )
  })

}, [])





  return (
    <div>
      <Navbar />
    {first.map((el,i)=>(
      <p key={i}>{el.nombre}</p>
    ))}

  {/*     {location.pathname === '/' ? (
        <Link to="/">HOME</Link>
      ) : (
        <Link to="/search" className="search">
          {' '}
          Search
        </Link>
      )} */}
      <br />
      <br />

      <Routes>
        <Route path="/" exact element={<Inicio />} />
       {/*  <Route path="/search" element={<Search />} /> */}
        <Route path="/Informacion" element={<InformacionPage />} />

     {/*    <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
2
        

        <Route path="/usuarios/" element={<Navigate to="/users" />} /> */}

       {/*  <Route path="/gobierno" element={<DashboardPage />}>


          <Route path="welcome" element={<p>Welcome! in Outled ---componente nuevo</p>} />
          <Route path="goodbye" element={<p>goodbye! in Outlet</p>} />
        </Route> */}

<Route path="/gobierno" element={<Gobierno />} />
<Route path="/directorio" element={<Directorio />} />

<Route path="/documentos" element={<Documentos />} /> 

<Route path="/blog" element={<Blog />} />
<Route path="/galeria" element={<Galeria />} />
<Route path="/diezmo" element={<Diezmo />} />

<Route path="/contacto" element={<Contacto />} />
<Route path="/VisitaPastoral" element={<VisitaPastoral />} />




        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </div>
  );
}




