import { BrowserRouter, Routes, Route, useBeforeUnload } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { prettyDOM } from "@testing-library/react";

const ListadoProducto = () => {
  const [productos, setProductos] = useState([]); // array de productos!!
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);
  let index1 = 20;
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const arrayProd = response.data.products;
        setProductos(arrayProd);
        cambiarRandom(arrayProd);
        console.log(arrayProd);
      })
      .finally(() => {
        setLoading(false); // Indicar que la carga ha finalizado
      });
  }, []);

  const cambiarRandom = (arrayProd) => {
    setRandom(arrayProd[Math.floor(Math.random() * arrayProd.length)])
    console.log(random);
  };


  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        Array.from({length : 6}).map((_) => (
          <Card key={index1} style={{ width: '18rem' }}>            
            <Card.Img variant="top" src={productos[index1].thumbnail} />
            <Card.Body>
              <Card.Title>{productos[index1].title}</Card.Title>
              <Card.Text>{productos[index1].description}</Card.Text>
            </Card.Body>
          </Card>
          
        ))
      )}
    </>
  );
};

export default ListadoProducto;
