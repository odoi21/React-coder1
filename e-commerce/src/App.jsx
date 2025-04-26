import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import ProductCard from './components/ItemList/ItemList'
import ItemList from './components/ItemList/ItemList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from "./components/context/CartContext";






function App() {



  return (
    <>
      
          <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route path='/Items' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
          </CartProvider>
    </>
  )

}



















export default App


//  className={style["hola"]} forma de nombrar clase principalmente si contiene espacios o guines o caracteres especiales

//  className={style.customButton} otra forma style pertenece al nombre de la importacion