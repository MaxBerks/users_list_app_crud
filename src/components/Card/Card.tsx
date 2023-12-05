import React from 'react'
import "./Card.scss";
import { TfiEmail } from "react-icons/tfi";
import classNames from 'classnames'
import Menu from '../Menu/Menu'

type removeUserFuncType = (id: number) => void
type openModalFuncType = (mode: number, id: number) => void

type CardPropsType = {
  id: number,
  priority: number,
  name: string,
  email: string,
  photoURL: string,
  removeUser: removeUserFuncType,
  openModal: openModalFuncType
}

export default function Card({id, priority, name, email, photoURL, removeUser, openModal}: CardPropsType) {
  return (
    <div className={classNames('card', {'card-invisible': priority === 0, 'card-center': priority === 2, 'card-left': priority === 1, 'card-right': priority === 3})}>
      <Menu enabled={priority === 2} id={id} removeUser={removeUser} openModal={openModal}/>
      <img src={photoURL} alt="#" className='card__photo'/>
      <h2 className='card__name'>{name}</h2>
      <h3 className='card__email'>
        <TfiEmail className='email__icon'/>
        <span className='email__text'>{email}</span>
      </h3>
      <div className={classNames({'card-darkWrapper': priority !== 2})}></div>
    </div>
  )
}
