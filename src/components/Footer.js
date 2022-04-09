import React from 'react'
import "./Footer.css"
import FooterLogo from "../assets/design.svg"

function Footer() {
  return (
    <div className='footer'>
        <h2 className='h3'><i>Zemheri25 /</i></h2>
        <img src={FooterLogo} alt="logo" className='logo'/>
        <h1 className='design'>design</h1>
    </div>
  )
}

export default Footer