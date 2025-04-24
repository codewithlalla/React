import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [value, setValue]= useState('')
  return (
    <>
        <div>Parent</div>
        <Child userEnput={value} setUserEnput={setValue}/>
        <p>you enter: {value}</p>
    </>
  )
}

export default Parent