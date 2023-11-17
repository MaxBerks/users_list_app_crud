import React from 'react'
import "./CardSlider.scss"
import Card from '../Card/Card'

type userType = {
  priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type cardSliderPropsType = {
  userList: userType[]
}

export default function CardSlider({userList}: cardSliderPropsType ) {
  return (
    <div className='cardSlider'>
      {userList.map((el, i) => {
        return <Card key={i} priority={el.priority} name={`${el.first_name} ${el.last_name}`} email={el.email} photoURL={el.avatar}/>
      })}
    </div>
  )
}
