import React from 'react'
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineTwitter
} from 'react-icons/ai'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiOutlineTwitter />
        </div>
        <p>&copy; 2022 BF</p>
    </div>
  )
}

export default Footer