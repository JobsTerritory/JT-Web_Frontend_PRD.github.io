import React from 'react'
import waLogo from '../images/whatsapp-logo.png'
const whatsappChat = () => {
  return (
    <div className='wa-chat-logo'>
      <a href='https://wa.me/919686116232' target='_blank'>
      <img src={waLogo}/>
      </a>
    </div>
  )
}

export default whatsappChat

