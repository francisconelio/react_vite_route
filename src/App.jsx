import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    
    {/*<nav>
    <ul>
      <li><Link to='/Cadastro'>Cadastro</Link></li>
      <li><Link to='/Sobre'>Sobre</Link></li>
      <li><Link to='/Contato'>Contato</Link></li>
      <li><Link to='/Login'>Login</Link></li>
    </ul>
  </nav>*/}
    </BrowserRouter> 
    </>
  )
}

export default App
