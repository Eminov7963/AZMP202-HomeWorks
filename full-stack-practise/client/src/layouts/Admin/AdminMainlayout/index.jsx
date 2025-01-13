import React from 'react'
import Header from "../AdminHEader/index"
import { Outlet } from 'react-router-dom'
const AdminMainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

export default AdminMainLayout
