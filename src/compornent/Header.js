import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
     <div className="w-full bg-black text-white p-4 flex items-center justify-start font-mono">
        <NavLink className={'mx-4'} to={'/'}>
            Home
        </NavLink>
        <NavLink className={'mx-4'} to={'/exchanges'}>
            Exchanges
        </NavLink>
        <NavLink className={'mx-4'} to={'/coins'}>
            Coins
        </NavLink>
        </div> 
    </>
  )
}

export default Header
