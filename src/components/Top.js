import React from 'react'
import "./Top.css"
import Logo from "../assets/cw.svg"

function Top() {
  return (
    <div className='top'>
        <img src={Logo} alt="logo" className='logo1'/>
    </div>
  )
}

export default Top