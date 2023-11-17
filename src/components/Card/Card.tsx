import React from 'react'
import "./Card.scss";
import { TfiEmail } from "react-icons/tfi";
import classNames from 'classnames'
// import photo from ;

type CardPropsType = {
  priority: number,
  name: string,
  email: string,
  photoURL: string
}

export default function Card({priority, name, email, photoURL}: CardPropsType) {
  return (
    <div className={classNames('card', {'card-invisible': priority === 0, 'card-center': priority === 2, 'card-left': priority === 1, 'card-right': priority === 3})}>
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
