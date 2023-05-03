import Head from 'next/head'
import React from 'react'
import { useStateContext } from '../../context/StateContext'
import Nav from './Nav'

const Layout = ({children}) => {
  
  return (
    <div className='min-h-screen  overflow-hidden select-none bg-zinc-50 w-full'>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout