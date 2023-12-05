import React, { useState } from 'react'
import './Menu.scss'

import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { LuUserMinus2 } from "react-icons/lu";

import classNames from 'classnames'

type removeUserFuncType = (id: number) => void
type openModalFuncType = (mode: number, id: number) => void

type menuPropsType = {
  enabled: boolean,
  id: number,
  removeUser: removeUserFuncType,
  openModal: openModalFuncType
}

export default function Menu({enabled, id, removeUser, openModal}: menuPropsType) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  }

  const closeMenu = () => {
    setIsMenuOpened(false);
  }
  
  const removeUserCloseMenu = (id: number) => {
    removeUser(id);
    closeMenu();
  }

  return (
    <div className={classNames('menu', {'menu-opened': isMenuOpened}, {'menu-disabled': !enabled})}>
      <IoIosMenu className='menu__menuIcon' onClick={openMenu}/>
      <LuUserMinus2 className='menu__subIcon menu__deleteIcon' onClick={() => removeUserCloseMenu(id)}/>
      <HiMiniPencilSquare className='menu__subIcon menu__penIcon' onClick={() => openModal(1, id)}/>
      <IoIosClose className='menu__subIcon menu__closeIcon' onClick={closeMenu}/>
    </div>
  )
}
