import { useEffect } from "react";
import { useState } from "react";



export const useFetch = (url) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // Llamada a Fake Store API usando .then y limitando a 10 productos
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json)
            })


            .catch((error) => {
                setError(false)
                console.error('Error fetching products:', error);
            });

    }, []);



    return { data, loading, error }
}

export default useFetch