import React from 'react'
import './Header.scss'
import { LuUserPlus2 } from "react-icons/lu";

type openModulFuncType = () => void

type headerPropsType = {
  openModul: openModulFuncType
}

export default function Header({openModul}: headerPropsType) {
  return (
    <header className='header'>
      <div className='header__title'>Users list</div>
      <LuUserPlus2 className='header__addUser' onClick={openModul}/>
    </header>
  )
}
