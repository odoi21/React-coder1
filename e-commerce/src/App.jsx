import { useState, useEffect } from 'react'
import {useFetch} from './hooks/useFetch'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import ProductCard from './components/Item/Item'
import Item from './components/Item/Item'
import ItemList from './components/ItemList/ItemList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {

  

  return (
    <>
      <BrowserRouter>
    <NavBar/>
      
    <Routes>
      <Route path='/' element={<ItemList/>}/>
      <Route path='Items' element={<ItemListContainer/>}></Route>
      <Route path='category/:categoryId' element={<ItemListContainer/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  )

}



















export default App


//  className={style["hola"]} forma de nombrar clase principalmente si contiene espacios o guines o caracteres especiales

//  className={style.customButton} otra forma style pertenece al nombre de la importacion