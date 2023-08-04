import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoProducto from "../ListadoProducto/ListadoProducto";
const Home = () => {
    // componente listado producto, este recibe la cantidad de productos que quiere recibir
  return (
    <>
    <h1>Estamos en Home!! ééééé</h1>
    <ListadoProducto cantidad="6"></ListadoProducto>
    </>
  );
 };
 
export default Home;
