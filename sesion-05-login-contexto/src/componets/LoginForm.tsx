import React from 'react'
import { useAuth } from '../context/AuthContext'

const LoginForm = () => {
const {login }=useAuth()

  return (
    <div>LoginForm</div>
  )
}

export default LoginForm