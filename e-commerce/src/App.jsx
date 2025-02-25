import { useState, useEffect } from 'react'
import './App.css'
import  NavBar from './components/NavBar/Navbar'
import ItemCount from './components/ItemCount/ItemCount'
import ProductCard from './components/Item/Item'
function App() {





const Prods = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Llamada a Fake Store API usando .then y limitando a 10 productos
    fetch('https://fakestoreapi.com/products?limit=10')
      .then (res=> res.json())
      .then (json=> {
        setProducts(json)
      })


      .catch((error) => {
        console.error('Error fetching products:', error);
      });
      
  }, []);
  
  
  return (
    <div>
      <h1>Lista de Productos</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};




  return (
    <>
    <NavBar>
    
    </NavBar>
    <Prods></Prods>
    <ItemCount></ItemCount>
    <ProductCard></ProductCard>
    </>

  )
};







export default App


//  className={style["hola"]} forma de nombrar clase principalmente si contiene espacios o guines o caracteres especiales

//  className={style.customButton} otra forma style pertenece al nombre de la importacion