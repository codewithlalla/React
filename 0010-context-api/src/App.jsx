import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContextProvider } from './contexts/UserContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Dashboard/>
    </UserContextProvider>
  )
}

export default App
