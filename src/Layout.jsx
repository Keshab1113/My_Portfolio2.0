import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Canvas from './components/Canvas/Canvas'
import ScrollToTop from './components/ScrollToTop'

const Layout = () => {
  const { pathname } = useLocation()

  // Scroll to top whenever the route changes so a new page
  // always opens from the top instead of preserving the previous scroll.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Canvas/>
      <Header />
      <Outlet/>
      <ScrollToTop />
    </>
  )
}

export default Layout
