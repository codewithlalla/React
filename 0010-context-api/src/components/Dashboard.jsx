import React from 'react'
import { useUser } from '../contexts/UserContext'

const Dashboard = () => {
    const {user} = useUser()
  return (
    <div><p>
        Dashboard
        </p>
       you enter : {user}
        
        </div>
  )
}

export default Dashboard