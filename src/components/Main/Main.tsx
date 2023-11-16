import React from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import Cards from '../CardSlider/CardSlider'
import Footer from '../Footer/Footer'

export default function Main() {
  return (
    <main className='main'>
      <div className="main__content">
        <IoIosArrowBack className='main__btn main__btn-left'/>
        <Cards />
        <IoIosArrowForward className='main__btn main__btn-right'/>
      </div>
      <Footer />
    </main>
  )
}