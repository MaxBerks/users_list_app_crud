import React from 'react'
import './Footer.scss'
import { PiMouseSimpleLight } from "react-icons/pi";
import classNames from 'classnames'

type userType = {
  priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type newSlideFuncType = (num: number) => void

type footerPropsType = {
  userList: userType[],
  newSlide: newSlideFuncType
}

export default function Footer({userList, newSlide}: footerPropsType) {
  return (
    <footer className='footer'>
      <ul className="footer__dots">
        {userList.map((el, i) => {
          return <li key={i} className={classNames('dots__dot', {'dots__dot-active': el.priority === 2})} onClick={() => newSlide(i)}></li>
        })}
      </ul>
      <PiMouseSimpleLight className='footer__mouse'/>
    </footer>
  )
}
