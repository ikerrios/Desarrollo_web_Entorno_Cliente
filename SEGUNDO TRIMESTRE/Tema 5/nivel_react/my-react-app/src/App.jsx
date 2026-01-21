import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setMsg(`Inscripcion enviada para: ${email}`)
  }

  return (
    <>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
      <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <button type="submit">Enviar</button>
      </form>
      {msg && <p>{msg}</p>}
    </>
  )
}

export default App