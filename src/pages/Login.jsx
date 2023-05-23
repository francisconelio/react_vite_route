import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    // 1 - Criar o objeto para enviar com os dados, usando useState
    const [login,setlogin] = useState({})

    const navigate = useNavigate()
  
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('submit')
      

        if(login.email === 'adm@teste' & login.senha === '123') {
         console.log('Vai para home')
         navigate('/home')
        } else {
            alert(`Usuário ou senha inválida`)
        }
      
    }

  return (
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleLogin}>
      <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="email" placeholder="name@example.com" value={login.email || ''}/>
        <label htmlFor="email">email</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="senha" placeholder="Password" value={login.senha}/>
        <label htmlFor="senha">Senha</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
      <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  </main>
  )
}

export default Login