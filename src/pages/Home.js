import React from "react";
import {Link} from 'react-router-dom'
import img1 from '../assets/pizza.jpeg'
import '../styles/Home.css'


function Home() {
    return (
        <div className="home" style={{background:`url(${img1})`}} >
            <div 
                
                className="headerContainer"
            >
                <h1>Lahcen Pizzeria</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to='/pages/Menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home