import { useState } from 'react'
import pokeballLogo from '/pokeball.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeballLogo} className="logo" alt="Pokedex logo" />
        </a>
      </div>
      <h1>Pokedex</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Pokedex logos to access API
      </p>
    </>
  )
}

export default App
