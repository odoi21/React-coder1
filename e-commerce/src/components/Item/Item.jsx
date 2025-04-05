import { useState, useEffect } from 'react'
import style from './Item.module.css'
import { useParams, Navigate, Link } from 'react-router-dom'

const ProductsCard = (params) => {
    if (categoryId) {
        return (
            <>
                {data?.filter((prod) => prod.category === categoryId).map((prod) => (
                    <div
                        key={prod.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => Navigate(`/item/${prod.id}`)}
                        >
                        {prod.title}
                    </div>
                ))}
            </>
        );
    }

}

export default ProductsCard