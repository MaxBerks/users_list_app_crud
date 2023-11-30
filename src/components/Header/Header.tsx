import React from 'react'
import './Header.scss'
import { LuUserPlus2 } from "react-icons/lu";

type openModulFuncType = () => void
type addUserFuncType = () => void

type headerPropsType = {
  openModul: openModulFuncType,
  addUser: addUserFuncType
}

export default function Header({openModul, addUser}: headerPropsType) {
  return (
    <header className='header'>
      <div className='header__title'>Users list</div>
      <LuUserPlus2 className='header__addUser' onClick={addUser}/>
    </header>
  )
}
