import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'

const isSinged=true ;


const PrivateRouter = () => {
  return (
    <div>
        {isSinged?<Outlet></Outlet>:<Navigate to="/login"></Navigate>}
    </div>
  )
}

export default PrivateRouter