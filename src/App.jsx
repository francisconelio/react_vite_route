import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import  Sobre  from './pages/Sobre'
import  Contato  from './pages/Contato'
import  Home  from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
          <li>
            <Link to='/cadastro'>Cadastro</Link>
          </li>
          <li>
            <Link to='/sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/contato'>Contato</Link>
          </li>
          <li>  
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Home' element={<Home/>}/>
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
