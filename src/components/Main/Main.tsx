import React from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import Cards from '../CardSlider/CardSlider'


export default function Main() {
  return (
    <main className='main'>
      <IoIosArrowBack className='main__btn main__btn-left'/>
      <Cards />
      <IoIosArrowForward className='main__btn main__btn-right'/>
    </main>
  )
}
