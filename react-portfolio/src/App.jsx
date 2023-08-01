import { useState } from 'react'
import './App.css'
import HeaderNav from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="nav">
      <HeaderNav/>
    </div>
  )
}

export default App
