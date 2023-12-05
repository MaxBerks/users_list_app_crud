import React from 'react'
import './Header.scss'
import { LuUserPlus2 } from "react-icons/lu";

type openModalFuncType = (mode: number, id: number) => void

type headerPropsType = {
  openModal: openModalFuncType,
}

export default function Header({openModal}: headerPropsType) {
  return (
    <header className='header'>
      <div className='header__title'>Users list</div>
      <LuUserPlus2 className='header__addUser' onClick={() => openModal(0, -1)}/>
    </header>
  )
}
