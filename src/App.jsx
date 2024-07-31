
import {
  //Link,
  //Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

//import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import Inicio from './pages/inicio/Inicio';
import InformacionPage from './pages/informacion/InformacionPage';

import Gobierno from './pages/Gobierno'
import Directorio from './pages/directorio/Directorio'
import Documentos from './pages/Documentos'

import Blog from './pages/Blog'
import Galeria from './pages/Galeria'
import Diezmo from './pages/Diezmo'

import Contacto from './pages/Contacto'
import VisitaPastoral from './pages/VisitaPastoral';
//import UsersPage from './pages/UsersPage';
//import UserPage from './pages/UserPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Parroquias from './pages/directorio/Parroquias';
//import Search from './components/Search';






export default function App() {
  const location = useLocation();
  console.log(location.pathname);




 





  return (
    <div className='containerApp'>
      <p className='p-Bienvenidos'>Directorio de la Arquidiócesis de Hermosillo</p>
      <hr className='hr-App'/>
      <h1 className='h1-Arquidiócesis'>Arquidiócesis de Hermosillo</h1>
    
      <Navbar />

 

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
        <Route path="/AhilloPage" exact element={<Inicio />} />
        {/*  <Route path="/search" element={<Search />} /> */}
        <Route path="/AhilloPage/Informacion" element={<InformacionPage />} />

        {/*    <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
2
        

        <Route path="/usuarios/" element={<Navigate to="/users" />} /> */}

        {/*  <Route path="/gobierno" element={<DashboardPage />}>


          <Route path="welcome" element={<p>Welcome! in Outled ---componente nuevo</p>} />
          <Route path="goodbye" element={<p>goodbye! in Outlet</p>} />
        </Route> */}

        <Route path="/AhilloPage/gobierno" element={<Gobierno />} />
        <Route path="/AhilloPage/directorio" element={<Directorio />} />

        <Route path="/AhilloPage/documentos" element={<Documentos />} />

        <Route path="/AhilloPage/blog" element={<Blog />} />
        <Route path="/AhilloPage/galeria" element={<Galeria />} />
        <Route path="/AhilloPage/diezmo" element={<Diezmo />} />

        <Route path="/AhilloPage/contacto" element={<Contacto />} />
        <Route path="/AhilloPage/VisitaPastoral" element={<VisitaPastoral />} />
        <Route path="/AhilloPage/parroquias" element={<Parroquias />} />




        <Route path="*" element={ <Inicio />} />
      </Routes>

      <Footer/>

    </div>
  );
}




