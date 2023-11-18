import React from 'react'
import './Header.scss'
import { LuUserPlus2 } from "react-icons/lu";


export default function Header() {
  return (
    <header className='header'>
      <div className='header__title'>Users list</div>
      <LuUserPlus2 className='header__addUser'/>
    </header>
  )
}
