import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Productos from "./components/Productos/Productos";
import DetalleProducto from "./components/DetalleProducto/DetalleProducto";
import Contacto from "./components/Contacto/Contacto";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Productos" element={<Productos/>}></Route>
     <Route path="/DetalleProducto" element={<DetalleProducto />}></Route>
     <Route path="/Contacto" element={<Contacto />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
 };
 
export default App;
