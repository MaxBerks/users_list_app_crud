import React from 'react'
import "./CardsContainer.scss"
import Card from '../Card/Card'

type userType = {
  // priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type removeUserFuncType = (id: number) => void

type cardsContainerPropsType = {
  userList: userType[],
  priority: number[],
  removeUser: removeUserFuncType
}

export default function CardsContainer({userList, priority, removeUser}: cardsContainerPropsType ) {
  return (
    <div className='cardsContainer'>
      {userList.map((el, i) => {
        return <Card key={i} id={el.id} priority={(priority.includes(i)) ? priority.findIndex(r => r === i) + 1 : 0} name={`${el.first_name} ${el.last_name}`} email={el.email} photoURL={el.avatar} removeUser={removeUser}/>
      })}
    </div>
  )
}
