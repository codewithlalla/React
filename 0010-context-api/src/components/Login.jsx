import React from 'react'
import { useUser } from '../contexts/UserContext'

const Login = () => {

    const {user, setUser} = useUser()
  return (
    <div><p>Login</p>
    
    <input value={user} 
    onChange={(e)=>setUser(e.target.value)} type='text'/>
    </div>
  )
}

export default Login