import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (product, quantity) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Verificar que no se exceda el stock
            if (existingProduct.quantity + quantity > product.Stock) {
            alert("No puedes agregar más productos de los disponibles en stock.");
            }}
            
            if (existingProduct) {
                // Si el producto ya está en el carrito, actualiza la cantidad
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                );
            } else {
                // Si el producto no está en el carrito, agrégalo
                setCart([...cart, { ...product, quantity }]);
            }
        };

        // Eliminar un producto del carrito
        const removeFromCart = (id) => {
            setCart(cart.filter((item) => item.id !== id));
        };

        // Vaciar el carrito
        const clearCart = () => {
            setCart([]);
        };

        return (
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
                {children}
            </CartContext.Provider>
        );
    };