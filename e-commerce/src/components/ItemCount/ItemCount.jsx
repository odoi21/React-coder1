
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemCount = ({ product }) => {
    const [count, setCount] = useState(1);
    const { addToCart } = useCart(); // Usar el contexto del carrito

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const onAdd = () => {
        addToCart(product, count); // Agregar el producto al carrito
        console.log(`Se agregaron ${count} unidades de ${product.title} al carrito`);
    };

    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button style={{ width: 50, height: 40 }} onClick={restar}>
                -
            </button>
            <h2>{count}</h2>
            <button style={{ width: 50, height: 40 }} onClick={sumar}>
                +
            </button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;