import React, { useState } from 'react'

//esto es lo mismo que lo de la linea 48 

export default function Contador() {
    
    const [count, setCount] = useState(1);
    
    function sumar() {

        setCount(count + 1)
    }
    
    function restar() {

        if (count > 1) {
            setCount(count - 1)
        }
        
    }

    function OnAdd() {
        console.log('Se agrego al carrito')
    }

    return (
        <div className="div"
            style={{marginTop:100, display:'flex'}}>

            <button style={{width:50, height:40}} onClick={sumar}>
                +
            </button>

            <h2>{count}</h2>

            <button style={{width:50, height:40}} onClick={restar}>
                -
            </button>

            <button onClick={OnAdd}>
                Agregar Al carrito
            </button>

        </div>
    )
}

// esto es lo mismo que en la linea 3

    function ContadorWhithArrowFunction() {
    
    const [count, setCount] = useState(1);
    
    const sumar = () => {
        setCount(count + 1)
    }
    
    const restar=() => {

        if (count > 1) {
            setCount(count - 1)
        }
        
    }

    const OnAdd= () => {
        console.log('Se agrego al carrito')
    }
}