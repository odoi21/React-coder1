import { useState } from "react";

const ItemCount = () => {

    const[count, setCount] = useState(1)

    const sumar = () => {
            setCount(count + 1)
        }
    
        const restar = () => {
    
            if (count > 1) {
                setCount(count - 1)
            }
    
        }
    
        const OnAdd = () => {
            console.log('Se agrego al carrito')
        }
        
        return (
            <div className={style["hola"]} style={{display:'flex'}} >
        
                <button style={{ width: 50, height: 40 }} onClick={sumar}>
                    +
                </button>
        
                <h2>{count}</h2>
        
                <button style={{ width: 50, height: 40 }} onClick={restar}>
                    -
                </button>
        
                <button onClick={OnAdd}>
                    Agregar Al carrito
                </button>
        
            </div>
        )
}


export default ItemCount