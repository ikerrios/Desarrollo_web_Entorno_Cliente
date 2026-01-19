import { useState } from 'react'

export default function App() {
  const [user, setUser] = useState(null)
  const [newEmails, setNewEmails] = useState(0)

  const button = user
    ? <button onClick={() => setUser(null)}>Logout</button>
    : <button onClick={() => setUser({ name: 'Iker Ríos' })}>Login</button>

  return (
    <>
      <h1>Nivel 5: Renderizado condicional</h1>

      {button}

      {/* Ternario en JSX */}
      {user
        ? <p>Bienvenido, {user.name}.</p>
        : <p>Inicia sesión para continuar.</p>
      }

      <hr />

      <button onClick={() => setNewEmails((n) => n + 1)}>+1 email</button>
      <button onClick={() => setNewEmails(0)}>Reset</button>

      {/* Renderizado en línea con && */}
      {newEmails > 0 && (
        <h2>Tienes {newEmails} correos nuevos.</h2>
      )}
    </>
  )
}
