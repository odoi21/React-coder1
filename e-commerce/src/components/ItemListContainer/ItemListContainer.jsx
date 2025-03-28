import { useState, useEffect } from 'react'
import style from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { Link } from 'react-router-dom'

const ItemListContainer = (params) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div>
            <h1>Lista de Productos</h1>
            <div>
                {products.map(product => (
                    <>
                    <Link to={'/item/${product.id}'}>
                    <button>
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                            <p>{product.description}</p>
                            <p>Precio: ${product.price}</p>
                        </div>
                    </button>
                    </Link>
                    </>

                ))}

            </div>
        </div>
    );
}

export default ItemListContainer