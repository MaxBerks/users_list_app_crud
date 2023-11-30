import React from 'react'
import "./Carousel.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import CardsContainer from '../CardsContainer/CardsContainer'
import SliderDots from '../SliderDots/SliderDots'
import classNames from 'classnames'

type userType = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type changeSlideFuncType = () => void
type newSlideFuncType = (num: number) => void
type removeUserFuncType = (id: number) => void

type CarouselPropsType = {
  userList: userType[],
  priority: number[],
  prevSlide: changeSlideFuncType,
  nextSlide: changeSlideFuncType,
  newSlide: newSlideFuncType,
  removeUser: removeUserFuncType
}

export default function Carousel({userList, priority, prevSlide, nextSlide, newSlide, removeUser}: CarouselPropsType) {
  return (
    <main className='carousel'>
      <div className="carousel__content">
        <button className={classNames('carousel__btn carousel__btn-left', {'carousel__btn-disabled': userList.length <= 1})}><IoIosArrowBack onClick={prevSlide} /></button>
        <CardsContainer userList={userList} priority={priority} removeUser={removeUser}/>
        <button className={classNames('carousel__btn carousel__btn-right', {'carousel__btn-disabled': userList.length <= 1})}><IoIosArrowForward onClick={nextSlide}/></button>
      </div>
      <SliderDots userList={userList} priority={priority} newSlide={newSlide}/>
    </main>
  )
}
