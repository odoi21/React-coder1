import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'

function App() {



  const miPromesa = new Promise( (resolve, reject) => {

    const Products = [
      {
        id: 'dos',
        name: 'Ropa',
        description: 'calidad buena',
        stock: 10,
      },
      {
        id: 'uno',
        name: 'Ropa',
        description: 'calidad buena',
        stock: 10,
      },
      {
        id: 'tres',
        name: 'Ropa',
        description: 'calidad buena',
        stock: 10,
      }
    ]
  
    setTimeout(() => {
      resolve(Products)
    }, 3000);
  
  })
  
  
  
  useEffect(() => {
  
    miPromesa.then(res => console.log(res))
  
  }, [])





  return (
    <>
    <NavBar>
    
    </NavBar>

    <ItemCount></ItemCount>
    </>

  )
};







export default App


//  className={style["hola"]} forma de nombrar clase principalmente si contiene espacios o guines o caracteres especiales

//  className={style.customButton} otra forma style pertenece al nombre de la importacion