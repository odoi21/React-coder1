import { useState, useEffect } from 'react'
import style from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import { getDoc, collection, getDocs, getFirestore,query, where } from 'firebase/firestore'
import  db  from '../../Firebase/client'


const ItemListContainer = (params) => {

    const [products, setProducts] = useState([]);
    const { category } = useParams()


    

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
        
        <ItemList products={products} />
    );
}

export default ItemListContainer