import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
    <NavBar>
    <ItemListContainer></ItemListContainer>

    </NavBar>
    </>
  )
}

export default App
