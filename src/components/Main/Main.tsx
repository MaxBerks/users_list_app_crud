import React from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import CardSlider from '../CardSlider/CardSlider'
import Footer from '../SliderDots/SliderDots'

type userType = {
  priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type changeSlideFuncType = () => void
type newSlideFuncType = (num: number) => void
type removeUserFuncType = (id: number) => void

type mainPropsType = {
  userList: userType[],
  prevSlide: changeSlideFuncType,
  nextSlide: changeSlideFuncType,
  newSlide: newSlideFuncType,
  removeUser: removeUserFuncType
}

export default function Main({userList, prevSlide, nextSlide, newSlide, removeUser}: mainPropsType) {
  return (
    <main className='main'>
      <div className="main__content">
        <button className='main__btn main__btn-left'><IoIosArrowBack onClick={prevSlide}/></button>
        <CardSlider userList={userList} removeUser={removeUser}/>
        <button className='main__btn main__btn-right'><IoIosArrowForward onClick={nextSlide}/></button>
      </div>
      <Footer userList={userList} newSlide={newSlide}/>
    </main>
  )
}
