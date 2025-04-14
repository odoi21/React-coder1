import { useState, useEffect } from 'react'
import style from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import { getDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import db from '../../Firebase/client'


const ItemListContainer = (PRoducts) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRef = collection(db, "products");
                let q;

                if (categoryId) {
                    // Filtrar por categoría si existe un categoryId
                    q = query(productsRef, where("categoryId", "==", categoryId));
                } else {
                    // Obtener todos los productos si no hay categoría
                    q = productsRef;
                }

                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);


    const productsRef = collection(db, "products")

    const getProducts = async () => {
        const data = await getDocs(productsRef)
        const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        //console.log(dataFiltrada) 
        setProducts(dataFiltrada)

    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
        <h1>{categoryId ? `Productos en ${categoryId}` : "Todos los productos"} </h1>
        <ItemList products={products} />
        </>
        
        
        
    );
}

export default ItemListContainer