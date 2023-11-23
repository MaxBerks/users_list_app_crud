import React from 'react'
import "./Carousel.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import CardsContainer from '../CardsContainer/CardsContainer'
import SliderDots from '../SliderDots/SliderDots'

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

export default function Carousel({userList, prevSlide, nextSlide, newSlide, removeUser}: mainPropsType) {
  return (
    <main className='carousel'>
      <div className="carousel__content">
        <button className='carousel__btn carousel__btn-left'><IoIosArrowBack onClick={prevSlide}/></button>
        <CardsContainer userList={userList} removeUser={removeUser}/>
        <button className='carousel__btn carousel__btn-right'><IoIosArrowForward onClick={nextSlide}/></button>
      </div>
      <SliderDots userList={userList} newSlide={newSlide}/>
    </main>
  )
}
