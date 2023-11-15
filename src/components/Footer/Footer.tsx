import React from 'react'
import './Footer.scss'
import { PiMouseSimpleLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className="footer_dots">
        <li className="dots_dot"></li>
        <li className="dots_dot dots_dot__active"></li>
        <li className="dots_dot"></li>
      </ul>
      <PiMouseSimpleLight className='footer_mouse'/>
    </footer>
  )
}
