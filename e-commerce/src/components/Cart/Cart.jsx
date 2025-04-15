import { useState } from 'react'    

//checkout
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

export default Cart


//<button type="submit" onClick={()}>Enviar</button>
