import React from 'react'
import { lazy, Suspense } from 'react'
import {Routes, Route} from 'react-router-dom'


const Landing = lazy(()=>import('../pages/Landing'));
const Dashboard =  lazy(()=>import('../pages/Dashboard'));
const Profile =  lazy(()=>import('../pages/Profile'));
const PageNotFound =  lazy(()=>import('../pages/PageNotFound'));
const Loading =  lazy(()=>import('../components/Loading'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
