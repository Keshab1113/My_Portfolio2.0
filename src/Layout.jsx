import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Canvas from './components/Canvas/Canvas'

const Layout = () => {
  return (
    <>
      <Canvas/>
      <Header />
      <Outlet/>
    </>
  )
}

export default Layout
