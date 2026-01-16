import './index.css'
import { useState } from 'react'

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={() => props.setName("Cipriano")}>Cambiar a Cipriano</button>
      <br/>
      <button onClick={() => props.setName("Klara")}>Cambiar a Klara</button>
    </>
  )
}

function ParentComponent() {
  const [name, setName] = useState("Iker")
  return <ChildComponent name={name} setName = {setName}/>
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App