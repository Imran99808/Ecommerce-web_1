import React from 'react'
import Head from './Head'
import Nav from './Nav'
import Search from './Search'
import './Header.css'

function Header({cartLength}) {
  return (
    <>
     <Head/>
     <Search cartLength={cartLength}/>
     <Nav/>
    </>
  )
}

export default Header
