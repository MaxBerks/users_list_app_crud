import React from 'react'
import "./Main.scss"
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";


export default function Main() {
  return (
    <main className='main'>
      <IoIosArrowBack className='main__btn main__btn-left'/>
      <div></div>
      <IoIosArrowForward className='main__btn main__btn-right'/>
    </main>
  )
}
