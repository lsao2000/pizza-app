import React from 'react'
import {Link} from "react-router-dom"
import {Instagram, WhatsApp, Facebook, Twitter }from "@mui/icons-material"
const Footer = () => {
  return (
    <div className='footer'>
        <Instagram color='purple' />
        <WhatsApp />
        <Twitter />
        <Facebook />
        <div className='socialMedia'></div>
        <p>&copy; 2023 LahcenPitza</p>
    </div>
  )
}

export default Footer