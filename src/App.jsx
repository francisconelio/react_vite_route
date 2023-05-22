import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
    
    <nav>
    <ul>
      <li><Link to='/Cadastro'>Cadastro</Link></li>
      <li><Link to='/Sobre'>Sobre</Link></li>
      <li><Link to='/Contato'>Contato</Link></li>
    </ul>
    </nav>
    </BrowserRouter> 
    </>
  )
}

export default App
