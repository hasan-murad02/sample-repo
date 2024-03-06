import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="card">
        Environment variables:
        <p>Node environment: {process.env.NODE_ENV}</p>
        <p>PORT: {import.meta.env.VITE_PORT || 'unknown'}</p>
        <p>DATABASE URL: {import.meta.env.VITE_MONGO_URI || 'unknown'}</p>
        <p>JWT SECRET: {import.meta.env.VITE_JWT_SECRET || 'unknown'}</p>
      </div>

    </>
  )
}

export default App
