import React, { useState } from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import CardSlider from '../CardSlider/CardSlider'
import Footer from '../Footer/Footer'



const nextSlide = () => {

}

const prevSlide = () => {

}

export default function Main() {
  const [slideIndex, setSlideIndex] = useState(2);

  return (
    <main className='main'>
      <div className="main__content">
        <IoIosArrowBack className='main__btn main__btn-left' onClick={prevSlide}/>
        <CardSlider />
        <IoIosArrowForward className='main__btn main__btn-right' onClick={nextSlide}/>
      </div>
      <Footer />
    </main>
  )
}
