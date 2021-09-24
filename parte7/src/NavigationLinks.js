import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLinks = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/blog'>Blog</Link>
    </>
  )
}

export default NavigationLinks
