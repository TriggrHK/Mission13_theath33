import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const center = {
  width: '65%',
  margin: 'auto',
};

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={center}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
