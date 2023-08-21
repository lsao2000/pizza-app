import React from 'react'
import '../styles/Footer.css'
// import {Link} from "react-router-dom"
import {Instagram, WhatsApp, Facebook, Twitter } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <Instagram />
          <WhatsApp />
          <Twitter />
          <Facebook />
        </div>
        <p>&copy; 2023 LahcenPizza</p>
    </div>
  )
}

export default Footer