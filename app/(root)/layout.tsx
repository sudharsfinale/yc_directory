import React from 'react'
import Navbar from '../../components/Navbar'
import "../globals.css"

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='font-work-sans'>
        <Navbar />
        {children}</main>
  )
}

export default Layout