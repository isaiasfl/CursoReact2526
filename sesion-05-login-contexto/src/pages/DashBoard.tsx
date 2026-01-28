import React from 'react'
import { useAuth } from '../context/AuthContext'

const DashBoard = () => {
  const {user, logout} = useAuth()
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard