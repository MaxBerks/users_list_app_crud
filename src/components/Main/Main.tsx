import React, { useState, useEffect } from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import CardSlider from '../CardSlider/CardSlider'
import Footer from '../Footer/Footer'

type userType = {
  priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type changeSlideFuncType = () => void

type mainPropsType = {
  userList: userType[],
  prevSlide: changeSlideFuncType,
  nextSlide: changeSlideFuncType
}

export default function Main({userList, prevSlide, nextSlide}: mainPropsType) {
  return (
    <main className='main'>
      <div className="main__content">
        <IoIosArrowBack className='main__btn main__btn-left' onClick={prevSlide}/>
        <CardSlider userList={userList}/>
        <IoIosArrowForward className='main__btn main__btn-right' onClick={nextSlide}/>
      </div>
      <Footer />
    </main>
  )
}
