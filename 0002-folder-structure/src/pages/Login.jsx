import React from 'react';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify';

const Login = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handelLoging = ()=>{
       
        if(username=="Rahul Sahu" && password=="@123"){
            localStorage.setItem("user",JSON.stringify({username,role:'admin'}))
            toast.success('Login Successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            navigate("/dashboard")
        }else{
            toast.warning('Wrong username and password', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            localStorage.removeItem("user")
        }

    }
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-800">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='border border-2 rounded-2xl px-2 py-0.5 border-b-blue-600 m-1' placeholder='enter your username...' type='text' />
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='border border-2 rounded-2xl px-2 py-0.5 border-b-blue-600 m-1' placeholder='enter your password...' type='password' />
    <div className="card-actions justify-end">
      <button onClick={()=>handelLoging()} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login