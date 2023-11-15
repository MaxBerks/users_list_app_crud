import React from 'react'
import './Footer.scss'
import { PiMouseSimpleLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className="footer__dots">
        <li className="dots__dot"></li>
        <li className="dots__dot dots__dot-active"></li>
        <li className="dots__dot"></li>
      </ul>
      <PiMouseSimpleLight className='footer__mouse'/>
    </footer>
  )
}
