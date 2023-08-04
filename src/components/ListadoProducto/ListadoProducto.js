import { BrowserRouter, Routes, Route, useBeforeUnload } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { prettyDOM } from "@testing-library/react";

const ListadoProducto = () => {
  const [productos, setProductos] = useState([]);
  const [random, setRandom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const arrayProd = response.data.products;
        setProductos(arrayProd);
        cambiarRandom(arrayProd);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const cambiarRandom = (arrayProd) => {
    // Utilizamos un arreglo aleatorio de índices sin repetición
    const randomIndexes = Array.from({ length: arrayProd.length }, (_, index) => index);
    for (let index = randomIndexes.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random() * (index + 1));
      [randomIndexes[index], randomIndexes[j]] = [randomIndexes[j], randomIndexes[index]];
    }

    // Tomamos los primeros 6 elementos del array original en función de los índices aleatorios
    const randomProducts = randomIndexes.slice(0, 6).map(index => arrayProd[index]);
    setRandom(randomProducts);
  };

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        random.map((product, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};

export default ListadoProducto;
