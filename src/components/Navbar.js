import React from "react";
import "../styles/Navbar.css"
import {Link, Outlet} from 'react-router-dom'
import logo from "../assets/pizzaLogo.png"
import ReorderIcon from '@mui/icons-material/Reorder';
import {useState} from 'react'
function Navbar () {
    const [displayLink, setDisplayLink] = useState(false)
    return(
        <>
            <div className="navbar">
                <div className="leftSide" id={displayLink ? 'show': 'hide'}>
                    <img  src={logo} />
                    <div className="hiddenLinks">
                        <Link to='/'>Home</Link>
                        <Link to='/pages/Menu'>Menu</Link>
                        <Link to='/pages/Contact'>Contact</Link>
                        <Link to='/pages/About'>About</Link>
                    </div>

                </div>
                <div className="rightSide">
                    <Link to='/'>Home</Link>
                    <Link to='/pages/Menu'>Menu</Link>
                    <Link to='/pages/Contact'>Contact</Link>
                    <Link to='/pages/About'>About</Link>
                    <button onClick={() => {setDisplayLink(!displayLink)}}>
                        <ReorderIcon />
                    </button>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}


export default Navbar