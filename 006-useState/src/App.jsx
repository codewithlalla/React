import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [user,setUser] = useState(true);

  const handleUser=()=>{
setUser(!user)
  }
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Code With Lalla</h1>
<p>{count}</p>
<p>{`user is ${user?'active':'blocked'}`}</p>

<input type='button' value='inc' onClick={()=>setCount(count+1)}/>
<input type='button' value='user' onClick={()=>handleUser()}/>
      
    </>
  )
}

export default App
