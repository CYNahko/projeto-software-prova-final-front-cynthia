import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViagensApp from './Viagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ViagensApp></ViagensApp>
      </div>
    </>
  )
}

export default App
