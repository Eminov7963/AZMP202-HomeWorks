import React from 'react'
import Header from '../../../layouts/Client-header';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default ClientLayout
