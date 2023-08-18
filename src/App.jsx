import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleEmail(evento) {
    setEmail(evento.target.value)
  }

  function handleSenha(evento) {
    setSenha(evento.target.value)
  }

  function handleSubmit() {
    alert(`
      Email: ${email}
      Senha: ${senha}
    `)
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Email</label>
            <input placeholder='Digite seu email' type="email" id='email' onChange={handleEmail} />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input placeholder='Digite sua senha' type="password" id='senha' onChange={handleSenha}/>
          </div>

          <button>Enviar</button>
        </form>
      </main>
    </>
  )
}

export default App
