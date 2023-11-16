import React from 'react'
import "./Card.scss";
import { TfiEmail } from "react-icons/tfi";
import classNames from 'classnames'
// import photo from ;

type CardPropsType = {
  isCenter: boolean,
  name: string,
  email: string,
  photoURL: string
}

export default function Card({isCenter, name, email, photoURL}: CardPropsType) {
  return (
    <div className={classNames('card', {'card-center': isCenter})}>
      <img src={require("./../../assets/photos/photo.jpg")} alt="#" className='card__photo'/>
      <h2 className='card__name'>{name}</h2>
      <h3 className='card__email'>
        <TfiEmail className='email__icon'/>
        <span className='email__text'>{email}</span>
      </h3>
      <div className={classNames({'card-darkWrapper': !isCenter})}></div>
    </div>
  )
}
