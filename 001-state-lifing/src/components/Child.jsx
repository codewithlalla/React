import React from 'react'

const Child = ({userEnput, setUserEnput}) => {
  return (
    <div>Child
        <input type='text' value={userEnput} onChange={(e)=>setUserEnput(e.target.value)}/>
    </div>
  )
}

export default Child