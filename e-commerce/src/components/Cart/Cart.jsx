import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div>
            <h1>Carrito</h1>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
                {cart.map((product) => (
                    <li key={product.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "20px" }}
                        />
                        <div>
                            <h3>{product.title}</h3>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Precio unitario: ${product.Price}</p>
                            <p>Total: ${product.Price * product.quantity}</p>
                            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;




/*checkout
const Cart = () => {
    
    const [ buyer, setBuyer] = useState({name:'', email:'', phone:''})
    const [ orderId, setOrderId] = useState('')
    
    const onChangeName = (name) => {
        setBuyer({...buyer, name})
    }

    const onChangeEmail = (email) => {
        setBuyer({...buyer, email})
    }

    const onChangePhone = (phone) => {
        setBuyer({...buyer, phone})
    }  

    return (
        <div>
            <h1 sx={{ marginTop: 200, display: 'flex', alignItems: 'center' }}>Cart</h1>
            <form action="">
            <input type="text"   placeholder="Nombre y apellido" required Onchange={(event) => onChangeName(event.target.value)}/>
            <input type="number" placeholder="Correo Electronico"  required Onchange={(event) => onChangeEmail(event.target.value)}/>
            <input type="number" placeholder="Numero de Telefono" required Onchange={(event) => onChangePhone(event.target.value)}/>
            </form>
        </div>
    )   
}



//<button type="submit" onClick={()}>Enviar</button>*/
