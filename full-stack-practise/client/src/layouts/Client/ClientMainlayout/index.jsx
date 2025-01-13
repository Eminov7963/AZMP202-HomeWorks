import React from 'react'
import ClientHeader from '../ClienteHeader'
import { Outlet } from 'react-router-dom'

const ClientMainLayout = () => {
  return (
    <div>
      <ClientHeader/>
      <Outlet/>
    </div>
  )
}

export default ClientMainLayout
