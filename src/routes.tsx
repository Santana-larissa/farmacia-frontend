import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ListaCategorias from './components/categorias/listacategoria/ListaCategoria';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
