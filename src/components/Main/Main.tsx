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
        <button className='main__btn main__btn-left'><IoIosArrowBack className='main__btnIcon' onClick={prevSlide}/></button>
        <CardSlider userList={userList}/>
        <button className='main__btn main__btn-right'><IoIosArrowForward className='main__btnIcon' onClick={nextSlide}/></button>
      </div>
      <Footer />
    </main>
  )
}
