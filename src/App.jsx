import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input placeholder='Digite seu email' type="email" />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input placeholder='Digite sua senha' type="password" />
          </div>
        </form>
      </main>
    </>
  )
}

export default App
