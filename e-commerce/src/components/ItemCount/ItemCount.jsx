import React, { useState } from 'react'



function Contador() {
    
    const [count, setCount] = useState(1);
    
    function sumar() {

        setCount(count + 1)
    }
    
    function restar() {

        if (count > 1) {
            setCount(count - 1)
        }
        
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
        </div>
    )
}

export default Contador