import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="vertical-layout vertical-menu-modern  navbar-floating footer-static" dataOpen="click" dataMenu="vertical-menu-modern" dataCol="">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout