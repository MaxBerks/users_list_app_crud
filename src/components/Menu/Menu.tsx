import React, { useState } from 'react'
import './Menu.scss'

import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { LuUserMinus2 } from "react-icons/lu";

import classNames from 'classnames'

type menuPropsType = {
  enabled: boolean
}

export default function Menu({enabled}: menuPropsType) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  }

  const closeMenu = () => {
    setIsMenuOpened(false);
  }
  

  return (
    <div className={classNames('menu', {'menu-opened': isMenuOpened}, {'menu-disabled': !enabled})}>
      <IoIosMenu className='menu__menuIcon' onClick={openMenu}/>
      <LuUserMinus2 className='menu__subIcon menu__deleteIcon' />
      <HiMiniPencilSquare className='menu__subIcon menu__penIcon' />
      <IoIosClose className='menu__subIcon menu__closeIcon' onClick={closeMenu}/>
    </div>
  )
}
