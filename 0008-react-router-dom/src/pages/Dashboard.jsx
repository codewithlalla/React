import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="mockup-browser border border-base-300 w-full">
  <div className="mockup-browser-toolbar">
    <div className="input">https://daisyui.com</div>
  </div>
  <div className="grid place-content-center h-80">Dashboard</div>
  <Link to='/profile/lalla'>Profile</Link>
</div>
  )
}

export default Dashboard
