import React from 'react'
import './SliderDots.scss'
import { PiMouseSimpleLight } from "react-icons/pi";
import classNames from 'classnames'

type userType = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type newSlideFuncType = (num: number) => void

type sliderDotsPropsType = {
  userList: userType[],
  priority: number[],
  newSlide: newSlideFuncType
}

export default function SliderDots({userList, priority, newSlide}: sliderDotsPropsType) {
  return (
    <div className='sliderDots'>
      <ul className="sliderDots__dots">
        {userList.map((el, i) => {
          return <li key={i} className={classNames('dots__dot', {'dots__dot-active': priority[1] === i})} onClick={() => newSlide(i)}></li> //!!!!!!!!!!!!!!!!
        })}
      </ul>
      <PiMouseSimpleLight className='sliderDots__mouse'/>
    </div>
  )
}
